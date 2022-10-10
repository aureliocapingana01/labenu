import express, {raw, Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

//EXER1 buscar ususario por nome:
app.get('/clientes', async (req:Request, res:Response) => {

  let errorCode = 400

  try {
    const busca = req.query.busca
    if(busca) {
      
      const resultado = await connection("clientes")
          .select ()
          .where({nome:busca})
      
      res.status(200).send(resultado[0])
    }

    const resultado = await connection("clientes")
        .select()
  
    res.status(200).send(resultado)

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})





app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// function where(arg0: { nome: string | string[] | import("qs").ParsedQs | import("qs").ParsedQs[]; }) {
//   throw new Error("Function not implemented.");
// }
