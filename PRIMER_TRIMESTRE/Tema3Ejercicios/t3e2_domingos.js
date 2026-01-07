function ejercicio2() {
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);

    if (isNaN(mes) || isNaN(dia)) {
        alert("Por favor, introduce solo números válidos.");
        return;
    }

    let fecha_actual = new Date();
    let año_actual = fecha_actual.getFullYear();
    let contador = 0;

            
    for (let i = año_actual; i <= 2100; i++) {
        let fecha_cumple = new Date(i, mes - 1, dia);
        if (fecha_cumple.getDay() === 0) { 
            contador++;
        }
    }

    alert("Tu cumpleaños caerá en domingo " + contador + " veces hasta el año 2100.");
}