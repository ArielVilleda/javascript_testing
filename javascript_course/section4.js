/**
 * Sentencia if / else
 */
// var nombre = 'Pedrito';
// var estaCasado = false;

// if (estaCasado) {
//     console.log(`felicidades, pinshi ${nombre}`);
// } else {
//     console.log(`aplícate, pinshi ${nombre}`);
// }

/**
 * Sentencias Condicionales
 */
// var nombre = 'Pablo';
// var edad = 12;
// if (edad < 12) {
//     console.log(nombre + ' está muy morro');
// } else if ((edad >= 12) && (edad < 18)){
//     console.log(nombre + ' está puberto');
// } else {
//     console.log(nombre + ' está anciano');
// }

/** 
 * Operador Ternario
 */
// var nombre = 'Pablo';
// var edad = 18;

// edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' no es mayor');

/**
 * Sentencia Switch
 */
// var mes = 5;
// switch (mes) {
//     case 1:
//         console.log('Enero');
//         break;
//     case 2:
//         console.log('Febrero');
//         break;
//     case 3:
//         console.log('Marzo');
//         break;
//     case 4:
//         console.log('Abril');
//         break;
//     default:
//         console.log('Valor no considerado');
//         // break;
// }

/**
 * Sentencia for
//  */
// for (var index = 0; index < 10; index++) {
//     console.log(index);
// }

/**
 * Sentencia While
 */
// var index = 10;
// while (index >= 1) {
//     console.log(index);
//     index--;
// }

/**
 * Sentencia do while
 */
var index = 2;
do {
    console.log(index);
    index++;
} while (index <= 1);

/**
 * Cuándo un valor es falso o verdadero
 */
var edad;
if (edad) {
    console.log('definida');
} else {
    console.log('no definida');
}

edad = '';
if (edad) {
    console.log('definida');
} else {
    console.log('no definida');
}

edad = '10';
if (edad == 10) {
    console.log('definida');
} else {
    console.log('no definida');
}

if (edad === 10) {
    console.log('definida');
} else {
    console.log('no definida');
}