// boolean:
// const usuarioLogado = true
// const contaPaga = false

// truthy ou falsy
// 0 => false
// 1 => true
//console.log(0 == false)
// console.log(" " == false)
// console.log(1 == true)

// null: The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
//undefined: undefined is a property of the global object. That is, it is a variable in global scope. The initial value of undefined is the primitive value undefined.
/*
In all non-legacy browsers, undefined is a non-configurable, non-writable property. (Even when this is not the case, avoid overriding it.)
A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.
*/

let minhaVar;
let varNull = null;
let numero = 3;
let texto = "Alura";

console.log(minhaVar)
console.log(varNull)
console.log(typeof numero)
console.log(typeof texto)