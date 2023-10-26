let nome = "Matheus Lessa"
let xp = 6.001
let nivel = ""
let continuidade = true

switch(continuidade){
    case xp<=1.000:
    nivel = "Ferro"
    break

    case(1.000<xp && xp<=2.000):
    nivel = "Bronze"
    break

    case(2.000<xp && xp<=6.000):
    nivel = "Prata"
    break

    case(6.000<xp && xp<=7.000):
    nivel = "Ouro"
    break

    case(7.000<xp && xp<=8.000):
    nivel = "Platina"
    break

    case(8.000<xp && xp<=9.000):
    nivel = "Ascendente"
    break

    case(9.000<xp && xp<=10.000):
    nivel = "Imortal"
    break

    case(10.000<xp):
    nivel = "Radiante"
    break
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)