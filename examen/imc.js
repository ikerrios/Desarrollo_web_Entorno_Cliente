function calcularIMC() {
    let peso = parseInt(document.getElementById('peso').value);
    let centimetros = parseInt(document.getElementById('estatura').value);

    if (peso <= 0 || centimetros <= 0) {
        alert("Introduzca un número válido");
    } else {
        let metros = centimetros / 100;
        let imc = Math.round(peso / (metros * metros));
        alert(imc)

        let clasificacion = "";
            
        if (imc < 16) clasificacion = "Infrapeso (delgadez severa)";
        else if (imc < 17) clasificacion = "Infrapeso (delgadez moderada)";
        else if (imc < 18.5) clasificacion = "Infrapeso (delgadez aceptable)";
        else if (imc < 25) clasificacion = "Peso normal";
        else if (imc < 30) clasificacion = "Sobrepeso";
        else if (imc < 35) clasificacion = "Obeso (Tipo I)";
        else if (imc <= 40) clasificacion = "Obeso (Tipo II)";
        else clasificacion = "Obeso (Tipo III)";

        alert(clasificacion)

        document.writeln("Su imc es de: " + imc + ", lo cual está en: " + clasificacion);  
    } 
}
