import express, {raw, Response, Request} from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

//EXER1 buscar ususario por nome:
app.get('/clientes', async (res:Response, req:Request) => {

  let errorCode = 400

  try {
    const busca = req.query.busca
    if(busca) {
      const resultado = await connection.raw(`
          SELECT * FROM clientes
          WHERE nome = '${busca}';
      `)
      res.status(200).send(resultado)
    }

    const [resultado] = await connection.raw(`
        SELECT * FROM clientes
    `)
    res.status(200).send(resultado)

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})





app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});