/**
 * Arreglos Javascript 2009
 */
var nombres = ['Pablo', 'Carlos', 'María', 'Teresa'];
var vegetales = new Array('Zanahoria', 'Lechuga', 'Chayote');
var frutas = ['Pera', 'Manzana', 'Mango'];

// for (var i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento);
});
frutas.push('Naranja');
frutas.unshift('Fresa');
console.log(frutas);
console.log(frutas.indexOf('Naranja'));

/**
 * Objetos Literales
 */
var persona1 = {
    nombre : 'Pablo',
    apellido : 'Vázquez',
    hobbies : ['futbol', 'películas', 'inglés'],
    edad : 30,
    esCasado : false,
    calcularAnoNacimiento : function (hoy = 2020) {
        this.anoNacimiento = hoy - this.edad;
    }
};
persona1.calcularAnoNacimiento();
console.log(persona1, persona1.apellido, persona1['nombre']);


/**
 * Objetos con sintaxis Object (todos los objetos en javascript heredan de esta clase)
 */
var persona2 = new Object(); 
persona2.nombre = 'María';
persona2.apellido = 'Vázquez';
persona2.hobbies = ['arte', 'películas', 'inglés'];
persona2.edad = 28;
persona2.esCasado = false;
persona2.calcularAnoNacimiento = function (hoy = 2020) {
    this.anoNacimiento = hoy - this.edad;
}
persona2.calcularAnoNacimiento();
console.log(persona2);