function calcularHorario() {
    // Seleccionamos el contenedor donde se mostrarán las tablas
    event.preventDefault(); // evita la recarga del form

    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = ""; // Limpia el contenido anterior

    // Días de cada tabla
    const diasManana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const diasTarde  = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    // Función auxiliar para formatear las horas
    function pad(n) {
        return String(n).padStart(2, "0");
    }

    // Función que devuelve el rango horario, ejemplo: 9:00-11:00
    function rango(horaInicio, pasoHoras) {
        const ini = `${pad(horaInicio)}:00`;
        const fin = `${pad(horaInicio + pasoHoras)}:00`;
        return `${ini}-${fin}`;
    }

    // Función para escribir una tabla con título, días y rangos
    function crearTabla(titulo, dias, horaInicio, horaFin, pasoHoras) {
        let html = `<h3>${titulo}</h3>`;
        html += `<table border="1" cellspacing="0" cellpadding="6" style="margin:auto; text-align:center;">`;

        // Cabecera de días
        html += "<tr><th></th>";
        for (const dia of dias) html += `<th>${dia}</th>`;
        html += "</tr>";

        // Filas con los horarios
        for (let h = horaInicio; h <= horaFin - pasoHoras; h += pasoHoras) {
            html += "<tr>";
            html += `<th>${rango(h, pasoHoras)}</th>`;
            for (let i = 0; i < dias.length; i++) html += "<td></td>";
            html += "</tr>";
        }

        html += "</table><br>";
        return html;
    }

    // Generamos las dos tablas
    const tablaManana = crearTabla("Horario de mañana", diasManana, 9, 15, 2);
    const tablaTarde = crearTabla("Horario de tarde", diasTarde, 16, 21, 1);

    // Las insertamos en el contenedor
    contenedor.innerHTML = tablaManana + tablaTarde;
}
