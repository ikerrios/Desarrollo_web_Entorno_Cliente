function calcularCategoria() {
    let año = parseInt(document.getElementById('año').value);
    const añoActual = 2025;

    año = añoActual - año;

    const categorias = ["Micros", "Prebenjamín", "Benjamín", "Alevín", "Infantil", "Cadete", "Juvenil", "Junior", "Sub-23", "Senior", "Veterano"];
    let categoria = "";

    if(año >= 4 && año <=5) categoria = categorias[0];
    else if(año >= 6 && año <= 7) categoria = categorias[1];
    else if(año >= 8 && año <= 9) categoria = categorias[2];
    else if(año >= 10 && año <= 11) categoria = categorias[3];
    else if(año >= 12 && año <= 13) categoria = categorias[4];
    else if(año >= 14 && año <= 15) categoria = categorias[5];
    else if(año >= 16 && año <= 17) categoria = categorias[6];
    else if(año >= 18 && año <= 19) categoria = categorias[7];
    else if(año >= 20 && año <= 22) categoria = categorias[8];
    else if(año >= 23 && año <= 34) categoria = categorias[9];
    else if(año >= 35) categoria = categorias[10];
    else categoria = "Introduzca un número válido.";

    document.writeln("Tu categoría es: <b>" + categoria + "</b>");
    document.writeln("<table border='1'>");
    document.writeln("<tr><th>Categorías</th></tr>");

    // Recorremos todas las categorías
    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i] == año) {
            document.writeln("<tr><td><b>" + categorias[i] + "</b></td></tr>");
        }
        document.writeln("<tr><td>" + categorias[i] + "</td></tr>");
    }

    document.writeln("</table>");
}