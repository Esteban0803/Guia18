console.log("Ejercicio 1");
var clima = prompt("Como esta el dia de hoy? (soleado, nublado, lloviendo)");
if (clima === "soleado") {
    console.log("El dia de hoy esta soleado");
} else if (clima === "nublado") {
    console.log("El dia de hoy esta nublado");
} else if (clima === "lloviendo") {
    console.log("El dia de hoy esta lloviendo");
} else {
    console.log("El clima es incorrecto");
}
console.log("Ejercicio -----------------");
console.log("Ejercicio 2");
var radio = prompt("Cual es el radio?");
var pi = 3.14;
var area = pi * radio * radio
var perimetro = 2 * pi * radio
console.log("El area es: " + area);
console.log("El perimetro es: " + perimetro);
console.log("Ejercicio -----------------");
console.log("Ejercicio 3");
var edad = prompt("Cual es la edad de la persona?");
if(edad >= 18){
console.log("La persona tiene " + edad + " por ende es mayor de edad");
} else {
    console.log("La persona tiene " + edad + "por ende es menor de edad");
}
console.log("Ejercicio -----------------");
console.log("Ejercicio 4");
var letra = prompt("Ingrese una S o N");
if((letra === 'S' || letra === 's' || letra === 'N' || letra === 'n')){
console.log("correcto");
} else {
    console.log("Incorrecto");
}
console.log("Ejercicio -----------------");
console.log("Ejercicio 5");
var num1 = parseInt(prompt("Ingrese el primer numero:"));
var num2 = parseInt(prompt("Ingrese el segundo numero:"));
console.log("El numero 1 es: "+num1);
console.log("El numero 2 es: "+num2);
var opcion = prompt("Quiere hacer una s (suma), r (resta), d (division) o m (multiplicacion)? o t (todo)");
switch(opcion){
    case "s":
        console.log(num1 + num2);
    break;
    
    case "r":
        console.log(num1 - num2);
    break;

    case "d":
        console.log(num1 / num2);
    break;

    case "m":
        console.log(num1 * num2);
    break;

    case "t":
        console.log(num1 + num2);
        console.log(num1 - num2);
        console.log(num1 / num2);
        console.log(num1 * num2);
    break;
    
    default:
        console.log("Opcion incorrecta");
    break;
}
console.log("Ejercicio -----------------");
console.log("Ejercicio 6");
var num = parseInt(prompt("Ingrese un numero:"));
if (num === 0) {
    console.log("El 0 no es ni par ni impar");
} else if (num % 2 === 0) {
    console.log(num + " es un numero par");
} else {
    console.log(num + " es un numero impar");
}
console.log("Ejercicio -----------------");
console.log("Ejercicio 7");
var limite = parseInt(prompt("Ingrese un limite:"));
var suma = 0;

if (isNaN(limite) || limite <= 0) { //el isNaN se utiliza para verificar si el numero ingresado es 
                                    //verdaderamente un
    console.log("Ingrese un numero valido");
} else {
    while (suma <= limite) {
        var numero = parseInt(prompt("Ingrese un número:"));
        
        if (isNaN(numero)) {
            console.log("Ingrese un numero valido");
            continue;
        }
        
        suma += numero;
    }
    
    console.log("La suma de los numeros introducidos supero el limite inicial de " + limite);
    console.log("La suma total es: " + suma);
}
console.log("-----------------");
console.log("Ejercicio 8");
var numeros = [];
var numero;
var suma = 0;
var minimo = Number.MAX_SAFE_INTEGER; //Number.MAX_SAFE_INTEGER y Number.MIN_SAFE_INTEGER sirver para identificar el 
var maximo = Number.MIN_SAFE_INTEGER; //valor minimo y maximo del array

do {
    numero = parseInt(prompt("Ingrese un número entero (ingrese 0 para terminar):"));

    if (!isNaN(numero)) {
        if (numero !== 0) {
            numeros.push(numero);
            suma += numero;
            if (numero < minimo) {
                minimo = numero;
            }
            if (numero > maximo) {
                maximo = numero;
            }
        }
    } else {
        console.log("Por favor, ingrese un número válido.");
    }
} while (numero !== 0);

if (numeros.length === 0) {
    console.log("No se ingresaron números.");
} else {
    var promedio = suma / numeros.length;

    console.log("Máximo número ingresado: " + maximo);
    console.log("Mínimo número ingresado: " + minimo);
    console.log("Promedio de los números ingresados: " + promedio.toFixed(2));
}
console.log("Ejercicio -----------------");
console.log("Ejercicio 9");
var frase = prompt("Ingrese una frase:");

var fraseConEspacios = "";

for (var i = 0; i < frase.length; i++) {
    fraseConEspacios += frase.charAt(i);
    
    if (i < frase.length - 1) {
        fraseConEspacios += " ";
    }
}
console.log("La frase con espacios entre cada letra es:");
console.log(fraseConEspacios);

/*
EXPLICACION DE ESTE EJERCICIO:
En este programa, se utiliza un bucle for para recorrer cada letra de la frase ingresada por el usuario. 
Se utiliza el método charAt(i) para obtener el carácter en la posición i de la frase. Luego, se agrega el carácter a la variable fraseConEspacios. 
Después de cada carácter (excepto el último), se agrega un espacio en blanco a fraseConEspacios. 
Finalmente, se muestra la frase con espacios entre cada letra.
*/

console.log("Ejercicio -----------------");
console.log("Ejercicio 10");
const reverseWord = palabra => {
    return palabra.split('').reverse().join('');
};

const palabraOriginal = prompt("Ingrese una palabra:");
const palabraReversa = reverseWord(palabraOriginal);

console.log("Palabra original:", palabraOriginal);
console.log("Palabra al revés:", palabraReversa);
/*
En esta función flecha, reverseWord, primero se convierte la palabra en un array de caracteres utilizando el método split(''), 
luego se invierte el orden de los caracteres usando el método reverse(), 
y finalmente se vuelve a unir el array en una cadena de texto usando el método join(''). 
Esto resulta en la palabra invertida. Luego, el programa solicita al usuario que ingrese una palabra, 
llama a la función reverseWord para obtener la palabra invertida y muestra ambas versiones de la palabra en la consola.
*/
