/*
 Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
     */

    const nome = prompt('Digite seu nome: ').toUpperCase()
    let tipoDeJogo = prompt('Qual tipo de jogo deseja: \n IN - internacional \n DO - doméstico').toUpperCase()
    let etapaDoJogo = ''
    let categoria = ''
    let qtDeIngressos = ''
    let preco = ''
    let total = ''

    switch (tipoDeJogo) {
        case 'IN':

              tipoDeJogo = 'Internacional'.toUpperCase()
              etapaDoJogo = prompt('Qual etapa deseja: \n DT - terceiro lugar \n SF - semi-final \n FI - final').toUpperCase();
             

              if(etapaDoJogo == 'DT') {
                etapaDoJogo = 'terceiro luga'.toUpperCase()
                categoria = Number(prompt('Qual categoria deseja: \n -1 \n -2 \n -3 \n -4'))  
                 qtDeIngressos = Number(prompt('Quantos ingressos desejas: '))
                 
                if(categoria == 1) {
                    preco = 1254.05
                    total = preco * qtDeIngressos
                  
                }
                else if(categoria == 2) {
                    preco = 1102.80
                    total = preco * qtDeIngressos
                }
                else if(categoria == 3) {
                    preco = 879.45
                    total = preco * qtDeIngressos
                }
                else {
                    preco = 780.20
                    total = preco * qtDeIngressos
                }
                
              }
              else if (etapaDoJogo == 'SF') {
                etapaDoJogo = 'Semi-Final'.toUpperCase()
                categoria = Number(prompt('Qual categoria deseja: \n -1 \n -2 \n -3 \n -4'))  
                qtDeIngressos = Number(prompt('Quantos ingressos desejas: '))

                if(categoria == 1) {
                    preco = 2650.11
                    total = preco * qtDeIngressos
                }
                else if(categoria == 2) {
                    preco = 2342.43
                    total = preco * qtDeIngressos
                }
                else if(categoria == 3) {
                    preco = 1952.82
                    total = preco * qtDeIngressos
                }
                else {
                    preco = 1754.09
                    total = preco * qtDeIngressos
                }
              }
              else {
                etapaDoJogo = 'Grande Final'.toUpperCase()
                categoria = Number(prompt('Qual categoria deseja: \n -1 \n -2 \n -3 \n -4'))  
                qtDeIngressos = Number(prompt('Quantos ingressos desejas: '))

                if(categoria == 1) {
                    preco = 5000.08
                    total = preco * qtDeIngressos
                }
                else if(categoria == 2) {
                    preco = 4250.30
                    total = preco * qtDeIngressos
                }
                else if(categoria == 3) {
                    preco = 3782.25
                    total = preco * qtDeIngressos
                }
                else {
                    preco = 3152.75
                    total = preco * qtDeIngressos
                }
              } 
              console.log(`
              ------- Dados da compra ----- \n 
              Nome do cliente:  ${nome} \n
              Tipo do jogo:  ${tipoDeJogo} \n 
              Etapa do jogo:  ${etapaDoJogo} \n 
              Categoria:  ${categoria} \n
              Quantidade de Ingressos:  ${qtDeIngressos} ingressos \n 
              ------ Valores ------  \n
              Valor do ingresso:  U$ ${preco} \n
              Valor total:  U$ ${total} \n
              `)
          
        break
        case 'DO':
           tipoDeJogo = 'Dometico'
           etapaDoJogo = prompt('Qual etapa do deseja: \n DT - terceiro lugar \n SF - semi-final \n FI - final').toUpperCase();
          

           if(etapaDoJogo == 'DT') {
             etapaDoJogo = 'terceiro luga'.toUpperCase()
             categoria = Number(prompt('Qual categoria deseja: \n -1 \n -2 \n -3 \n -4'))  
             qtDeIngressos = Number(prompt('Quantos ingressos desejas: '))
              
             if(categoria == 1) {
                 preco = 875.57
                 total = preco * qtDeIngressos
             }
             else if(categoria == 2) {
                 preco = 680.91
                 total = preco * qtDeIngressos
             }
             else if(categoria == 3) {
                 preco = 480.97
                 total = preco * qtDeIngressos
             }
             else {
                 preco = 280.99
                 total = preco * qtDeIngressos
             }
             
           }
           else if (etapaDoJogo == 'SF') {
             etapaDoJogo = 'Semi-Final'.toUpperCase()
             categoria = Number(prompt('Qual categoria deseja: \n -1 \n -2 \n -3 \n -4'))  
             qtDeIngressos = Number(prompt('Quantos ingressos desejas: '))

             if(categoria == 1) {
                 preco = 1320.73
                 total = preco * qtDeIngressos
             }
             else if(categoria == 2) {
                 preco = 1178.22
                 total = preco * qtDeIngressos
             }
             else if(categoria == 3) {
                 preco = 985.69
                 total = preco * qtDeIngressos
             }
             else {
                 preco = 380.47
                 total = preco * qtDeIngressos
             }
           }
           else {
             etapaDoJogo = 'Grande Final'.toUpperCase()
             categoria = Number(prompt('Qual categoria deseja: \n -1 \n -2 \n -3 \n -4'))  
             qtDeIngressos = Number(prompt('Quantos ingressos desejas: '))

             if(categoria == 1) {
                 preco = 1875.34
                 total = preco * qtDeIngressos
             }
             else if(categoria == 2) {
                 preco = 1587.89
                 total = preco * qtDeIngressos
             }
             else if(categoria == 3) {
                 preco = 1254.57
                 total = preco * qtDeIngressos
             }
             else {
                 preco = 6778.21
                 total = preco * qtDeIngressos
             }
           }
           console.log(`
           ------- Dados da compra ----- \n 
           Nome do cliente:  ${nome} \n
           Tipo do jogo:  ${tipoDeJogo} \n 
           Etapa do jogo:  ${etapaDoJogo} \n 
           Categoria:  ${categoria} \n
           Quantidade de Ingressos:  ${qtDeIngressos} ingressos \n 
           ------ Valores ------  \n
           Valor do ingresso:  R$ ${preco} \n
           Valor total:  R$ ${total} \n
           `)
     
        break
        default:
            tipoDeJogo = 'Escolha uma liga'
            console.log(`Oi ${nome} por favor  ${tipoDeJogo}`)
    }

   