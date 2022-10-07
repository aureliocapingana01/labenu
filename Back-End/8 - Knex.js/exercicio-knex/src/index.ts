import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { Produto } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/produtos", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const busca = req.query.busca

    if (busca) {
      const resultado = await connection.raw(`
        SELECT * FROM Produtos
        WHERE nome = "${busca}";
      `)

      res.status(200).send(resultado[0])
    }

    const resultado = await connection.raw(`
      SELECT * FROM Produtos;
    `)

    res.status(200).send(resultado[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/produtos", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { nome, preco, categoria } = req.body

    if (!nome || !preco || !categoria) {
      throw new Error("Passe o nome, preço e categoria do produto")
    }

    const novoProduto: Produto = {
      id: Number(Date.now()),
      nome,
      preco,
      categoria
    }

    await connection.raw(`
      INSERT INTO Produtos(id, nome, preco, categoria)
      VALUES(${novoProduto.id}, "${novoProduto.nome}", ${novoProduto.preco}, "${novoProduto.categoria}")
    `)

    res.status(200).send("Produto adicionado")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.put("/produto/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const preco = Number(req.body.preco)

    const produtos = await connection.raw(`
      SELECT * FROM Produtos
      WHERE id = ${id};
    `)

    if (produtos[0].length === 0) {
      throw new Error("Produto não encontrado")
    }

    if (!preco) {
      throw new Error("É necessário passar o novo preço")
    }

    await connection.raw(`
    UPDATE Produtos
    SET preco = ${preco}
    WHERE id = ${id};
  `)

    res.status(200).send("Preço alterado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})

app.delete("/produto/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const produtos = await connection.raw(`
      SELECT * FROM Produtos
      WHERE id = ${id};
    `)

    if (produtos[0].length === 0) {
      throw new Error("Produto não encontrado")
    }

    await connection.raw(`
      DELETE FROM Produtos
      WHERE id = ${id};
    `)

    res.status(200).send("Produto deletado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// put com query builder
// app.put("/produto/:id", async (req: Request, res: Response) => {
//   let errorCode = 400
//   try {
//     const id = Number(req.params.id)
//     const preco = Number(req.body.preco)

//     const produtos = await connection("Produtos")
//       .select()
//       .where({ id })

//     if (produtos.length === 0) {
//       throw new Error("Produto não encontrado")
//     }

//     if (!preco) {
//       throw new Error("É necessário passar o novo preço")
//     }

//     await connection("Produtos")
//       .update({ preco: preco })
//       .where({ id: id })

//     res.status(200).send("Preço alterado")
//   } catch (error) {
//     res.status(errorCode).send(error.message)
//   }

// })




app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});