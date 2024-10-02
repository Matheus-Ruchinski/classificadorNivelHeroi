let nomeHeroi = "Matheus"
let xp
let nivel

if (xp < 0) {
    console.log("O sistema não aceita números negativos, tente novamente!")
} else if (xp <= 1000) {
    nivel = "Ferro"
} else if (xp <= 2000) {
    nivel = "Bronze"
} else if (xp <= 5000) {
    nivel = "Prata"
} else if (xp <= 7000) {
    nivel = "Ouro"
} else if (xp <= 8000) {
    nivel = "Platina"
} else if (xp <= 9000) {
    nivel = "Ascendente"
} else if (xp <= 10000) {
    nivel = "Imortal"
} else if (xp > 10000) {
    nivel = "Radiante"
} else {
    console.log("Nível não encontrado, tente novamente!")
}

if (nivel) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
}