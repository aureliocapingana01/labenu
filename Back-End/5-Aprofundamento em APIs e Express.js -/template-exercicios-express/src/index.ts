import express, {Request, Response} from 'express'
import cors from 'cors'
import { users } from './data'
import { error } from 'console'
import { v4 as generateId } from 'uuid'

//Configurar o sistema 
const app = express()
app.use(express.json())
app.use(cors())

app.listen(2023, () => {
    console.log("Server rumming is http://localhost:2023")
})

//Criação dos nossos Endpoints

//metodo Get: pegar toda playList
app.get('/playlists', (req:Request, res:Response) => {
    const  playlists = users.map((user) => {
        return user.playlists
    }).flat(1)

    res.status(202).send(playlists)
})

//metodo Get: pegar faixa de uma playList especifica
app.get('/playlists/tracks', (req:Request, res:Response) => {
    const playListId = req.query.id
    
    if(!playListId) {
        res.status(404).send('Id Obrigatório 😭😭😭')
    }

    // res.send('Boa, Deu tudo certo 👍👍👍')
    const playlists = users.map((user) => user.playlists).flat(1)

    let tracks //forEach passa por cada item do array
    playlists.forEach(playlist => {
        if(playlist.id === playListId) {
            tracks = playlist.tracks
        }
    })
    res.send(tracks)
})

//metodo Delete: Para apagar uma playList especifica
app.delete('/playlist', (req:Request, res:Response) => {
    
        const trackId = req.query.id
        
        if(!trackId) {
            res.status(404).send('Id Obrigatório 😭😭😭')
        }

        const playlists = users.map((user) => user.playlists).flat(1)

        const filterPlaylists = playlists.filter((playlist) => {
            if(playlist.id !== trackId){ //!== diferente
                return true
            }
        })
        res.send(filterPlaylists)
})

//metodo Delete: Para apagar uma track especifica
app.delete('/deleteTrack', (req:Request, res:Response) => {
    const trackId = req.query.trackId
    const playListId = req.query.playListId

    if(!playListId  || !trackId){ // ! se nao tiver
        res.status(400).send("Id obrigatorio")
    }

    const playlists = users.map((user) => user.playlists).flat(1)

    playlists.forEach(playList => {
        if(playList.id === playListId) {
            playList.tracks = playList.tracks.filter((track) => {
                if(track.id !== trackId) {
                    return true
                }
            })
        }
    })

    res.send(playlists)
})

//metodo para para buscar uma playListe
app.get('/playlist/search', (req:Request, res:Response) => {

    try {
        //passar o nome do usuario no autorizetion
        const userName = req.headers.authorization
        const user = users.find((user) => user.id === userName)
    
        if(!user) throw new Error("Usuáro não encontrado") // throw é como jogar, dizer para jogar um novo erro
        
        //passar o nome da playlist por query
        const playlistName = req.query.name

        if(!playlistName) throw new Error("nome da playlist é obrigatorio")

        //Achar a playlist no banco d'Dados
        const playlist = user.playlists.find(playlist => playlist.name.toLocaleLowerCase() === (playlistName as String).toLocaleLowerCase())

        if(!playlist) throw new Error("playlist não existe")

        res.send(playlist)
    }
    catch (error:any) {
    res.send(error.message)
    // res.send('Erro dectado na solicitação')
    }

})

// para cria uma playlist
app.post('/playlist/create', (req:Request , res:Response) => {

    let statusCode = 400
    
    try {
        //passar o nome do usuario no autorizetion, verificar
     const userName = req.headers.authorization

     if(!userName){
        statusCode = 401
        throw new Error ('Authorization nt found')
    }

     const user = users.find((user) => user.id === userName)
 
     if(!user) {
        statusCode = 404
        throw new Error("Usuáro não encontrado") // throw é como jogar, dizer para jogar um novo erro
     }

     const playlistName = req.body.name

     if(!playlistName) {
        statusCode = 422
        throw new Error("É necessario informar o nome da playlist")
    } 

     const playlist = user.playlists.find(playlist => playlist.name.toLocaleLowerCase() === (playlistName as String).toLocaleLowerCase())

     if(playlist) {
        statusCode = 409
        throw new Error("playlist já existe")
     }

     const newPlaylist = {
        id: generateId(),
        name: playlistName,
        tracks: []
     }

     user.playlists.push(newPlaylist)
     res.status(201).send('A playlist foi criado com sucesso')
    } 
    catch (error:any) {
       res.status(statusCode).send(error.message)
    }
})

app.post("/playlist/:id/track", (req: Request, res: Response) => {

    let statusCode = 400

    try {
        const userName = req.headers.authorization
        const user = users.find((user) => user.id === userName)

        if (!user) throw new Error("Usuário não encontrado")

        const playlistId = req.params.id
        const playlist = user.playlists.find(playlist => playlist.id === playlistId)

        if (!playlist) throw new Error("Playlist não existe")

        const { name, artist, url } = req.body

        if (!name || !artist || !url){
            statusCode = 422
            throw new Error("É necessário informar nome, artista e url da faixa")
        }

        const newTrack = {
            id: generateId(),
            name,
            artist,
            url
        }

        playlist.tracks.push(newTrack)

        res.status(201).send("Faixa adicionada com sucesso")

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
})

