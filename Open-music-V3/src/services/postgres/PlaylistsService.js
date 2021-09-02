const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');
const AuthorizationError = require('../../exceptions/AuthorizationError');

class PlaylistsService {
    constructor(collaborationService) {
        this._pool = new Pool();
        this._collaborationService = collaborationService;
    }

    async addPlaylist ({ name, owner }) {
        const id = `playlist-${nanoid(16)}`;

        const query = {
            text: 'insert into playlists values($1, $2, $3) returning id',
            values: [id, name, owner],            
        };

        const result = await this._pool.query(query);
        if (!result.rows[0].id) {
            throw new InvariantError('Playlist gagal ditemukan');
        }

        return result.rows[0].id;
    }

    async getPlaylists(owner) {
        const query = {
            text:  `SELECT playlists.id, playlists.name, users.username
            FROM playlists LEFT JOIN users ON playlists.owner = users.id
            LEFT JOIN collaborations ON collaborations.playlist_id = playlists.id
            WHERE playlists.owner = $1 OR collaborations.user_id = $1`,
            values: [owner],
        };
        const result = await this._pool.query(query);
        return result.rows;
    }

    async deletePlaylists(id) {
        const query = {
        text: 'DELETE FROM playlists WHERE id = $1 RETURNING id',
            values: [id],
        };
        
        const result = await this._pool.query(query);
        if(!result.rows.length) {
            throw new NotFoundError('Playlists gagal dihapus. Id tidak ditemukan');
        }
    }

    async verifyPlaylistOwner(id, owner) {
        const query = {
            text: 'select * from playlists where id = $1',
            values: [id],
        };
        const result = await this._pool.query(query);
        if (!result.rows.length) {
            throw new NotFoundError('Playlists tidak ditemukan');
        }

        const playlists = result.rows[0];
        if (playlists.owner !== owner) {
            throw new AuthorizationError('Anda tidak berhak mengakses resource ini');
        }
    }

    async verifyPlaylistAccess(playlistId, userId) {
        try {
            await this.verifyPlaylistOwner(playlistId, userId);
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            }
            try {
                await this._collaborationService.verifyCollaborator(playlistId, userId);
            } catch {
                throw error;
            }
        }
    }
}

module.exports = PlaylistsService;