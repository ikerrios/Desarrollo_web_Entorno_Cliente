function ejercicio8() {
    let nombreCompleto = document.getElementById("nombreCompleto").value;

    if (!nombreCompleto || nombreCompleto.trim() === "") {
        alert("Introduce tu nombre y apellidos.");
        return;
    }

    nombreCompleto = nombreCompleto.trim();

    let sinEspacios = nombreCompleto.replace(/\s+/g, "");
    let tamaño = sinEspacios.length;

    let enMinusculas = nombreCompleto.toLowerCase();
    let enMayusculas = nombreCompleto.toUpperCase();

    let partes = nombreCompleto.split(/\s+/);

    if (partes.length < 3) {
        alert("Introduce al menos nombre y dos apellidos.");
        return;
    }

    let nombre = partes[0];
    let apellido1 = partes[1];
    let apellido2 = partes[2];

    let usuario1 = (nombre.charAt(0) + apellido1 + apellido2.charAt(0)).toLowerCase();

    let usuario2 = (
        nombre.substring(0, 3) +
        apellido1.substring(0, 3) +
        apellido2.substring(0, 3)
    ).toLowerCase();

    alert(
        "Tamaño del nombre + apellidos (sin espacios): " + tamaño +
        "\nEn minúsculas: " + enMinusculas +
        "\nEn mayúsculas: " + enMayusculas +
        "\n\nNombre: " + nombre +
        "\nApellido 1: " + apellido1 +
        "\nApellido 2: " + apellido2 +
        "\n\nPropuesta de usuario 1: " + usuario1 +
        "\nPropuesta de usuario 2: " + usuario2
    );
}
