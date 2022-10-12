import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";


const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});


//Get Users or only one userx'

app.get("/users", async(req: Request, res: Response)=>{
  let statusCode = 400
  
  try {
    const search = req.query.search

    if(search){
      const result = await connection.raw(`
        SELECT * FROM Users
        WHERE nome = "${search}";
      `)
      return res.status(200).send(result[0])

    }

    const resultado = await connection.raw(`
         SELECT * FROM Users;
    `)
    res.status(200).send(resultado[0])

  } catch (error) {
    res.status(statusCode).send(error.message)
  }
})

// Post a new user

app.post('/user', async(req: Request, res: Response)=>{

  try {
    const {nome, email} = req.body

    if(nome.length < 4){
      throw new Error ("O nome deve conter ao menos 4 letras.")
    }

    if(!email.includes("@")){
      throw new Error ("E-mail invalido!")
    }

    const newUser = {
      id: Date.now(),
      nome: nome,
      email: email
    }

    await connection.raw(`
      INSERT INTO Users (id, nome, email)
      VALUES (${newUser.id}, "${newUser.nome}", "${newUser.email}")
    `)

    res.send(`As informações de ${newUser.nome} foram incluidas com sucesso!!!`)
    
    
  } catch (error) {
    res.send({mensagem: error.message})
  }

})


// Edit an e-mail //

app.put('/user/edit/:id', async(req:Request, res: Response)=>{
  let statusCode = 400
  try {
    const id = Number(req.params.id)
    const {email} = req.body
   
    if(!id || id === null){
      throw new Error("O id não existe no banco de dados")
    }

    if(email.length === 0){
      throw new Error("O campo e-mail está vazio. Digite um e-mail válido")
    }

    if(typeof email !== "string"){
      throw new Error('Tipo invalido')
    }

    if(!email.includes("@")){
      throw new Error ("E-mail invalido!")
    }   
    
  const users = await connection.raw(`
    SELECT * FROM Users
    WHERE id = ${id}
  `)

  const userFound = users[0]

  if(!userFound){
    statusCode = 400
    throw new Error('O id do usuário não existe no banco de dados')
  }


   await connection.raw(`
      UPDATE Users
      SET email = "${email}"
      WHERE id = ${id};
    `)

  
    res.send({mensagem: `O email foi alterado para ${email}`})
    
  } catch (error) {
    res.send({messagem: error.message})
    
  }
})


// Delete a user

app.delete("/user/:id", async(req: Request, res:Response)=>{
  let statusCode = 400
  try {
    const id  = Number(req.params.id)
    const [users] = await connection.raw(`
      SELECT * FROM Users
      WHERE id = ${id}
    `)

    const userFound = users[0]    
    if(!userFound){
      statusCode = 400
      throw new Error('O id do usuário não existe no banco de dados')
    }

    await connection.raw(`
      DELETE FROM Users
      WHERE id = ${id};
    `)

    res.status(200).send("Usuário deletado com sucesso!")
    
  } catch (error) {
    res.status(statusCode).send({message: error.message})
    
  }
})

