import express, {Response, Request} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//EXER-1 buscar usuarios cadastrado
app.delete('/usuarios', async (res:Response, req:Request) => {
  let errorCode = 400

  try {
    const resultado = await co

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})







app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});