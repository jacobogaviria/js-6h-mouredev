/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/


let a = 80
let b = 20
// 1. Crea una variable para cada operación aritmética

let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let modulo = a % b
let potencia = a ** b


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacionSuma = suma += suma
let asignacionResta = resta -= resta
let asignacionMultiplicacion = multiplicacion *= multiplicacion
let asignacionDivision = division /= division
let asignacionModulo = modulo %= modulo
let asignacionPotencia = potencia **= potencia

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a > b) // Mayor que
console.log(b < a) // Menor que
console.log(a == '80')
console.log(b != 10)
console.log(a >= 80)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a < b) // Mayor que
console.log(b > a) // Menor que
console.log(a === '80')
console.log(b == 10)
console.log(a <= 70)

// 5. Utiliza el operador lógico and

    console.log( a === 80 && b === 20)
// 6. Utiliza el operador lógico or

    console.log( a === 80 || b === 20)

// 7. Combina ambos operadores lógicos

    console.log(a === 80 && b != 10 || b === 20)

// 8. Añade alguna negación

    console.log(a === 80 && b != 20 || b === '20')

// 9. Utiliza el operador ternario
    const miCasaEstaSucia = true
    miCasaEstaSucia ? console.log("Voy a limpiar") : console.log("No hace falta que limpie")    

// 10. Combina operadores aritméticos, de comparáción y lógicas

    console.log(
        ((a + b) > 100 && (a - b) < 50) || ((a * b) === 1600
    ))