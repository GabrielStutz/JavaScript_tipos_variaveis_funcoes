//parâmetros de função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2))

// parâmetro x argumentos: Parâmetro é a variável que irá receber um valor em uma função (ou método) enquanto que um argumento é o valor (que pode originar de uma variável ou expressão) que você passa para a função (ou método).

//ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

console.log(nomeIdade("Gabriel", 18))

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(9, 1), soma(4, 3)))