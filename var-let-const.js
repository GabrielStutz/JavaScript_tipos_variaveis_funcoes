// tipagem dinâmica: não exige declarações de tipos de dados, pois são capazes de escolher que tipo utilizar dinamicamente cada variável.
//untyped: sem tipagem.
//Multiparadigma: A noção de paradigmas de programação é uma forma de classificar as linguagens de programação de acordo com o estilo de programação de computadores. Características de várias linguagens de programação determinam quais paradigmas elas pertencem; Como resultado, alguns idiomas caem em apenas em um paradigma, ao passo que outros cair em vários paradigmas. Alguns paradigmas estão preocupados principalmente com implicações para o modelo de execução da linguagem, como permitir que os efeitos secundários, ou se a sequência de operações é definido pelo modelo de execução. Outros paradigmas estão preocupados principalmente com a maneira que o código é organizado, como o agrupamento de código em unidades, juntamente com o estado que é modificado pelo código. No entanto, outros estão preocupados principalmente com o estilo de sintaxe e gramática. Se tiver que resumir em uma frase: é apenas um estilo de como escrever um código. É o jeitão que o texto (código) ficará em linhas gerais.

//let minhaVar = 546;
//minhaVar = "546";
//minhaVar = true;
/*
var: the var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.var declarations, wherever they occur, are processed before any code is executed. This is called hoisting and is discussed further below. 
The scope of a variable declared with var is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for variables declared outside any function, global. Duplicate variable declarations using var will not trigger an error, even in strict mode, and the variable will not lose its value, unless another assignment is performed.
*/
// var altura = 5;
// var comprimento = 7;
// area = altura * comprimento;
// console.log(area);

/*
let: The let declaration declares a block-scoped local variable, optionally initializing it to a value.let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between var and let is that the latter can only be accessed after its declaration is reached (see temporal dead zone). For this reason, let declarations are commonly regarded as non-hoisted.
Just like const the let does not create properties of the window object when declared globally (in the top-most scope).
An explanation of why the name "let" was chosen can be found here.
Many issues with let variables can be avoided by declaring them at the top of the scope in which they are used (doing so may impact readability).
Unlike var, let begins declarations, not statements. That means you cannot use a lone let declaration as the body of a block (which makes sense, since there's no way to access the variable).
*/
// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;
// if(forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }
// console.log(area);

/*
const: constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.
This declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do not become properties of the window object, unlike var variables.
An initializer for a constant is required. You must specify its value in the same declaration. (This makes sense, given that it can't be changed later.)
The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable—just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.
All the considerations about the temporal dead zone apply to both let and const. For this reason, const declarations are commonly regarded as non-hoisted.
A constant cannot share its name with a function or a variable in the same scope.
Unlike var, const begins declarations, not statements. That means you cannot use a lone const declaration as the body of a block (which makes sense, since there's no way to access the variable).
*/

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2
}
console.log(area)