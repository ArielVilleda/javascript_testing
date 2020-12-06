/**
 * Partes de una función
 * parámetros, código, salida(return)
 */
function potenciamela(numero, potencia = null) {
    var potencia = (potencia == null) ? 1 : potencia;
    if (potencia <= 0) {
        return 1;
    }
    var respuesta = numero;
    while (potencia > 1) {
        respuesta *= numero;
        potencia--;
    }
    return respuesta;
}
var numero = 3;
var valor = potenciamela(numero);
console.log(valor);
valor = potenciamela(3, 3);
console.log(valor);

/**
 * Funciones como expresiones
 */
var prueba = function (nombre = 'Bola') {
    return `hola, ${nombre}`;
};
var respuesta = prueba();
console.log(respuesta, '-', prueba('tú también'));

/**
 * Argumentos por defecto
 * diferencia entre null y undefined
 */
var sumar = function (a = 1, b = 1, c = 1) {
    return a + b + c;
}
console.log(sumar(10, null, 7));
var num1 = 1;
console.log(`Template string con operación dentro: ${7 + 12 + num1}`);

