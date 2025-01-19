// calculadora de partidas ranqueadas
//o que deve ser utilizado
// - Variaveis, Operadores, Laços de Repetição, Estruturas de Decisões, Funções
// Objetivo:
// Crie uma função que recebe como parametro a quantidade de vitorias e derrotas de um jogador, depois disso retorne o resultado para uma variavel, o saldo de ranqueadas deve ser feito atraves do calculo(vitoria - derrota)

//se vitoria for menor do que 10 = Ferro
//se vitoria for entre 11 e 20 = Bronze
//se vitoria for entre 21 50 = Prata
//se vitoria for entre 51 e 80 = Ouro
//se vitoria for entre 81 e 90 = Diamante
//se vitoria for entre 91 e 100 = Lendario
//se vitoria for maior ou igual a 101  = Imortal

// Saida: Ao final deve exibir uma mensagem: "O heroi tem de saldo de (saldoVitoria) esta no nivel (Nivel)"

let vitorias = 89
let derrotas = 10
let saldoVitoria = vitorias - derrotas
if (saldoVitoria <= 10)
console.log("O heroi tem de saldo de " + saldoVitoria + " esta no nivel ferro")
else if (saldoVitoria >= 11 && saldoVitoria <= 20)
    console.log("O heroi tem de saldo de " + saldoVitoria + " esta no nivel Bronze")
else if (saldoVitoria >= 21 && saldoVitoria <= 50)
    console.log("O heroi tem de saldo de " + saldoVitoria + " esta no nivel Prata")
else if (saldoVitoria >= 51 && saldoVitoria <= 80)
    console.log("O heroi tem de saldo de " + saldoVitoria + " esta no nivel Ouro")
else if (saldoVitoria >= 81 && saldoVitoria <= 90)
    console.log("O heroi tem de saldo de " + saldoVitoria + " esta no nivel Diamante")
else if (saldoVitoria >= 91 && saldoVitoria <= 100)
    console.log("O heroi tem de saldo de " + saldoVitoria + " esta no nivel Lendário")
else if (saldoVitoria >= 101)
    console.log("O heroi tem de saldo de " + saldoVitoria + " esta no nivel Imortal")
