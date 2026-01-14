function ejercicio6() {
    let radio = parseFloat(document.getElementById("radio").value);

    if (isNaN(radio) || radio <= 0) {
        alert("Introduce un valor de radio válido y mayor que 0.");
        return;
    }

    let diametro = 2 * radio;
    let perimetro = 2 * Math.PI * radio;
    let areaCirculo = Math.PI * radio * radio;
    let areaEsfera = 4 * Math.PI * radio * radio;
    let volumenEsfera = (4 / 3) * Math.PI * radio * radio * radio;

    alert(
        "Radio: " + radio + " cm" +
        "\nDiámetro: " + diametro + " cm" +
        "\nPerímetro de la circunferencia: " + perimetro.toFixed(2) + " cm" +
        "\nÁrea del círculo: " + areaCirculo.toFixed(2) + " cm²" +
        "\nÁrea de la esfera: " + areaEsfera.toFixed(2) + " cm²" +
        "\nVolumen de la esfera: " + volumenEsfera.toFixed(2) + " cm³"
    );
}
