function ejercicio4() {
    let formato = parseInt(document.getElementById("formato").value);

    if (isNaN(formato) || formato < 1 || formato > 2) {
        alert("Por favor, introduce un número válido (1 o 2).");
        return;
    }

    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

      
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    let texto = "";

    if (formato === 1) {        
        texto = horas + ":" + minutos + ":" + segundos;
    } else if (formato === 2) {
             
        let horas12 = fecha.getHours();
        let ampm = "AM";

    if (horas12 >= 12) {
        ampm = "PM";
    }
        
        
    if (horas12 === 0) {
        horas12 = 12; 
    } else if (horas12 > 12) {
        horas12 = horas12 - 12;
    }

    if (horas12 < 10) horas12 = "0" + horas12;
        texto = horas12 + ":" + minutos + " " + ampm;
    }

    alert("Hora actual: " + texto);
}