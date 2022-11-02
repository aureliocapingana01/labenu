import app from "./app";
import  createCharacter from "./endpoints/createCharacter";
import deleteCharacter from "./endpoints/deleteCharacter";
import getAllCharacters from "./endpoints/getAllCharacters ";

// os metodos e caminhos dos endpoints  
app.get('/character', getAllCharacters )

app.put('/character', createCharacter)

app.delete('/character/:id', deleteCharacter)

// app.get('/movie/:id/characters') 

// A cima para pegar todos os personagens que participaram de um determinado filme, para isso se precisaria do join  