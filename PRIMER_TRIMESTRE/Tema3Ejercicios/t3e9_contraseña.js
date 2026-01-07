function ejercicio9() {
    let contrasena = document.getElementById("contrasena").value;

    if (!contrasena || contrasena.trim() === "") {
        alert("Introduce una contraseña.");
        return;
    }

    if (contrasena.length < 8 || contrasena.length > 16) {
        alert("Contraseña no segura: debe tener entre 8 y 16 caracteres.");
        return;
    }

    let tieneMayuscula = /[A-Z]/.test(contrasena);

    let tieneMinuscula = /[a-z]/.test(contrasena);

    let tieneNumero = /[0-9]/.test(contrasena);

    let tieneSimbolo = /[-_@#$%&]/.test(contrasena);

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneSimbolo) {
        alert("Contraseña segura.");
    } else {
        alert("Contraseña no segura. Debe incluir:\n- Mayúscula\n- Minúscula\n- Número\n- Símbolo: - _ @ # $ % &");
    }
}
