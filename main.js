let aleatorio = Math.floor(Math.random() * 10 + 1);
let tentativas = 0;
let tentativasMax = 30;

console.log("Digite um número inteiro!")

process.stdin.on("data", function(data){
    let entrada = data.toString().trim();
    let numero = parseInt(entrada, 10);
    tentativas++;

    if(Number.isNaN(numero)){
        console.log("Erro! Digite um número inteiro corretamente")
    } else if (numero < aleatorio){
        console.log("É maior, tente novamente! Tentativa número: " + tentativas)
    } else if (numero > aleatorio){
        console.log("É menor, tente novamente! Tentativa número: " + tentativas)
    } else
    console.log("Parabéns! Você acertou!")
    if (tentativas == tentativasMax){
        console.log("Número máximo de tentativas atingidas")
    }
    if(tentativas %3 == 0 && tentativas != 0){
        console.log("Número fujão! Outro número será escolhido. Número antigo: " + aleatorio)
        aleatorio = Math.floor(Math.floor() * 1000 + 1);
    } 
}) 

