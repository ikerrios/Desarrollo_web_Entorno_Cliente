document.addEventListener("DOMContentLoaded", () => {
  const zona = document.getElementById("zonaPersonajes");

  const topBar = document.createElement("div");
  topBar.style.marginBottom = "12px";

  const btnGenerar = document.createElement("button");
  btnGenerar.textContent = "Generar personaje";

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar personaje";
  btnBorrar.style.marginLeft = "8px";

  topBar.appendChild(btnGenerar);
  topBar.appendChild(btnBorrar);
  document.body.insertBefore(topBar, document.body.firstChild);

  const bottomBar = document.createElement("div");
  bottomBar.style.marginTop = "16px";

  const btnNoSanji = document.createElement("button");
  btnNoSanji.textContent = "No Sanji";

  const btnNoZoro = document.createElement("button");
  btnNoZoro.textContent = "No Zoro";
  btnNoZoro.style.marginLeft = "8px";

  const btnNoNami = document.createElement("button");
  btnNoNami.textContent = "No Nami";
  btnNoNami.style.marginLeft = "8px";

  const btnNoLuffy = document.createElement("button");
  btnNoLuffy.textContent = "No Luffy";
  btnNoLuffy.style.marginLeft = "8px";

  bottomBar.appendChild(btnNoSanji);
  bottomBar.appendChild(btnNoZoro);
  bottomBar.appendChild(btnNoNami);
  bottomBar.appendChild(btnNoLuffy);

  document.body.appendChild(bottomBar);

  function crearImg(personaje, ruta) {
    const img = document.createElement("img");
    img.className = "imgPersonaje";
    img.src = ruta;
    img.alt = personaje;
    img.dataset.personaje = personaje; 
    zona.appendChild(img);
  }

  function contarImgsDe(personaje) {
    let count = 0;
    for (const nodo of zona.childNodes) {
      if (nodo.nodeType === 1 && nodo.tagName === "IMG") {
        if (nodo.dataset.personaje === personaje) count++;
      }
    }
    return count;
  }

  btnGenerar.addEventListener("click", () => {
    const opcion = prompt(
      "Elija el nombre del personaje: 1. Sanji, 2. Zoro, 3. Nami, 4. Luffy."
    );

    if (opcion === null) return;

    switch (opcion.trim()) {
      case "1":
        crearImg("sanji", "img_onepeace/sanji.jpg");
        break;
      case "2":
        crearImg("zoro", "img_onepeace/zoro.jpg");
        break;
      case "3":
        crearImg("nami", "img_onepeace/nami.jpg");
        break;
      case "4":
        crearImg("luffy", "img_onepeace/luffy.jpg");
        break;
      default:
        alert("Opción no válida. Elige 1, 2, 3 o 4.");
        break;
    }
  });

  btnBorrar.addEventListener("click", () => {
    const imgs = zona.getElementsByTagName("img");
    if (imgs.length === 0) return;
    zona.removeChild(imgs[imgs.length - 1]);
  });

  btnNoSanji.addEventListener("click", () => {
    alert(`Número de imágenes de Sanji: ${contarImgsDe("sanji")}`);
  });

  btnNoZoro.addEventListener("click", () => {
    alert(`Número de imágenes de Zoro: ${contarImgsDe("zoro")}`);
  });

  btnNoNami.addEventListener("click", () => {
    alert(`Número de imágenes de Nami: ${contarImgsDe("nami")}`);
  });

  btnNoLuffy.addEventListener("click", () => {
    alert(`Número de imágenes de Luffy: ${contarImgsDe("luffy")}`);
  });
});
