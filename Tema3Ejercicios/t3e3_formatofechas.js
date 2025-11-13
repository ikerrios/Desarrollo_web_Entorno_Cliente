function ejercicio3() {
    let formato = parseInt(document.getElementById("formato").value);

    if (isNaN(formato) || formato < 1 || formato > 3) {
        alert("Por favor, introduce un número válido (1, 2 o 3).");
        return;
    }

    let fecha = new Date();

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();

    let diasSemanaES = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let mesesES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let diasSemanaEN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let mesesEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let texto = "";

    if (formato === 1) {
        texto = dia + "/" + mes + "/" + anio;
    } else if (formato === 2) {
        texto = diasSemanaES[fecha.getDay()] + ", " + dia + " de " + mesesES[fecha.getMonth()] + " de " + anio;
    } else if (formato === 3) {
        texto = diasSemanaEN[fecha.getDay()] + ", " + mesesEN[fecha.getMonth()] + " " + dia + ", " + anio;
    }

    alert(texto);
}