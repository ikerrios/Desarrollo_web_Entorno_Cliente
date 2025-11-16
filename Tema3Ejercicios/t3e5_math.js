function ejercicio5() {
    let opcion = parseInt(document.getElementById("opcionMath").value);

    if (isNaN(opcion) || opcion < 1 || opcion > 4) {
        alert("Por favor, introduce una opción válida (1, 2, 3 o 4).");
        return;
    }

    if (opcion === 1) {
        let base = parseFloat(prompt("Introduce la base:"));
        let exponente = parseFloat(prompt("Introduce el exponente:"));

        if (isNaN(base) || isNaN(exponente)) {
            alert("Debes introducir números válidos.");
            return;
        }

        let resultado = Math.pow(base, exponente);
        alert("La potencia de " + base + " elevado a " + exponente + " es: " + resultado);

    } else if (opcion === 2) {
        let numero = parseFloat(prompt("Introduce un número (no negativo):"));

        if (isNaN(numero) || numero < 0) {
            alert("Debes introducir un número no negativo.");
            return;
        }

        let raiz = Math.sqrt(numero);
        alert("La raíz de " + numero + " es: " + raiz);

    } else if (opcion === 3) {
        let decimal = parseFloat(prompt("Introduce un número decimal:"));

        if (isNaN(decimal)) {
            alert("Debes introducir un número decimal válido.");
            return;
        }

        let redondeoNormal = Math.round(decimal);
        let redondeoAlta = Math.ceil(decimal);
        let redondeoBaja = Math.floor(decimal);

        alert(
            "Número original: " + decimal +
            "\nRedondeo al entero más próximo: " + redondeoNormal +
            "\nRedondeo al alta: " + redondeoAlta +
            "\nRedondeo a la baja: " + redondeoBaja
        );

    } else if (opcion === 4) {
        let angulo = parseFloat(prompt("Introduce un ángulo entre 0 y 360 grados:"));

        if (isNaN(angulo) || angulo < 0 || angulo > 360) {
            alert("Debes introducir un ángulo entre 0 y 360.");
            return;
        }

        let radianes = angulo * Math.PI / 180;

        let seno = Math.sin(radianes);
        let coseno = Math.cos(radianes);
        let tangente = Math.tan(radianes);

        alert(
            "Ángulo: " + angulo + "º" +
            "\nSeno: " + seno +
            "\nCoseno: " + coseno +
            "\nTangente: " + tangente
        );
    }
}
