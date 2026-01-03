/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

    console.log('hola' + ' ' + 'mundo')

// 2. Muestra la longitud de una cadena de texto

    console.log('hola'.length)

// 3. Muestra el primer y último carácter de un string

    console.log('hola'[0])
    console.log('hola'[3])

// 4. Convierte a mayúsculas y minúsculas un string

    console.log('hola'.toUpperCase())
    console.log('HOLA'.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

    console.log(`Esta es la línea 1
                Esta es la línea 2
                Esta es la línea 3`)

// 6. Interpola el valor de una variable en un string}

        const MyName = 'Jacobo'
        console.log(`Hola, mi nombre es ${MyName}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
        const texto = 'Curso de JavaScript Básico'
        console.log(texto.replace(/ /g, '-'))
        console.log(texto.split('a').join('-'))
// 8. Comprueba si una cadena de texto contiene una palabra concreta

        const frase = 'El perro de San Roque no tiene rabo'
        console.log(frase.includes('perro'))

// 9. Comprueba si dos strings son iguales

        const string1 = 'Hola'
        const string2 = 'hola'
        console.log(string1 === string2)

// 10. Comprueba si dos strings tienen la misma longitud

        console.log(string1.length == string2.length)