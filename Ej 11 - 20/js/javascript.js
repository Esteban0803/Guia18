//alert("Prueba")
console.log("Ejercicio 11");                            
function palabraMasLarga(frase) {
    const palabras = frase.split(' ');
    let palabraMasLarga = '';

    for (const palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }

    return palabraMasLarga;
}

const fraseEjemplo = "Guia de JavaScript";              //Utilizamos el Split(' ') para dividir la frase y de paso
const palabraLarga = palabraMasLarga(fraseEjemplo);     //crear un array con las palabras. Luego utilizamos el For of
                                                        //para recorrer todas las palabras del array y asi determinar la
console.log("Frase:", fraseEjemplo);                    //palabra mas larga
console.log("Palabra más larga:", palabraLarga);

console.log("------------------");
console.log("Ejercicio 12"); 
const dato = valor => typeof valor;

const valor1 = "Hola";
const valor2 = 5;
const valor3 = true;
const valor4 = null;
const valor5 = undefined;

console.log(valor1 + " es un:" + dato(valor1));
console.log(valor2 + " es un:" + dato(valor2));
console.log(valor3 + " es un:" + dato(valor3));
console.log(valor4 + " es un:" + dato(valor4));
console.log(valor5 + " es un:" + dato(valor5));

console.log("------------------");
console.log("Ejercicio 13");
function crearPersona(){

    var p1 ={};

    p1.nombre = prompt("Ingrese un nombre para la persona");
    p1.edad = parseInt(prompt("Ingrese la edad de la persona"));
    p1.sexo = prompt("Ingrese el sexo de la persona");
    p1.peso = parseFloat(prompt("Ingrese el peso de la persona"));
    p1.altura = parseFloat(prompt("Ingrese el peso de la persona"));

    return p1;
}

var nuevaP = crearPersona();

console.log(nuevaP.nombre + " es un:" + typeof nuevaP.nombre);
console.log(nuevaP.edad + " es un:" + typeof nuevaP.edad);
console.log(nuevaP.sexo + " es un:" + typeof nuevaP.sexo);
console.log(nuevaP.peso + " es un:" + typeof nuevaP.peso);
console.log(nuevaP.altura + " es un:" + typeof nuevaP.altura);

console.log("------------------");
console.log("Ejercicio 14");
function crearLibro(){

    var l1 ={};

    l1.isbn = parseInt(prompt("Ingrese el ISBN del libro"));
    l1.titulo = prompt("Ingrese el titulo del libro");
    l1.autor = prompt("Ingrese el autor del libro");
    l1.numPags = parseInt(prompt("Ingrese el numero de paginas"));

    return l1;
}

var nuevoL = crearLibro();
alert("El libro ingresado es el numero: " + nuevoL.isbn + ", se llama " + nuevoL.titulo + ", escrito por " + nuevoL.autor + " y cuenta con " + nuevoL.numPags + " paginas");
console.log("El libro ingresado es el numero: " + nuevoL.isbn + ", se llama " + nuevoL.titulo + ", escrito por " + nuevoL.autor + " y cuenta con " + nuevoL.numPags + " paginas");

console.log("------------------");
console.log("Ejercicio 15");

function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

var radio = parseFloat(prompt("Ingrese el radio del círculo:"));

if (isNaN(radio) || radio <= 0) {
    console.log("Por favor, ingrese un radio válido.");
} else {
    var area = calcularAreaCirculo(radio);
    var perimetro = calcularPerimetroCirculo(radio);

    console.log("El área del círculo es:", area.toFixed(2));            //el toFixed se usa para mostrar la cantidad de decimales de un numero
    console.log("El perímetro del círculo es:", perimetro.toFixed(2));  //Ej: PI = 3.14159 pero si utilizamos el toFixed(2) solo va a mostrar 3.14
}

console.log("------------------");
console.log("Ejercicio 16");
function numAleatorio() {
    return Math.floor(Math.random() * 100); 
}

var vector1 = [];
var vector2 = [];

for (var i = 0; i < 5; i++) {
    var valAleatorio = numAleatorio();
    vector1.push(valAleatorio);

    valAleatorio = numAleatorio();
    vector2.push(valAleatorio);
}

console.log("Vector 1:", vector1);
console.log("Vector 2:", vector2);

console.log("------------------");
console.log("Ejercicio 17");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Array original:", array);

array.splice(-2);

console.log("Array actual:", array);

console.log("------------------");
console.log("Ejercicio 18");
var valores = [true, 5, false, "hola", "adios", 2];

console.log("A. Palabra mas larga");
if (valores[3].length > valores[4].length) {
    console.log("El valor 3 es más largo que el valor 4");
} else if (valores[3].length < valores[4].length) {
    console.log("El valor 4 es más largo que el valor 3");
} else {
    console.log("Ambas son iguales de largar");
}

console.log("B. Valores True y False");
var resultadoFalse = valores[0] && valores[2]; // true && false = false
var resultadoTrue = valores[0] || valores[2]; // true || false = true

console.log("Resultado true:", resultadoTrue);
console.log("Resultado false:", resultadoFalse);

console.log("C. Operaciones Matematicas");
var suma = valores[1] + valores[5];         
var resta = valores[1] - valores[5];        
var multi = valores[1] * valores[5]; 
var div = valores[1] / valores[5];       
var modulo = valores[1] % valores[5];         

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multi);
console.log("División:", div);
console.log("Módulo:", modulo)

console.log("------------------");
console.log("Ejercicio 19");

function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

var arregloA = [];
var arregloB = new Array(20);

for (var i = 0; i < 50; i++) {
    arregloA.push(aleatorio(0, 100));
}

console.log("Arreglo A original:");
console.log(arregloA);

arregloA.sort(function(a, b) {
    return a - b;
});

for (var i = 0; i < 10; i++) {
    arregloB[i] = arregloA[i];
}

for (var i = 10; i < arregloB.length; i++) {
    arregloB[i] = 0.5;
}

console.log("Arreglo A ordenado:");
console.log(arregloA);

console.log("Arreglo B combinado:");
console.log(arregloB);

console.log("------------------");
console.log("Ejercicio 20");
var matriz = [[3], [6], [9], [12], [15]];
var arrayResultado = [];

for (var i = 0; i < matriz.length; i++) {
    arrayResultado.push(matriz[i][0] + 3);
}

console.log("Matriz original:");
console.log(matriz);

console.log("Array resultado:");
console.log(arrayResultado);