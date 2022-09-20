import express, {Request, Response} from 'express'
import cors from 'cors'

// configucoes necessaria p´ra rodar o servidor
const app = express()

app.use(express.json())
app.use(cors())

app.listen(2022, () => {
    console.log("Server is rumming in http://localhost:2022")
})

// termina a configução 

/*Dpois da configuração podemos criar nosso endpoit
Os endpoits recebem dois parametros REQUEST eo RESPONSE que devem ser importados na biblioteca do Express */

app.get('/test/:id', (req:Request, res:Response) => {
    //para pegar as informacoes que chegam na requisicão
    const id = req.params.id // acessa parametro de caminho
    const password = req.headers.password
    const name = req.body.name
    // console.log('request feito') //quem recebe é o back
    console.log(id, password, name)

    res.status(201).send('👍👍 Parabéns, deu certo')
})