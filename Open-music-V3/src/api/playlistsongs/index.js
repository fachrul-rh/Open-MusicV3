const PlaylistsSongHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'AddSongPlaylistMusic',
    version: '1.0.0',
    register: async (server, { playlistSongsService, playlistsService, validator }) => {
        const playlistsSongHandler = new PlaylistsSongHandler(playlistSongsService, playlistsService, validator);
        server.route(routes(playlistsSongHandler));
    },
};