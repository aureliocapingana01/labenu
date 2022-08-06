/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


const inicio = confirm("Quer iniciar uma nova roda?")
alert("Boas - Vindas ao jogo!!!")

    if ( inicio === false){
       alert("O jogo acabou...")
    }

    else if ( inicio == true){
       alert("O jogo vai comecar... ")

      const usuario = "Aurélio" 
      const adversaio = "Labenu"
      let cartasAurelio = []
      let nomesAurelio
      let nomesLabenu
      let cartasLabenu = []
      let usuarioAurelio = 0
      let valorLabenu = 0
      let jogar
      let numeroDeCartas = 0
  
      function cartas(params) {
          nomesAurelio = Array.from(cartasAurelio, ({ texto }) => texto)
          nomesLabenu = Array.from(cartasLabenu, ({ texto }) => texto)
      }
  
      //Cartas usuário
      while (numeroDeCartas <= 3) {
          cartasAurelio.push(comprarCarta())
          numeroDeCartas++
      }
  
      //Cartas adiversario

      numeroDeCartas = 1
      while (numeroDeCartas <= 3) {
          cartasLabenu.push(comprarCarta())
          numeroDeCartas++
      }
      
      // Aurélio - Soma valor das cartas

      function somarAurelio() {
          for (let i = 0; i < cartasAurelio.length; i++) {
              usuarioAurelio += cartasAurelio[i].valor
              cartas()
            }
        }
        somarAurelio()
        
        // Labenu - Soma valor das cartas

        function somarLabenu() {
            for (let i = 0; i < cartasLabenu.length; i++) {
                valorLabenu += cartasLabenu[i].valor
            }
        }
        somarLabenu()
        
    //   console.log(`${usuario} » cartas: ${nomesAurelio} » pontuação ${usuarioAurelio}`)
    //   console.log(`${adversaio} » cartas: ${nomesLabenu} » pontuação ${valorLabenu}`)
  
      //Comprar cartas Aurélio

      function comprarCartasAurelio() {
          cartasAurelio.push(comprarCarta())
          cartas()
          usuarioAurelio = 0
          somarAurelio()
      }
      //omprar cartas Labenu

      function comprarCartasLabenu() {
          cartasLabenu.push(comprarCarta())
          cartas()
          valorLabenu = 0
          somarLabenu()
      }
  
    
      do {
          if (confirm(` ${usuario} : ${nomesAurelio} \n x \n ${adversaio} : ${nomesLabenu}
      \nDeseja comprar mais uma carta?`)) {
              comprarCartasAurelio()
              comprarCartasLabenu()
              jogar = true
          } else {
              jogar = false
          }
      }
      
      while (jogar === true && usuarioAurelio < 21 || valorLabenu < 21){
          comprarCartasAurelio()
          comprarCartasLabenu()
      }
    //   while (valorLabenu < usuarioAurelio && valorLabenu < 21) {
    //       comprarCartasLabenu()
    //   }
  
    //   console.log(`Final » Usuário cartas = ${nomesAurelio} valor ${usuarioAurelio}`)
    //   console.log(`Final » Computador cartas = ${nomesLabenu} valor ${valorLabenu}`)
  
      // Condição de vitória
    //   if (usuarioAurelio === valorLabenu) {
    //     //   console.log("EMPATE!")
    //       alert(`EMPATE!" \nPontos: \n  ${usuario} » ${usuarioAurelio} :\n ${adversaio} » ${valorLabenu} :`)
    //   }
     if (valorLabenu >= 21 || valorLabenu > usuarioAurelio) {
        //   console.log("Computador ultrapassou 21 pontos. Usuário ganhou!")
          alert(`${usuario} = ${usuarioAurelio} \n ${adversaio} = ${valorLabenu} \n  Parabéns ${adversaio} ganhou!`)
      } 
      else if (usuarioAurelio >= 21 || usuarioAurelio > valorLabenu) {
        //   console.log("Usuário ultrapassou 21 pontos. Computador ganhou!")
        //   console.log(`${adversaio} GANHOU`)
          alert(`${usuario} = ${usuarioAurelio} \n ${adversaio} = ${valorLabenu} \n Parabéns ${usuario} ganhou!  `)
      }
      else {
        alert(`${usuario} » ${usuarioAurelio} :\n ${adversaio} » ${valorLabenu} : \n EMPATE! `)
      }
    //    else if (usuarioAurelio < valorLabenu) {
    //     //   console.log("Computador Ganhou!")
    //       alert(`Computador Ganhou! \nPontos: \n  ${usuario} = ${usuarioAurelio} \n ${adversaio} = ${valorLabenu}`)
    //   } 
    //   else if (usuarioAurelio > valorLabenu) {
    //     //   console.log("Usuário ganhou!")
    //       alert(`Usuário Ganhou! \nPontos: \n  ${usuario} = ${usuarioAurelio} \n ${adversaio} = ${valorLabenu}`)
    //   }
    //    else {
    //       console.log("O jogo acabou =(")
    //       alert(`O jogo acabou =(`)
    //   }
  }
  
    


