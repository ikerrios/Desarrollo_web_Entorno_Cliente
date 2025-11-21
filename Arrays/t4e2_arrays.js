let paises = ["España", "Francia", "Italia", "Alemania", "Portugal"];

function escribirResultado(titulo, texto) {
    const contenedor = document.getElementById("resultado");
    if (!contenedor) return;

    contenedor.innerHTML += `<h3>${titulo}</h3><p>${texto}</p>`;
}

function mostrarNumeroElementos(lista) {
    return lista.length;
}

function obtenerTodos(lista) {
    return lista.join(", ");
}

function obtenerInverso(lista) {
    return [...lista].reverse().join(", ");
}

function obtenerOrdenados(lista) {
    return [...lista].sort().join(", ");
}

function anadirPrincipio(lista, pais) {
    if (!pais) return "No se ha introducido ningún país.";
    lista.unshift(pais);
    return `Se ha añadido "${pais}" al principio.<br>Array actual: ${lista.join(", ")}`;
}

function anadirFinal(lista, pais) {
    if (!pais) return "No se ha introducido ningún país.";
    lista.push(pais);
    return `Se ha añadido "${pais}" al final.<br>Array actual: ${lista.join(", ")}`;
}

function borrarPrincipio(lista) {
    if (lista.length === 0) return "No hay países en el array.";
    const borrado = lista.shift();
    return `Se ha borrado del principio: "${borrado}".<br>Array actual: ${lista.join(", ")}`;
}

function borrarFinal(lista) {
    if (lista.length === 0) return "No hay países en el array.";
    const borrado = lista.pop();
    return `Se ha borrado del final: "${borrado}".<br>Array actual: ${lista.join(", ")}`;
}

function obtenerPorPosicion(lista, pos) {
    if (isNaN(pos) || pos < 1 || pos > lista.length) {
        return "Posición no válida.";
    }
    const pais = lista[pos - 1];
    return `En la posición ${pos} está: "${pais}".`;
}

function obtenerPosicionPorNombre(lista, nombre) {
    if (!nombre) return "No se ha introducido ningún país.";
    const indice = lista.indexOf(nombre);
    if (indice === -1) {
        return `El país "${nombre}" no se encuentra en el array.`;
    }
    return `El país "${nombre}" está en la posición ${indice + 1}.`;
}

function obtenerIntervalo(lista, inicio, fin) {
    if (
        isNaN(inicio) || isNaN(fin) ||
        inicio < 1 || fin < 1 ||
        inicio > lista.length || fin > lista.length ||
        inicio > fin
    ) {
        return "Intervalo no válido.";
    }

    const trozo = lista.slice(inicio - 1, fin);
    return `Elementos del intervalo [${inicio} - ${fin}]: ${trozo.join(", ")}`;
}


function menu(lista) {
    let opcion;

    do {
        opcion = prompt(
            "Gestión de países (t4e2_arrays)\n\n" +
            "1. Mostrar número de países\n" +
            "2. Mostrar listado de países\n" +
            "3. Mostrar intervalo de países\n" +
            "4. Añadir un país\n" +
            "5. Borrar un país\n" +
            "6. Consultar un país\n" +
            "0. Salir\n\n" +
            "Elige una opción:"
        );

        if (opcion === null) break; 

        switch (opcion) {
            case "1": { 
                const num = mostrarNumeroElementos(lista);
                const texto = "Número de países: " + num;
                alert(texto);
                escribirResultado("Número de países", texto);
                break;
            }

            case "2": { 
                const modo = prompt(
                    "¿Cómo quieres mostrarlos?\n\n" +
                    "1. Orden actual\n" +
                    "2. Del revés\n" +
                    "3. Orden alfabético"
                );

                let texto = "";
                let titulo = "Listado de países";

                if (modo === "1") {
                    texto = obtenerTodos(lista);
                    titulo += " (orden actual)";
                } else if (modo === "2") {
                    texto = obtenerInverso(lista);
                    titulo += " (del revés)";
                } else if (modo === "3") {
                    texto = obtenerOrdenados(lista);
                    titulo += " (orden alfabético)";
                } else {
                    alert("Opción no válida.");
                    break;
                }

                alert(texto);
                escribirResultado(titulo, texto);
                break;
            }

            case "3": { 
                const intervalo = prompt("Introduce el intervalo en formato inicio-fin (ej: 2-4):");

                if (!intervalo) {
                    alert("No se ha introducido intervalo.");
                    break;
                }

                const partes = intervalo.split("-");
                const inicio = parseInt(partes[0]);
                const fin = parseInt(partes[1]);

                const texto = obtenerIntervalo(lista, inicio, fin);
                alert(texto);
                escribirResultado("Intervalo de países", texto);
                break;
            }

            case "4": { 
                const donde = prompt(
                    "¿Dónde quieres añadir el país?\n\n" +
                    "1. Al principio\n" +
                    "2. Al final"
                );
                const pais = prompt("Introduce el nombre del país:");

                let texto = "";

                if (donde === "1") {
                    texto = anadirPrincipio(lista, pais);
                } else if (donde === "2") {
                    texto = anadirFinal(lista, pais);
                } else {
                    alert("Opción no válida.");
                    break;
                }

                alert(texto.replace(/<br>/g, "\n"));
                escribirResultado("Añadir país", texto);
                break;
            }

            case "5": { 
                const donde = prompt(
                    "¿Qué quieres borrar?\n\n" +
                    "1. El primero\n" +
                    "2. El último"
                );

                let texto = "";

                if (donde === "1") {
                    texto = borrarPrincipio(lista);
                } else if (donde === "2") {
                    texto = borrarFinal(lista);
                } else {
                    alert("Opción no válida.");
                    break;
                }

                alert(texto.replace(/<br>/g, "\n"));
                escribirResultado("Borrar país", texto);
                break;
            }

            case "6": { 
                const como = prompt(
                    "¿Cómo quieres consultar?\n\n" +
                    "1. Por posición\n" +
                    "2. Por nombre"
                );

                let texto = "";

                if (como === "1") {
                    const pos = parseInt(prompt("Introduce la posición (empezando en 1):"));
                    texto = obtenerPorPosicion(lista, pos);
                } else if (como === "2") {
                    const nombre = prompt("Introduce el nombre del país:");
                    texto = obtenerPosicionPorNombre(lista, nombre);
                } else {
                    alert("Opción no válida.");
                    break;
                }

                alert(texto);
                escribirResultado("Consultar país", texto);
                break;
            }

            case "0":
                alert("Saliendo del programa.");
                break;

            default:
                alert("Opción no válida.");
        }

    } while (opcion !== "0");
}

window.onload = function () {
    menu(paises);
};
