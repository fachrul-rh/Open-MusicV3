const { Pool } = require('pg');
const InvariantError = require('../../exceptions/InvariantError');

class SongsService {
  constructor() {
    this._pool = new Pool();
  }

  async getSongsPlaylist(playlistId) {
    const query = {
      text: `SELECT playlistsongs.id,songs.title, songs.performer FROM playlistsongs
      JOIN songs on playlistsongs.song_id=songs.id
      WHERE playlistsongs.playlist_id = $1`,
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    if (!result.rows) {
      throw new InvariantError('Gagal mengambil lagu-lagu dari playlist');
    }

    await this._cacheService.set(`playlistSongs-consumer:${playlistId}`, JSON.stringify(result));
    return result.rows;
  }
}

module.exports = SongsService;
