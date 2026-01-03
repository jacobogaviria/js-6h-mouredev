/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

let a = 10
let b = 5
let usuario = "admin"
let password = "1234"
let x = null
let edad = 16
let mes = "marzo"
let idioma = "español"
// if/else/else if/ternaria

if (a + b === 15) {
    console.log("La suma es 15")
} else if (a + b > 15) {
    console.log("La suma es mayor que 15")
} else {
    console.log("La suma es menor que 15")
}
// 1. Imprime por consola tu nombre si una variable toma su valor
if (usuario === "admin") {
    console.log("admin")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

if (usuario === "admin" && password == "1234") {
    console.log("Acceso concedido")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

if (x === 0) {
    console.log("El número es cero")
} else if (x > 0) {
    console.log("El número es positivo")
} else {
    console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
if (edad >= 18) {
    console.log("Puedes votar")
} else {
    console.log(`Te faltan ${18 - edad} años para poder votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

    edad >= 18 ? console.log("adulto") : console.log("menor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

 if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
    console.log("Invierno")
 } else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    console.log("Primavera")
 } else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    console.log("Verano")
 } else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
    console.log("Otoño")
 }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

    if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
        console.log("Este mes tiene 31 días")
    } else if (mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre") {
        console.log("Este mes tiene 30 días")
    } else if (mes === "febrero") {
        console.log("Este mes tiene 28 días")
    }

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

switch (idioma) {
    case "español":
        console.log("Hola")
        break
    case "ingles":
        console.log("Hello")
        break
    case "frances":
        console.log("Bonjour")
        break
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case "diciembre" || "enero" || "febrero":
        console.log("Invierno")
        break
    case "marzo" || "abril" || "mayo":
        console.log("Primavera")
        break
    case "junio" || "julio" || "agosto":
        console.log("Verano")
        break
    case "septiembre" || "octubre" || "noviembre":
        console.log("Otoño")
        break
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case "enero" || "marzo" || "mayo" || "julio" || "agosto" || "octubre" || "diciembre":
        console.log("Este mes tiene 31 días")
        break
    case "abril" || "junio" || "septiembre" || "noviembre":
        console.log("Este mes tiene 30 días")
        break
    case "febrero":
        console.log("Este mes tiene 28 días")
        break
}