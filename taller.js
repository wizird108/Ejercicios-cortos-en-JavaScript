
// 1. Tipos de Variables (var, let, const)

// Ejercicio 1.1
/*
var nombre = "David";
console.log(nombre);
nombre = "jaco";
console.log(nombre);
*/

// Ejercicio 1.2
/*
const nombre = "David";
console.log(nombre);
nombre = "jaco";
console.log(nombre);
*/ // Falla porque una variable const no se puede reasignar.

// Ejercicio 1.3
/*
if (false) {
    let edad = 12;
}
console.log(edad);
*/ //  no se puede acceder afuera del bloque, porque let solo existe dentro del bloque donde se declara.



// Tipos de Datos (Primitivos y Complejos)


// Ejercicio 2.1
/*
const nombre = "David";
const edad = 13;
const pelo = true;
const caja = null;
let algo;
let array = [typeof nombre, typeof edad, typeof pelo, typeof caja, typeof algo];
console.log(array);

// Ejercicio 2.2
/*
let persona = {
    nombre: "yo",
    edad: 18
};
let hobbies = ["tenis", "videojuegos", "programar"];

console.log(typeof persona); // object
console.log(typeof hobbies); // object 

//Los 2 son object

*/


// 3. Conversión de Tipos (Implícita y Explícita)

// Ejercicio 3.1 (Implícita)
/*
let numero1 = 10;
let numero2 = "5";
console.log(numero1 + numero2); // "105": el + concatena porque uno de los dos es string, entonces el número se vuelve string
console.log(numero1 * numero2); // 50: el * solo funciona con números, entonces el string "5" se convierte a número
*/

// Ejercicio 3.2 (Explícita)
/*
console.log(String(25));       // "25"
console.log(Number("100"));    // 100
console.log(Boolean(""));      // false
console.log(Boolean("hola"));  // true 
*/


// 4. Operadores, Condicionales, Ciclos y Excepciones


// Ejercicio 4.1
/*
console.log(10 === "10"); // false: === compara valor Y tipo.
console.log(10 == "10");  // true: == solo compara el valor y convierte el tipo automáticamente.
*/

// Ejercicio 4.2
/*
let numero = 7;
if (numero % 2 === 0) {
    console.log(numero + " es par");
} else {
    console.log(numero + " es impar");
}
*/

// Ejercicio 4.3
/*
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
*/

// Ejercicio 4.4
/*
try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Ups, algo salió mal: " + error.message);
}
*/


// 5. Funciones y Arrow Functions

// Ejercicio 5.1
/*
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(4, 5)); // 20
*/

// Ejercicio 5.2
/*
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // 20
*/

// Ejercicio 5.3
/*
const saludar = () => "¡Hola a todos!";
console.log(saludar());
*/


// 6. Scope y Contextos


// Ejercicio 6.1
/*
let global = "Soy global";

function miFuncion() {
    let local = "Soy local";
    console.log(global); // funciona: una función puede ver las variables globales
    console.log(local);  // funciona: estamos dentro de la función donde se declaró
}
    
miFuncion();
console.log(global); // funciona: es global
console.log(local);  // error : local solo existe dentro de la función
*/

// Ejercicio 6.2
/*
const coche = {
    marca: "Suzuki",
    mostrarMarca: function () {
        console.log(this.marca);
    }
};
coche.mostrarMarca(); // Suzuki
*/ // this representa el objeto que llama al método .


// 7. Arrays


// Ejercicio 7.1 (Mutables)
/*
let frutas = ["Manzana", "Banana"];
console.log(frutas);       // ["Manzana", "Banana"]
frutas.push("Naranja");
console.log(frutas);       // ["Manzana", "Banana", "Naranja"]
frutas.pop();
console.log(frutas);       // ["Manzana", "Banana"]
*/

// Ejercicio 7.2 (Inmutables)
/*
let numeros = [1, 2, 3];
let dobles = numeros.map(n => n * 2);
console.log(dobles);       // [2, 4, 6]
let mayoresA1 = numeros.filter(n => n > 1);
console.log(mayoresA1);    // [2, 3]
console.log(numeros);      // [1, 2, 3] 
*/

// Ejercicio 7.3 (Iteración)
/*
let frutas = ["Manzana", "Banana"];
frutas.forEach(fruta => console.log(fruta));
console.log(frutas.find(fruta => fruta === "Banana"));          // "Banana"
console.log(frutas.findIndex(fruta => fruta === "Manzana"));    // 0
*/


// 8. Objetos y Clases

// Ejercicio 8.1 (Métodos en Objetos)
/*
const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    mostrarInfo: function () {
        console.log("Título: " + this.titulo + " | Autor: " + this.autor);
    }
};
libro.mostrarInfo();
*/

// Ejercicio 8.2 (Clases)

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return "Hola, soy " + this.nombre;
    }
}
const animal1 = new Animal("Leo");
console.log(animal1.saludar());


// Ejercicio 8.3 (Herencia de Clases)

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // llama al constructor de Animal
        this.raza = raza;
    }
}

const perro1 = new Perro("Cosmos", "Labrador");
console.log(perro1.saludar()); // Hola, soy Cosmos






