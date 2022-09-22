"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const uuid_1 = require("uuid");
//Configurar o sistema 
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
app.get('/playlists/tracks', (req, res) => {
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
//metodo para para buscar uma playListe
app.get('/playlist/search', (req, res) => {
    try {
        //passar o nome do usuario no autorizetion
        const userName = req.headers.authorization;
        const user = data_1.users.find((user) => user.id === userName);
        if (!user)
            throw new Error("Usuáro não encontrado"); // throw é como jogar, dizer para jogar um novo erro
        //passar o nome da playlist por query
        const playlistName = req.query.name;
        if (!playlistName)
            throw new Error("nome da playlist é obrigatorio");
        //Achar a playlist no banco d'Dados
        const playlist = user.playlists.find(playlist => playlist.name.toLocaleLowerCase() === playlistName.toLocaleLowerCase());
        if (!playlist)
            throw new Error("playlist não existe");
        res.send(playlist);
    }
    catch (error) {
        // res.send(error.message)
        res.send('Erro dectado na solicitação');
    }
});
// para cria uma playlist
app.post('/playlist/create', (req, res) => {
    try {
        //passar o nome do usuario no autorizetion, verificar
        const userName = req.headers.authorization;
        const user = data_1.users.find((user) => user.id === userName);
        if (!user)
            throw new Error("Usuáro não encontrado"); // throw é como jogar, dizer para jogar um novo erro
        const playlistName = req.body.name;
        if (!playlistName)
            throw new Error("É necessario informar o nome da playlist");
        const playlist = user.playlists.find(playlist => playlist.name.toLocaleLowerCase() === playlistName.toLocaleLowerCase());
        if (playlist)
            throw new Error("playlist já existe");
        const newPlaylist = {
            id: (0, uuid_1.v4)(),
            name: playlistName,
            tracks: []
        };
        user.playlists.push(newPlaylist);
        res.status(201).send('A playlist foi criado com sucesso');
    }
    catch (error) {
        res.send('error.message');
    }
});
