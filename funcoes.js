let x = "";
console.log(x);
x = "oi";

//Declaração de função

// 1) declara a função
                    //string
 function imprimiTexto(texto) {
     console.log(texto)
}

// 2) executa a função (1 ou + vezes)

// imprimiTexto("oi");
imprimiTexto(soma());

// três formas de escrever funções
// o return deve ser a última coisa antes de fechar o bloco

function soma(){
    return 2 + 2;
}

//console.log(soma());