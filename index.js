// se xp menor do que 1.000 = Ferro
// se xp entre 1.001 e 2.000 = Bronze
// se xp entre 2.001 e 5.000 = Prata
// se xp entre 6.001 e 7.000 = Ouro
// se xp entre 7.001 e 8.000 = Platina
// se xp entre 8.001 e  9.000 = Ascendente
// se xp entre 9.001 e  10.000 = Imortal
// se xp maior ou igual a 10.001 = Radiante

// ao final deve se exibir uma mensagem: "o heroi de nome {} esta no nivel de {}"

let nome = "Guigao"
let xp = 6578;
if (xp <= 1000)
    console.log ("O heroi " + nome + " é considerado como experiencia de Ferro")
else if (xp >= 1001 && xp <= 2000)
    console.log ("O heroi " + nome + " é considerado como experiencia de Bronze")
else if (xp >= 2001 && xp <= 5000)
    console.log ("O heroi " + nome + " é considerado como experiencia Prata")
else if (xp >= 6001 && xp <= 7000)
    console.log ("O heroi " + nome + " é considerado como experiencia Ouro")
else if (xp >= 7001 && xp <= 8000)
    console.log ("O heroi " + nome + " é considerado como experiencia Platina")
else if (xp >= 8001 && xp <= 9000)
    console.log ("O heroi " + nome + " é considerado como experiencia Ascendente")
else if (xp >= 9001 && xp <= 10000)
    console.log ("O heroi " + nome + " é considerado como experiencia Imortal")
else if (xp >= 10001)
    console.log ("O heroi " + nome + " é considerado como experiencia Radiante")
