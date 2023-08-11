console.log("Ejercicio 21");
var persona = {
    nombre: "Esteban",
    edad: 20,
    sexo: "Hombre",
    peso: 115,
    altura: 190
};

var propiedadesPersona = Object.keys(persona);

console.log("Propiedades de la Persona:");
console.log(propiedadesPersona);

console.log("---------------------------");
console.log("Ejercicio 22");
function boton(){
    console.log("Soy el ejercicio 22")
}
/*
console.log("---------------------------");
console.log("Ejercicio 23");
function resaltarPalabras() {
    var parrafo = document.getElementById("texto");
    var palabras = parrafo.textContent.split(/\s+/); // Dividir el texto en palabras

    palabras.forEach(function (palabra, index) {
        if (palabra.length > 8) {
            palabras[index] = '<span class="highlight">' + palabra + '</span>'; // Resaltar palabras
        }
    });

    parrafo.innerHTML = palabras.join(' '); // Unir las palabras de nuevo en el párrafo
}

document.addEventListener("DOMContentLoaded", resaltarPalabras);
*/
console.log("---------------------------");
console.log("Ejercicio 24");
function calcularRadio() {
    var diametro = parseFloat(document.getElementById("diametro").value);
    var radio = diametro / 2;

    document.getElementById("resultado").textContent = "El radio del círculo es: " + radio.toFixed(2);
}
console.log("---------------------------");
console.log("Ejercicio 25");
function getFormValores() {
    var nombre = document.getElementById("form1").nombre.value;
    var apellido = document.getElementById("form1").apellido.value;

    var mensaje = "Nombre: " + nombre + "<br>Apellido: " + apellido;

    document.getElementById("valores").innerHTML = mensaje;
}