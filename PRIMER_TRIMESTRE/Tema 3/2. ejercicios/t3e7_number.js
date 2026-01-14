function ejercicio7() {
    let numero = parseInt(document.getElementById("numeroEntero").value);

    if (isNaN(numero)) {
        alert("Introduce un número entero válido.");
        return;
    }

    // 1. Valor exponencial
    let exponencial = numero.toExponential();

    // 2. Número con 4 decimales
    let conDecimales = numero.toFixed(4);

    // 3. Binario (rellenado a 8 bits)
    let binario = numero.toString(2);
    while (binario.length < 8) {
        binario = "0" + binario;
    }

    // 4. Octal
    let octal = numero.toString(8);

    // 5. Hexadecimal (con 0x delante)
    let hexadecimal = "0x" + numero.toString(16);

    alert(
        "Número original: " + numero +
        "\nValor exponencial: " + exponencial +
        "\nCon 4 decimales: " + conDecimales +
        "\nEn binario: " + binario +
        "\nEn octal: " + octal +
        "\nEn hexadecimal: " + hexadecimal
    );
}
