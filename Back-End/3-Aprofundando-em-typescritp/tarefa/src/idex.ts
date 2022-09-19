// Exercício 1
const myString: string = "Aurelio"

const myNumber: number | string = 1


type person = { 
  name: string, 
  age: number,
  colour: string
}

const user1: person = {
  name: "Aurelio", 
  age: 30,
  colour: 'red'
}

const user2: person = {
    name: "Ana", 
    age: 25,
    colour: 'yellow'
  }

  const user3: person = {
    name: "Afonso", 
    age: 28,
    colour: 'blue'
  }


// Exercício 2
function obterEstatisticas(numeros: number[] ) {

  const numerosOrdenados: number[] = numeros.sort(
      (a, b) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas: {maior: number, menor: number, media: number} = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}
  
// a) Entrada: Array type number e Saída: Objeto type number
// b) numerosOrdenados, soma e estatisticas


type AmostraDeIdades = {
  numeros: number[],
  obterEstatisticas: (numeros: number[]) => Object
}


// Exercício 3
// a)
type TypePosts = { 
  author: string, 
  text: string
}
  
const posts: TypePosts[] = [
  {
    author: "Alvo Dumbledore",
    text: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    author: "Severo Snape",
    text: "Menos 10 pontos para Grifinória!"
  },
  {
    author: "Hermione Granger",
    text: "É levi-ô-sa, não levio-sá!"
  },
  {
    author: "Dobby",
    text: "Dobby é um elfo livre!"
  },
  {
    author: "Lord Voldemort",
    text: "Avada Kedavra!"
  }
]

// b) Entrada: posts e o autor | Saída: nome do autor filtrado

function buscarPostsPorAutor(posts: TypePosts[], autorInformado: string) {
  return posts.filter(
    (post) => {
      return post.author === autorInformado
    }
  )
}
