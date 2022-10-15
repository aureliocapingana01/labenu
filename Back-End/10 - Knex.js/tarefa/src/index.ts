import express, {raw, Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";
import { cliente } from "./type";

const app = express();

app.use(express.json());
app.use(cors());

//EXER1 buscar ususario por nome:
app.get('/clientes', async (req:Request, res:Response) => {

  let errorCode = 400

  try {

    let busca = req.query.busca

    if(busca) {
      // const resultado = await connection("clientes")
      //     .select ()
      //     .where({nome:busca})
      
      const resultado = await connection.raw(`
          SELECT * FROM clientes
          WHERE cartao = "${busca}";
      `)

      res.status(200).send(resultado[0])
    }

    const resultado = await connection("clientes")
        .select()
  
    res.status(200).send(resultado)

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


//EXER2 Criar um novo usuario 
app.post('/addCliente', async (req:Request, res:Response) => {

  let errorCode = 400

  try {

    const {nome, email, profissao, cartao} = req.body

    if(!nome || !email || !profissao || !cartao){
      throw new Error("Passe o NOME, o EMAIL, a PROFISSAO e o CARTAO do cliente"); 
    }

    if(nome.length < 4){
      throw new Error("Insira seu nome completo");
    }

    if(!email.includes("@")){
      throw new Error("EMAIL invalido");
    }


    const newCliente : cliente = {
      id: Number(Date.now()),
      nome,
      email,
      profissao,
      cartao
    }

    await connection.raw(`
       INSERT INTO clientes (id, nome, email, profissao, cartao)
       VALUES("${newCliente.id}","${newCliente.nome}","${newCliente.email}","${newCliente.profissao}","${newCliente.cartao}")
    `)

    res.status(200).send('Cliente criado com sucesso')

  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})














app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});


