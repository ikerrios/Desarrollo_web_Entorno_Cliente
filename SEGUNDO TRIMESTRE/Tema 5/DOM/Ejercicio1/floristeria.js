document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("tablaPlantas");
  const tbody = tabla.tBodies[0];

  const topBar = document.createElement("div");
  topBar.style.marginBottom = "12px";

  const btnGenerar = document.createElement("button");
  btnGenerar.textContent = "Generar planta";

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar fila";
  btnBorrar.style.marginLeft = "8px";

  topBar.appendChild(btnGenerar);
  topBar.appendChild(btnBorrar);

  document.body.insertBefore(topBar, document.body.firstChild);

  const btnContar = document.createElement("button");
  btnContar.textContent = "Mostrar número de filas";
  btnContar.style.marginTop = "12px";

  document.body.appendChild(btnContar);

  function pedirDato(mensaje) {
    const v = prompt(mensaje);
    if (v === null) return null; 
    return v.trim();
  }

  function crearFila(nombre, ubicacion, ejemplares, flor) {
    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = nombre;

    const tdUbic = document.createElement("td");
    tdUbic.textContent = ubicacion;

    const tdEj = document.createElement("td");
    tdEj.textContent = ejemplares;

    const tdFlor = document.createElement("td");
    tdFlor.textContent = flor;

    tr.appendChild(tdNombre);
    tr.appendChild(tdUbic);
    tr.appendChild(tdEj);
    tr.appendChild(tdFlor);

    tbody.appendChild(tr);
  }

  function contarFilasSinContador() {
    let count = 0;
    for (const nodo of tbody.childNodes) {
      if (nodo.nodeType === 1 && nodo.tagName === "TR") {
        count++;
      }
    }
    return count;
  }

  btnGenerar.addEventListener("click", () => {
    const nombre = pedirDato("Nombre de la planta:");
    if (nombre === null || nombre === "") return;

    const ubicacion = pedirDato("Ubicación:");
    if (ubicacion === null || ubicacion === "") return;

    const ejemplares = pedirDato("Ejemplares (número o texto):");
    if (ejemplares === null || ejemplares === "") return;

    const flor = pedirDato("Flor:");
    if (flor === null || flor === "") return;

    crearFila(nombre, ubicacion, ejemplares, flor);
  });

  btnBorrar.addEventListener("click", () => {
    const filas = tbody.getElementsByTagName("tr");
    if (filas.length === 0) return;
    tbody.removeChild(filas[filas.length - 1]);
  });

  btnContar.addEventListener("click", () => {
    const n = contarFilasSinContador();
    alert(`Número de filas en la tabla: ${n}`);
  });
});
