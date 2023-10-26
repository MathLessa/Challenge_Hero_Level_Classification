let perfil = [
    [   "Nome",       "xp",     "nível"],
    ["Edward Elric",   11.000,         ""]
]
let continuidade = true

switch(continuidade){
    case perfil[1][1]<=1.000:
    perfil[1][2] = "Ferro"
    break

    case(1.000<perfil[1][1] && perfil[1][1]<=2.000):
    perfil[1][2] = "Bronze"
    break

    case(2.000<perfil[1][1] && perfil[1][1]<=6.000):
    perfil[1][2] = "Prata"
    break

    case(6.000<perfil[1][1] && perfil[1][1]<=7.000):
    perfil[1][2] = "Ouro"
    break

    case(7.000<perfil[1][1] && perfil[1][1]<=8.000):
    perfil[1][2] = "Platina"
    break

    case(8.000<perfil[1][1] && perfil[1][1]<=9.000):
    perfil[1][2] = "Ascendente"
    break

    case(9.000<perfil[1][1] && perfil[1][1]<=10.000):
    perfil[1][2] = "Imortal"
    break

    case(10.000<perfil[1][1]):
    perfil[1][2] = "Radiante"
    break
}

console.log("O Herói de nome " + perfil[1][0] + " está no nível de " + perfil[1][2])