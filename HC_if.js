let nome = "Matheus Lessa"
let xp = 6.001
let nivel = ""

if(xp<=1.000){
    nivel = "Ferro"
} else if(xp>1.000 && xp<=2.000){
    nivel = "Bronze"
} else if(xp>2.000 && xp<=6.000){
    nivel = "Prata"
} else if(xp>6.000 && xp<=7.000){
    nivel = "Ouro"
} else if(xp>7.000 && xp<=8.000){
    nivel = "Platina"
} else if(xp>8.000 && xp<=9.000){
    nivel = "Ascendente"
} else if(xp>9.000 && xp<=10.000){
    nivel = "Imortal"
} else if(xp>Radiante){
    nivel = "Bronze"
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)