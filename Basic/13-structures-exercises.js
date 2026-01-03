/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let myArray = ['perro', 'gato', 'pez', 'loro', 'hamster']

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift('tortuga')
myArray.push('conejo')

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2, 1)
// 4. Crea un set que almacene cinco libros

let mySet = new Set(['Don Quijote', 'Cien años de soledad', 'La sombra del viento', 'El amor en los tiempos del cólera', '1984'])

// 5. Añade dos más. Uno de ellos repetido

mySet.add('El principito')
mySet.add('1984')
console.log(mySet) // no sirve, ya que los sets son sin datos repetidos

// 6. Elimina uno concreto a tu elección

mySet.delete('Cien años de soledad')
// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map()
myMap.set(1, 'enero')
myMap.set(2, 'febrero')
myMap.set(3, 'marzo')
myMap.set(4, 'abril')
myMap.set(5, 'mayo')
myMap.set(6, 'junio')
myMap.set(7, 'julio')
myMap.set(8, 'agosto')
myMap.set(9, 'septiembre')
myMap.set(10, 'octubre')
myMap.set(11, 'noviembre')
myMap.set(12, 'diciembre')

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (myMap.has(5)) {
    console.log(myMap.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set('verano', ['junio', 'julio', 'agosto'])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arrayNumbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9]
let setNumbers = new Set(arrayNumbers)
let mapNumbers = new Map()
mapNumbers.set('numeros', setNumbers)

console.log(mapNumbers)