 function calcularFrecuencia() {
            let edad = parseInt(document.getElementById('edad').value);
            let sexo = document.getElementById('sexo').value.toLowerCase();

            if (isNaN(edad) || edad <= 0 || (sexo !== "hombre" && sexo !== "mujer")) {
                alert("Introduzca valores válidos.");
                return;
            }

            let fcm = (sexo === "hombre") ? (220 - edad) : (226 - edad);

            let recMin = (fcm * 0.6).toFixed(0); //redondea al número que quiero.
            let recMax = (fcm * 0.7).toFixed(0);
            let aeroMin = (fcm * 0.7).toFixed(0);
            let aeroMax = (fcm * 0.8).toFixed(0);
            let anaerMin = (fcm * 0.8).toFixed(0);
            let anaerMax = (fcm * 0.9).toFixed(0);
            let rojaMin = (fcm * 0.9).toFixed(0);
            let rojaMax = fcm;

            document.writeln("Su frecuencia cardiaca máxima es de: <b>" + fcm + " ppm</b><br><br>");
            document.writeln("<table border='1' cellpadding='5'>");
            document.writeln("<tr><th>Zona</th><th>Rango</th></tr>");
            document.writeln("<tr><td>Recuperación (60%-70%)</td><td>" + recMin + " - " + recMax + "</td></tr>");
            document.writeln("<tr><td>Aeróbica (70%-80%)</td><td>" + aeroMin + " - " + aeroMax + "</td></tr>");
            document.writeln("<tr><td>Anaeróbica (80%-90%)</td><td>" + anaerMin + " - " + anaerMax + "</td></tr>");
            document.writeln("<tr><td>Línea Roja (90%-100%)</td><td>" + rojaMin + " - " + rojaMax + "</td></tr>");
            document.writeln("</table>");
        }