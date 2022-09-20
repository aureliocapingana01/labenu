"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(2023, () => {
    console.log("Server rumming is http://localhost:2023");
});
//Criação dos nossos Endpoints
//metodo Get: pegar toda playList
app.get('/playlists', (req, res) => {
    const playlists = data_1.users.map((user) => {
        return user.playlists;
    }).flat(1);
    res.status(202).send(playlists);
});
//metodo Get: pegar faixa de uma playList especifica
app.get('/playlists/tracks/', (req, res) => {
    const playListId = req.query.id;
    if (!playListId) {
        res.status(404).send('Id Obrigatório 😭😭😭');
    }
    // res.send('Boa, Deu tudo certo 👍👍👍')
    const playlists = data_1.users.map((user) => user.playlists).flat(1);
    let tracks; //forEach passa por cada item do array
    playlists.forEach(playlist => {
        if (playlist.id === playListId) {
            tracks = playlist.tracks;
        }
    });
    res.send(tracks);
});
//metodo Delete: Para apagar uma playList especifica
app.delete('/playlist', (req, res) => {
    const trackId = req.query.id;
    if (!trackId) {
        res.status(404).send('Id Obrigatório 😭😭😭');
    }
    const playlists = data_1.users.map((user) => user.playlists).flat(1);
    const filterPlaylists = playlists.filter((playlist) => {
        if (playlist.id !== trackId) { //!== diferente
            return true;
        }
    });
    res.send(filterPlaylists);
});
//metodo Delete: Para apagar uma track especifica
app.delete('/deleteTrack', (req, res) => {
    const trackId = req.query.trackId;
    const playListId = req.query.playListId;
    if (!playListId || !trackId) { // ! se nao tiver
        res.status(400).send("Id obrigatorio");
    }
    const playlists = data_1.users.map((user) => user.playlists).flat(1);
    playlists.forEach(playList => {
        if (playList.id === playListId) {
            playList.tracks = playList.tracks.filter((track) => {
                if (track.id !== trackId) {
                    return true;
                }
            });
        }
    });
    res.send(playlists);
});
