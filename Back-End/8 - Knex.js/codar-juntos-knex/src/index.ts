import express, {raw, Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";
import { Produto } from "./type";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/produtos', async (req:Request, res:Response) =>{
  let errorCode = 400

  try {

    const busca = req.query.busca

    if(busca) {
      const resultado = await connection.raw(`
         SELECT * FROM Produtos
         WHERE nome = '${busca}';
      `)

      res.status(200).send(resultado[0])
    }

    const [resultado] = await connection.raw(`
       SELECT * FROM Produtos
    `)

    res.status(200).send(resultado)
    
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// inserir novo produto n a tabela
app.post('/produtos', async (req:Request, res:Response) => {
  let errorCode = 400

  try {
    //p´ra criar novo produto na tabela
    const {nome, preco, categoria} = req.body

    if(!nome || !preco || !categoria) {
      throw new Error("Passe o nome, preço e catewgoria do protudo");
    }

    const novoProduto: Produto = {
      id: Date.now(),
      nome,
      preco,
      categoria
    }

    // inserir novo produto na tebela
    await connection.raw(`
       INSERT INTO Produtos(id, nome, preco, categoria)
       VALUES( ${novoProduto.id},
         "${novoProduto.nome}", 
         ${novoProduto.preco}, 
         "${novoProduto.categoria}");
    `)

    res.status(200).send('Produto adcionado com sucesso')

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})



//Alterar o preco do produto
app.put('/produto/:id', async (req:Request, res:Response) => {
  
  let errorCode = 400
  
  try {
    const id = Number(req.params.id)
    const preco = Number(req.body.preco)
  
    const produtos = await connection.raw(`
      SELECT *FROM Produtos
      WHERE id = ${id};
    `)

    if(produtos[0].length === 0) {
      throw new Error("Produto não encontrado ");
    }

    if(!preco) {
      throw new Error("Inseri o novo preco do produto");
    }

    await connection.raw(`
      UPDATE Produtos
      SET preco = ${preco}
      WHERE id = ${id};
    `)
    
    res.status(200).send("Preço alterado com sucesso")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


//Deletar um produto
app.delete('/produto/:id', async (req:Request, res:Response) => {
  let errorCode = 400

  try {
    const id = Number(req.params.id)

    const produtos = await connection.raw(`
    SELECT * FROM Produtos
    WHERE id = ${id};
  `)

  if(produtos[0].length === 0) {
    throw new Error("Produto não encontrado ");
  }

  await connection.raw(`
    DELETE FROM Produtos
    WHERE id = ${id};
  `)

  res.status(200).send("Produto deletado com sucesso")
  
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})




app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});