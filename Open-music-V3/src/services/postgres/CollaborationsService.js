const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const AuthorizationError = require('../../exceptions/AuthorizationError');

class CollaborationsService {
    constructor() {
        this._pool = new Pool();
    }

    async addCollaboration(playlistId, userId) {
        const id = `collab-${nanoid(16)}`;
        const query = {
            text: 'INSERT INTO collaborations VALUES($1, $2, $3) RETURNING id',
            values: [id, playlistId, userId],
        };
        const result = await this._pool.query(query);
        if (!result.rows.length) {
            throw new InvariantError('Kolaborasi gagal ditambahkan');            
        }
        return result.rows[0].id;
    }

    async deleteCollaboration(playlistId, userId) {
        const query = {
            text: 'delete from collaborations where playlist_id = $1 AND user_id = $2 returning id',
            values: [playlistId, userId],
        };
        const result = await this._pool.query(query);
        if (!result.rows.length) {
            throw new InvariantError('kolaborasi gagal dihapus');
        }
    }

    async verifyCollaborator(playlistId, userId) {
        const query = {
            text: 'select * from collaborations where playlist_id = $1 AND user_id = $2',
            values: [playlistId, userId],
        };
        const result = await this._pool.query(query);
        if (!result.rows.length) {
            throw new AuthorizationError('Kolaborasi gagal diverifikasi');
        }
    }
}

module.exports = CollaborationsService;