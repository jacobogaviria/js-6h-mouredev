/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// hola mundo

// 2. Escribe un comentario en varias líneas

/*
hola mundo
hola mundo
hola mundo
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = "Hola"
let myNumber = 42
let myBoolean = true
let myNull = null
let myUndefined = undefined
let mySymbol = Symbol("mySymbol")
let myBigInt = 9007199254741991n
let myBigInt2 = BigInt(9007199254741991)

// 4. Imprime por consola el valor de todas las variables

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myNull)
console.log(myUndefined)
console.log(mySymbol)
console.log(myBigInt)
console.log(myBigInt2)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof myNull)
console.log(typeof myUndefined)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = "Adiós"
myNumber = 100
myBoolean = false
myNull = null
myUndefined = undefined
mySymbol = Symbol("otroSymbol")
myBigInt = 1234567890123456789n
myBigInt2 = BigInt(1234567890123456789)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 42
myNumber = "Hola"
myBoolean = 100
myNull = "Adiós"
myUndefined = true
mySymbol = null
myBigInt = Symbol("nuevoSymbol")
myBigInt2 = undefined

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myString2 = "Hola"
const myNumber2 = 42
const myBoolean2 = true
const myNull2 = null
const myUndefined2 = undefined
const mySymbol2 = Symbol("mySymbol")
const myBigInt3 = 9007199254741991n
const myBigInt4 = BigInt(9007199254741991)

// 9. A continuación, modifica los valores de las constantes
/*
myString2 = "Adiós"
myNumber2 = 100
myBoolean2 = false
myNull2 = "Adiós"
myUndefined2 = true
mySymbol2 = null
myBigInt3 = Symbol("nuevoSymbol")
myBigInt4 = undefined
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse