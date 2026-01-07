const mostrarTabla = (event) => {
  event.preventDefault();
  const numero = Number(document.getElementById('numero').value);

  if (numero >= 0 && numero <= 10) {
    let tabla = document.getElementById('tabla');
    let tablaDivision = `<h2>Tabla de dividir del número ${numero}</h2>`;
    tablaDivision += '<ul>';

    for (let i = 1; i <= 10; i++) { // Empieza en 1 para evitar división por 0
      tablaDivision += `<li>${numero} ÷ ${i} = ${(numero / i).toFixed(2)}</li>`;
    }

    tablaDivision += '</ul>';
    tabla.innerHTML = tablaDivision;

  } else {
    alert('El número introducido debe estar entre 0 y 10 (ambos inclusive)');
    document.getElementById("numero").value = '';
  }
}
