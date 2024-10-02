// Declaração das variáveis
let nomeHeroi = "Matheus"
let xp = 100010
let nivel

// estrutura de decisão a qual ira verificar qual é o nível do herói
if (xp <= 1000){
    // quando entrar em um dos if, será atribuido o rank do herói na variável nivel
    nivel = "Ferro"
} else if ((xp >= 1001) && (xp <= 2000)){
    nivel = "Bronze"
    } else if ((xp >= 2001) && (xp <= 5000)){
        nivel = "Prata"
        } else if ((xp >= 5001) && (xp <= 7000)){
            nivel = "Ouro"
            } else if ((xp >= 7001) && (xp <= 8000)){
                nivel = "Platina"
                } else if ((xp >= 8001) && (xp <= 9000)){
                    nivel = "Ascendente" 
                    } else if ((xp >= 9001) && (xp <= 10000)){
                        nivel = "Imortal"
                        } else if (xp >= 10001){
                            nivel = "Radiante"
                            } else {
                                // quando o valor colocado for diferente de number, vai entrar no else e a mensagem irá notificar o usuário
                                console.log("Nível não encontrado, digite novamente!")
                            }
// verifica se a variável nivel é diferente de indefinido
if(nivel !== undefined)
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)