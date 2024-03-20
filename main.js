import './style.css'

const main = document.querySelector("main");

const pintarInicio = () => {
  main.innerHTML = `
  <img src="/public/imagenes/Fotos Book/inicio1.png" class="inicio1" alt="Imagen Jesus con cara dorado">
  `
  }

const pintarBiografía = () => {
main.innerHTML = `
<h2>BIOGRAFÍA</h2>
<img id="fotobio" src="./public/imagenes/Fotos Trabajos/flamenco.jpg" alt="Foto de flamenco">

<p class="textobio">Sevilla, 1985. Vive en Madrid.
Nació sordo y su idioma es la lengua de signos española, es hermana de Belén Fdez. Mena, Futbolista La selección de fútbol sala de España.
Se inició en la actuación con cortometrajes dirigidos a personas sordas y algunos modelo y en 2009 participó en la Escuela Doble Erre , dirigida por la directora Raquel Revuelta.
En 2017 participó en el programa de televisión Antena 3 “De hoy en un año”, que ha presentado por Pedro García Aguado.
En 2019 participó en el programa de televisión Canal Sur Andalucía “Gente Maravilloso”, que ha presentado por Toñi Moreno.
En 2019 ha participó en el documental de Cortometraje “Traslasierra”, dirigida por Raquel Kurpershoek (ha recibido primer premio: Wofest, Huelva en 2020).
En 2022, También ha participado figurantes en las series de televisión de Netflix (San Francisco de Asis, La zona, Atomic Monkeys, Contigo no, bicho,…)
Ha participado en algunas publicidades y obras de teatro.

Diploma en Interpretación en el Central de Cine de Madrid, tambien en el teatral interpretacion de Azarte de Madrid.

Tambien ha trabajado de doblaje de dibujos animados en Lengua de Signos.
</p>
`
}
const contrasteBTN = document.querySelector ("#contraste");
contrasteBTN.addEventListener ("click",() => {document.body.classList.toggle("dark");});

const pintarFotosbook = () => {
  main.innerHTML = `
  <h2>FOTOS BOOK</h2>
  <img src="/public/imagenes/Fotos Book/mifoto.jpeg" class="jesus1" alt="Imagen Jesus con camiseta negro">
  <img src="/public/imagenes/Fotos Book/foto2.jpeg" class="jesus2" alt="imagen Jesus con camiseta negro 2">
  <img src="/public/imagenes/Fotos Book/foto3.png" class="jesus3"alt="imagen Jesus con dorado">
  <img src="/public/imagenes/Fotos Book/foto4.jpg" class="jesus4" alt="imagen Jesus traje negro">
  <img src="/public/imagenes/Fotos Book/foto6.png" class="jesus6" alt="imagen Jesus con tatuaje">
  <img src="/public/imagenes/Fotos Book/foto7.jpeg" class="jesus7" alt="imagen Jesus con camiseta rayas">
  <img src="/public/imagenes/Fotos Book/jesus9.JPG" class="jesus9" alt="Imagen Jesus con barba 70años">
  `
}

const pintarVideobook = () => {
  main.innerHTML = `
<section>
<h2>VIDEOBOOK</h2>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Io-d5T_CN68?si=XmVyKQuysPqcukNh" class="jesusvidebook" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"
</section>
`
}

const pintarCurrículum = () => {
  main.innerHTML = `
  <h2>CURRÍCULUM</h2>
  <img id="fotocv" src="./public/imagenes/Fotos Book/foto8.png" alt="Foto de camiseta negro">
  <p class="textocv">EXPERIENCIA PROFESIONAL

CINE
3/2024 - Madrid. Ha participado en la grabación de video de "SIEMENS".
2/2024 - Madrid. Figurante especial en la serie TV "ATOMIC MONKEYS", Netflix.
2/2024 - Madrid. Ha participado en la grabación de video "Por Talento Digital", Fundación ONCE por Servimedio, S.A.
2/2024 - Madrid. Actor en youtube de TEATRO ACCESIBLE impulsado por Aptent Soluciones, S.L.
10/2022 - Madrid. Actor en el anuncio TV de Fundación ONCE, Be Sweet Film, S.L.
8/2021 - Sevilla. actor en youtube sobre Inlusive Emergency, "Rescate en Ascensor Sordo" dirigido por Arsenio Muñoz.
10/2019 - Sevilla. Actor en el cortometraje " Un día maravilloso", dirigido por Verus Rodriguez de "Idendeaf".
3/2019 - Huelva. Actor en Documental del Cine "Traslasierra", dirigida por Raquel Juspershoek.
2/2019 - Sevilla. Figurante en la serie TV "San Francisco de Asis".
2/2019 - Madrid. Auxilio de Producción para pelicula "yo, mi mujer y mi mujer muerta", del director Santi Amodeo.
1/2019 - Madrid. Figurante en la pelicula "Contigo no, bicho", dirigido por Alvaro Alonso y Miguel Angel.
10/2017 - Madrid. Figurante en la serie TV "La Zona", Movistar+.
2015 - Sevilla. El progatonista en el anuncio del servicio "010 Linea Sevilla", Ayuntamiento de Sevilla.


TELEVISIÓN
4/2017 - Sevilla. Actor en el programa "Gente Maravillosa", el espacio de Canal Sur TV que presenta Toñi Moreno en la noche de los jueves.
3/2017 - Madrid. El protagonista de "De hoy en un año", Antena 3 que ha presentado por Pedro García Aguado en los miercoles y jueves.


“CUÉNTAME CÓMO PASÓ” (Ganga Producciones) | TVE | T22
“AMAR ES PARA SIEMPRE” (Diagonal TV) | Antena 3 | T10

FORMACIÓN
-Curso de Iniciación a la interpretación teatral. 2021/2022 
-Escuela en Especialista de Cine “NOIDENTITY”,(Stuntman) 2019.
-Curso de Cortometraje, Sevilla 2019
-Curso de Artes Marciales. 2018
-Curso de Fotografia, Sevilla 2017
-Clases de ON Dance Studios Sevilla. 2015
-Curso de Inglés, Madrid 2014
-Escuela de Moda “Doble Erre” Raquel Revuelta, Sevilla 2009

IDIOMAS
LENGUA DE SIGNOS ESPAÑOLA: Nativa.
ESPAÑOL: Lengua materna.
LENGUA DE SIGNOS CATALÁN: Intermedio.
SISTEMA DE SIGNOS INTERNACIONAL: Intermedio.
INGLÉS: Bilingüe.
</p>
  `
}

const pintarFotostrabajos = () => {
  main.innerHTML = `
  <h2>FOTOS TRABAJOS</h2>
  <img src="/public/imagenes/Fotos Trabajos/model MMDW.JPG" class="modelMMDW" alt="Imagen Jesus con torero">
  <img src="/public/imagenes/Fotos Trabajos/Serie La Zona.JPG" class="lazona" alt="Imagen Jesus con bombero">
  <img src="/public/imagenes/Fotos Trabajos/San francisco asis.jpeg" class="sanfrancisco1" alt="Imagen Jesus2">
  <img src="/public/imagenes/Fotos Trabajos/San francisco de asis2.jpeg" class="sanfrancisco1" alt="Imagen San Francisco de asis">
  <img src="/public/imagenes/Fotos Trabajos/Turquias.jpeg" class="turquia" alt="Imagen la ropa de Turquia">
  <img src="/public/imagenes/Fotos Trabajos/gaypower.JPG" class="gaypower" alt="Imagen en grabación">
  `
}

const pintarValorañadido = () => {
  main.innerHTML = `
  <section>
  <h2>VALOR AÑADIDO</h2>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/8TBLWL-cmlY?si=4IkLG16zRRYH2EV_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  <img src="/public/imagenes/Valor Añadido/Simof.png" class="jesussimof" alt="Imagen Jesus con traje y pantalon varquero">
  <img src="/public/imagenes/Valor Añadido/la pecca.jpeg" class="lapecca" alt="Imagen traje con collar de la pecca">
  <img src="/public/imagenes/Valor Añadido/RTVE RADIO.jpeg" class="rtveRadio" alt="Imagen con yo, Gala y ILSE">
  </section>
  `
}
const pintarNoticias = () => {
  main.innerHTML = `
  <h2>NOTICIAS</h2>
  <img src="/public/imagenes/Noticias/noticias XTD.png" class="xtd" alt="Imagen con Jesus y ILSE en XTD">
  `
}

const pintarContacto = () => {
  main.innerHTML = `
  <h2>CONTACTO</h2>
  <form action="form2">
  <label for="nombreyapellidos">Nombre y apellidos*
      <input type="text" id="nombreyapellidos">
      </label>
    <label for="correoelectonico">Correo electrónico*
      <input type="text" id="correoelectronico">
    </label>
     <label for="asunto">Asunto*
      <input type="text" id="asunto">
    </label>
    <label for="mensaje">Mensaje*
      <input type="text" id="mensaje">
    </label>
    </form>
    <p>Los campos marcados con asterisco (*) son obligatorios
    </p>
    <button id="botonEnviar">Enviar</button>
  `
}

pintarInicio()

const biografíalink = document.querySelector ("#biografíalink");
const fotosbooklink = document.querySelector ("#fotosbooklink");
const videobooklink = document.querySelector ("#videobooklink");
const curriculumlink = document.querySelector ("#curriculumlink");
const fotostrabajoslink = document.querySelector ("#fotostrabajoslink");
const valorañadidolink = document.querySelector ("#valorañadidolink");
const noticiaslink = document.querySelector ("#noticiaslink");
const contactolink = document.querySelector ("#contactolink");

biografíalink.addEventListener("click", () => {pintarBiografía()
})

fotosbooklink.addEventListener("click", () => {pintarFotosbook()})

videobooklink.addEventListener("click", () => {pintarVideobook()})

curriculumlink.addEventListener("click", () => {pintarCurrículum()})

fotostrabajoslink.addEventListener("click", () => {pintarFotostrabajos()})

valorañadidolink.addEventListener("click", () => {pintarValorañadido()})

noticiaslink.addEventListener("click", () => {pintarNoticias()})

contactolink.addEventListener("click", () => {pintarContacto()})


