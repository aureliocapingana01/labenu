import express, {Request, Response} from 'express'
import cors from 'cors'
import { User, users, USER_ROLE } from "./data";
import { AddressInfo } from 'net';

const app = express()
app.use(express.json())
app.use(cors())

//endpoint para pegar usuario pelo nome, usamos a query que é mais para busca
app.get('/users', (req:Request,res:Response) => {
    
    let statusCode = 400

    try {
        const name = req.query.name as string
        
        if(!name){
            statusCode = 422
            throw new Error("Falta o parametro de busca, o nome")   
        }

        const user = users.find((array) => {
            return array.name.toLowerCase() === name.toLowerCase()
        })

        if(!user){
            statusCode = 404
            throw new Error("Usuario não encontrado ")   
        }

        res.status(statusCode).send(user)

    }
    
    catch (error:any) {
        res.status(statusCode).send(error.message)
    }
})

//endpoint para busca usuario com id
app.get('/users/:id', (req:Request, res:Response) => {
    let statusCode = 500

    try {
        const id = Number(req.params.id)
        
        if(isNaN(id)){//isNaN compara o valor exibe um booleano
            statusCode = 422
            throw new Error("O ID precisa ser um number");  
        }

        const user = users.filter((array) => {
            return array.id === id
        })

        if(!user.length){// se o array do usuario for vazio
            statusCode = 404
            throw new Error("Usuário não encontrado");
        }

        res.status(200).send(user)

    }
    catch (error:any) {
        res.status(statusCode).send(error.message)
    }
})











const server = app.listen(process.env.PORT || 2023, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
      } else {
        console.error(`Failure upon starting server.`);
      }
})