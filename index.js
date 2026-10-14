//1.

let arrayVacio = [];
//2.

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3.

let arrayNumerosPares = [0, 2, 4, 6, 8];
//4.

let arrayBidimensional = [
    [0, 1, 2],
    ["a", "b", "c"],
];
//5.

function suma(a, b) {
    return a + b;
}

//6.

function potenciacion(a, b) {
    return a ^ b;
}

//7.

function separarPalabras(texto) {
    return texto.split(" ");
}

//8.

function repetirString(palabra, numeroRepeticiones) {
    let nuevaPalabra = "";
    for (i = 1; i <= numeroRepeticiones; i++) {
        nuevaPalabra += palabra;
    }
    return nuevaPalabra;
}

//9.

function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// 10.

function ordenarArray(array) {
    return array.sort((a, b) => a - b);
}

const arrayDesordenado = [5, 2, 9, 1, 5, 6];
console.log("Array ordenado: " + ordenarArray(arrayDesordenado));

// 11.-

function obtenerPares(array) {
    const nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        const numeroActual = array[i];
        if (numeroActual % 2 === 0) {
            nuevoArray.push(numeroActual);
        }
    }
    return nuevoArray;
}

const arrayNumeros2 = [1, 2, 3, 4, 5, 6];
console.log("Elementos pares: " + obtenerPares(arrayNumeros2));

// 12.-

function pintarArray(array) {
    let resultado = "[";
    for (let i = 0; i < array.length; i++) {
        resultado = resultado + array[i];
        if (i < array.length - 1) {
            resultado += ", ";
        }
    }
    resultado = resultado + "]";
    return resultado;
}

const arrayEjemplo = [0, 1, 2];
console.log("Array pintado: " + pintarArray(arrayEjemplo));

// 13.-

function arrayMapi(array, callback) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(callback(array[i]));
    }
    return resultado;
}

const arrayEjemplo2 = [1, 2, 3, 4];

function duplicar(num) {
    return num * 2;
}

console.log("Array mapeado: " + arrayMapi(arrayEjemplo2, duplicar));

// 14.-

function eliminarDuplicados(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        console.log(
            `i: ${i}, array[i]: ${array[i]}, resultado: [${resultado}], noEstaIncluido: ${resultado.includes(array[i]) === false} `,
        );
        if (resultado.includes(array[i]) === false) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

const arrayConDuplicados = [1, 2, 3, 2, 4, 1, 5];
console.log("Array sin duplicados: " + eliminarDuplicados(arrayConDuplicados));


// 15.-

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

console.log(arrayNumerosNeg);

// 16.-

let holaMundo = ["Hola", "Mundo"];

console.log(holaMundo);

// 17.-

let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

console.log(loGuardoTodo);

// 18.-

let arrayDeArrays = [
    [756, "nombre"],
    [225, "apellido"],
    [298, "direccion"]
];

console.log(arrayDeArrays);

// 19.-

function multiplicacion(a, b) {
    return a * b;
}

console.log(multiplicacion(3, 4));

// 20.-

function division(a, b) {
    return a / b;
}

console.log(division(10, 2));

// 21.-

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(esPar(2));
console.log(esPar(3));

// 22.-

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

let arrayFunciones = [suma, resta, multiplicacion];

console.log(arrayFunciones[0](1, 3));
console.log(arrayFunciones[1](1, 3));
console.log(arrayFunciones[2](1, 3));

// 23.-

function ordenarArray2(array) {
    return array.sort((a, b) => b - a);
}

const arrayDesordenado2 = [5, 2, 9, 1, 6];

console.log("Array ordenado: " + ordenarArray2(arrayDesordenado2));

// 24.-

function obtenerImpares(array) {
    const nuevoArray = [];

    for (let i = 0; i < array.length; i++) {
        const numeroActual = array[i];

        if (numeroActual % 2 !== 0) {
            nuevoArray.push(numeroActual);
        }
    }

    return nuevoArray;
}

const arrayNumeros3 = [1, 2, 3, 4, 5, 6, 7];

console.log("Elementos impares: " + obtenerImpares(arrayNumeros3));

// 25.-

function sumarArray(array) {
    let resultado = 0;

    for (let i = 0; i < array.length; i++) {
        resultado = resultado + array[i];
    }

    return resultado;
}

const arrayParaSumar = [1, 2, 3];

console.log("Resultado de la suma: " + sumarArray(arrayParaSumar));

// 26.-

function multiplicarArray(array) {
    let resultado = 1;

    for (let i = 0; i < array.length; i++) {
        resultado = resultado * array[i];
    }

    return resultado;
}

const arrayParaMultiplicar = [2, 3, 4];

console.log("Resultado de la multiplicación: " + multiplicarArray(arrayParaMultiplicar));