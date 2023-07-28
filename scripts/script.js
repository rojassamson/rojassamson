const templateHeader = document.createElement("div");
templateHeader.setAttribute("class", "contenedorHeader")
templateHeader.innerHTML = `
<nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#"><h1>Ignacio Rojas</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ajusteHeader" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Sobre mi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mi CV</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mis Proyectos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`

const templateFooter = document.createElement("div");
templateFooter.innerHTML = `
<div class="container">
  <div class="row">
      <p class="text-center col-12">Ignacio Rojas Samson - Desarrollador Web</p>
  </div>
  <div class="row">
      <div class="d-flex justify-content-around padding-footer">
          <div>
              <a href="https://wa.me/56992953691/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
              </a>
          </div>
          <div>
              <a href="https://instagram.com/rojassamson/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
                </svg>
              </a>
              
          </div>
          <div>
              <a href="https://youtube.com/@ignaciorojas4433" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                <path d="M10 9l5 3l-5 3z" />
                </svg>
              </a>

          </div>
      </div>

  </div>
</div>

`
const contenidoHeader = document.querySelector(".contenidoHeader");
contenidoHeader.appendChild(templateHeader);

const contenidoFooter = document.querySelector(".contenidoFooter");
contenidoFooter.appendChild(templateFooter);

const navegacionIndex = document.querySelector(".paginaIndex");
const navegacionPages = document.querySelector(".paginaPages");

try {
  navegacionIndex.querySelectorAll("a").forEach((link, index) => {
  if (index == 0) {
    link.setAttribute("href", "./index.html");
  } else if (index == 1) {
    link.setAttribute("href", "./pages/sobre_mi.html");
  } else if (index == 2) {
    link.setAttribute("href", "./pages/mi_cv.html");
  } else if (index == 3) {
    link.setAttribute("href", "./pages/mis_proyectos.html");
  }
});
} catch {
  navegacionPages.querySelectorAll("a").forEach((link, index) => {
  if (index == 0) {
    link.setAttribute("href", "../index.html");
  } else if (index == 1) {
    link.setAttribute("href", "./sobre_mi.html");
  } else if (index == 2) {
    link.setAttribute("href", "./mi_cv.html");
  } else if (index == 3) {
    link.setAttribute("href", "./mis_proyectos.html");
  }
});
}

const velocidadEscritura = 100;
const velocidadBorrado = 30;
const tiempoEsperaEscritura = 3000;
const tiempoEsperaBorrado = 1500;

function escribirTexto(textoAEscribir, textoHTML, i = 0, callback) {
  if (i < textoAEscribir.length) {
    textoHTML.innerHTML += textoAEscribir.charAt(i);
    i++;
    setTimeout(() => escribirTexto(textoAEscribir, textoHTML, i, callback), velocidadEscritura);
  } else {
    setTimeout(callback, tiempoEsperaEscritura);
  }
}

function borrarTexto(textoHTML, callback) {
  var i = textoHTML.innerHTML.length
  if (i > 0) {
    textoHTML.innerHTML = textoHTML.innerHTML.slice(0, i - 1);
    i--;
    setTimeout(() => borrarTexto(textoHTML, callback), velocidadBorrado);
  } else {
    setTimeout(callback(), tiempoEsperaEscritura); // Llamar al callback al finalizar el borrado
  }
}

function loopEfecto(textoAEscribir, textoHTML) {
  escribirTexto(textoAEscribir, textoHTML, 0, () => {
    borrarTexto(textoHTML, () => {
      setTimeout(() => {
        loopEfecto(textoAEscribir, textoHTML)
      }, tiempoEsperaBorrado);
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  
  const textoAEscribir = document.querySelector("#textoHeadingHeader").cloneNode(true).textContent;
  const textoHTML = document.querySelector("#textoHeadingHeader");
  document.querySelector("#textoHeadingHeader").innerHTML = "";
  loopEfecto(textoAEscribir, textoHTML);


});







