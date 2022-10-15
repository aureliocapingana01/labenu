import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {

   let errorCode = 400

   try {

      let title = req.query.title as string
      let sort = req.query.sort as string // nome da colina
      let order = req.query.order as string //ordenacao cres ou desc
      let size = Number(req.query.size)
      let page = Number(req.query.page)


      if(!title) {
         title = "%"
      }// se nao tiver nada retornar tudo

      if(!sort) {
         sort = "title"
      }

      if(sort === "createAt") {
         sort = "create_at"
      }

      if(sort !== "title" && sort !=="created_at") {
         sort = "title"
      }

      if(order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC")// order && order é cuito circuito
       {
         order = "ASC"
      }

      if(isNaN(size) || size < 1) {
         size = 10
      }

      if(isNaN(page) || page < 1) {
         page = 1
      }

      let offset = size * (page - 1)

      const result = await connection("aula49_recipes")
      .where("title","like", `%${title}%`)// filtrar por titulo
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

      if(result.length < 1) {
         errorCode = 404
         throw new Error("Nenhuma receita encontrada "); 
      }

      const recipes = result.map(toRecipe)

      res.status(200).send(recipes)

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}