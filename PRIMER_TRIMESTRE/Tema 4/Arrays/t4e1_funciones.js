function imc() {
    let peso = parseFloat(prompt("Introduce tu peso en kg:"));
    let altura = parseFloat(prompt("Introduce tu altura en metros (ej: 1.75):"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Datos no válidos.");
        return;
    }

    let resultado = peso / (altura * altura);
    alert("Tu IMC es: " + resultado.toFixed(2));
}

function fcm() {
    let edad = parseInt(prompt("Introduce tu edad:"));
    
    if (isNaN(edad) || edad <= 0) {
        alert("Edad no válida.");
        return;
    }

    let fcm = 220 - edad;
    alert("Tu frecuencia cardiaca máxima aproximada es: " + fcm + " ppm");
}

function categoria() {
    let añoNacimiento = parseInt(prompt("Introduce tu año de nacimiento:"));
    if (isNaN(añoNacimiento) || añoNacimiento <= 1900) {
        alert("Año no válido.");
        return;
    }

    const añoActual = 2025;
    let edad = añoActual - añoNacimiento;
    let cat = "";

    if (edad < 4) cat = "Demasiado pequeño";
    else if (edad <= 5) cat = "Micros";
    else if (edad <= 7) cat = "Prebenjamín";
    else if (edad <= 9) cat = "Benjamín";
    else if (edad <= 11) cat = "Alevín";
    else if (edad <= 13) cat = "Infantil";
    else if (edad <= 15) cat = "Cadete";
    else if (edad <= 17) cat = "Juvenil";
    else cat = "Senior";

    alert("Tu categoría es: " + cat);
}

function horario() {
    alert("Aquí iría la lógica de mostrar el horario.\nhorariooo.");
}
