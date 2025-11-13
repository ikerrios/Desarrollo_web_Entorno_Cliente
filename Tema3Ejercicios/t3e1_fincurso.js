function ejercicio1() {
    const fechaActual = new Date();
    const fechaFinCurso = new Date(2026, 5, 24);

    const diferenciaDias = fechaFinCurso - fechaActual;

    const numeroDias = (diferenciaDias / (1000 * 60 * 60 * 24)+1);

    document.writeln ("Quedan un total de: ",  Math.round(numeroDias), " días");
}