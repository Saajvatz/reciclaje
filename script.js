// script.js

const itemsData = [
  // ORGÁNICOS
  { nombre: "Cáscara de plátano", tipo: "organico", imagen: "https://st4.depositphotos.com/24038622/27054/v/450/depositphotos_270548408-stock-illustration-banana-peel-cartoon-illustration-banana.jpg" },
  { nombre: "Cáscara de huevo", tipo: "organico", imagen: "https://w7.pngwing.com/pngs/866/150/png-transparent-eggshell-graphy-123rf-broken-photography-eggshell-123rf-thumbnail.png" },
  { nombre: "Bolsita de té", tipo: "organico", imagen: "https://www.shutterstock.com/image-vector/tagged-teabags-string-colored-icon-600nw-2501492845.jpg" },
  { nombre: "Hoja seca", tipo: "organico", imagen: "https://i.pinimg.com/474x/7b/31/b6/7b31b6f72984ed8dc458d64ffed7c2f7.jpg" },
  { nombre: "Pan duro", tipo: "organico", imagen: "https://thumbs.dreamstime.com/b/estilo-de-caricatura-del-icono-pan-duro-ícono-vector-para-el-diseño-web-aislado-en-fondo-blanco-206598880.jpg" },
  { nombre: "Hueso de pollo", tipo: "organico", imagen: "https://static.vecteezy.com/system/resources/previews/014/183/740/non_2x/chicken-garbage-icon-cartoon-style-vector.jpg" },
  { nombre: "Cáscara de naranja", tipo: "organico", imagen: "https://img.freepik.com/vector-premium/rodajas-mandarina-dibujos-animados-vector-cascara_574806-2172.jpg" },

  // PAPEL Y CARTÓN
  { nombre: "Papel periódico", tipo: "papel", imagen: "https://us.123rf.com/450wm/alexpokusay/alexpokusay1712/alexpokusay171200186/92367589-ilustración-retro-del-arte-pop-del-periódico.jpg?ver=6" },
  { nombre: "Cartón de caja", tipo: "papel", imagen: "https://images.vexels.com/media/users/3/264723/isolated/preview/dd0ea3896edd75f54e62342f8e7e7d85-caja-de-carton-de-dibujos-animados.png" },
  { nombre: "Libreta vieja", tipo: "papel", imagen: "https://www.shutterstock.com/image-vector/cartoon-address-book-260nw-118942759.jpg" },
  { nombre: "Revistas", tipo: "papel", imagen: "https://e7.pngegg.com/pngimages/947/391/png-clipart-magazines-newspapers-graphics-politics-comics-text.png" },
  { nombre: "Sobre de carta", tipo: "papel", imagen: "https://static.vecteezy.com/system/resources/previews/006/764/830/non_2x/cartoon-doodle-linear-mail-letter-isolated-on-white-background-free-vector.jpg" },

  // METALES
  { nombre: "Lata de atún", tipo: "metal", imagen: "https://www.shutterstock.com/image-vector/freehand-textured-cartoon-can-tuna-260nw-425770414.jpg" },
  { nombre: "Cuchara metálica", tipo: "metal", imagen: "https://img.freepik.com/vector-premium/cucharada-dibujos-animados-cuchara-te-metal-o-plata-cucharadita-acero-inoxidable-ilustracion-vectorial-aislado-sobre-fondo-blanco_81894-5270.jpg" },
  { nombre: "Clavo", tipo: "metal", imagen: "https://static.vecteezy.com/system/resources/previews/040/136/962/non_2x/cartoon-illustration-of-nail-free-vector.jpg" },
  { nombre: "Lata oxidada", tipo: "metal", imagen: "https://www.shutterstock.com/image-vector/old-rusty-tin-can-vector-260nw-2037081530.jpg" },

  // RECICLABLES
  { nombre: "Botella de plástico", tipo: "reciclable", imagen: "https://previews.123rf.com/images/ylivdesign/ylivdesign1711/ylivdesign171105954/90492735-plastic-bottle-icon-cartoon-style.jpg" },
  { nombre: "Envase de yogur", tipo: "reciclable", imagen: "https://www.shutterstock.com/image-vector/strawberry-yogurt-vector-illustration-childrens-260nw-2124065549.jpg" },
  { nombre: "Bolsa transparente", tipo: "reciclable", imagen: "https://previews.123rf.com/images/oceloti/oceloti2002/oceloti200200002/140226755-one-empty-cartoon-plastic-bag-with-handles-isolated-illustration-with-shadow-thin-transparent.jpg" },
  { nombre: "Contenedor de detergente", tipo: "reciclable", imagen: "https://static.vecteezy.com/system/resources/previews/029/310/766/non_2x/cartoon-illustration-detergent-icon-in-doodle-style-vector.jpg" },
  { nombre: "Vaso desechable", tipo: "reciclable", imagen: "https://static.vecteezy.com/system/resources/previews/014/183/681/non_2x/plastic-used-cup-icon-cartoon-style-vector.jpg" },

  // INORGÁNICOS
  { nombre: "Esponja usada", tipo: "inorganico", imagen: "https://www.shutterstock.com/image-vector/yellow-sponge-soapy-foam-isolated-260nw-2622478845.jpg" },
  { nombre: "CD viejo", tipo: "inorganico", imagen: "https://img.freepik.com/premium-vector/cartoon-vector-illustration-cd-dvd-disc_290315-8567.jpg" },

  // ELECTRÓNICOS
  { nombre: "Celular viejo", tipo: "electronico", imagen: "https://st3.depositphotos.com/16138592/18602/v/450/depositphotos_186020152-stock-illustration-old-cell-phone-telecommunication-technology.jpg" },
  { nombre: "Computadora descompuesta", tipo: "electronico", imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTCvKbbfEJnMp25sp-yW_bvgy10fLC_S4NRfyIK2rtJ0B9VGDZmjC5J_u-vhx3HRyobjh2_VRwVOA552Dhh-D6oEDGxgpZZH6J8-OIwJ6i-zfk0B8TX75NpTjfXq5icwXD5vHoDowNersD/s1600/pcfallo1.jpg" },
  { nombre: "Microondas", tipo: "electronico", imagen: "https://www.shutterstock.com/image-vector/modern-kitchen-appliances-microwave-isolated-260nw-2288049389.jpg" }
];

let puntos = 0;
let tiempoRestante = 120; // 2 minutos
let intervalo;

const contenedores = document.querySelectorAll(".contenedor");
const resultado = document.getElementById("resultado");
const areaItem = document.getElementById("area-item");
const puntosDisplay = document.getElementById("puntos");
const tiempoDisplay = document.getElementById("tiempo");
const mensajeFinal = document.getElementById("mensaje-final");

function actualizarTiempo() {
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  tiempoDisplay.textContent = `Tiempo: ${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  if (tiempoRestante <= 0) {
    clearInterval(intervalo);
    finalizarJuego();
  }
  tiempoRestante--;
}

function mostrarNuevoItem() {
  areaItem.innerHTML = "";
  const item = itemsData[Math.floor(Math.random() * itemsData.length)];
  const div = document.createElement("div");
  div.className = "item";
  div.draggable = true;
  div.dataset.type = item.tipo;

  const img = document.createElement("img");
  img.src = item.imagen;  // <-- Aquí corregido para asignar URL completa directamente
  img.alt = item.nombre;

  const nombre = document.createElement("span");
  nombre.textContent = item.nombre;

  div.appendChild(img);
  div.appendChild(nombre);

  div.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("tipo", item.tipo);
  });

  areaItem.appendChild(div);
}

contenedores.forEach(contenedor => {
  contenedor.addEventListener("dragover", (e) => e.preventDefault());

  contenedor.addEventListener("drop", (e) => {
    e.preventDefault();
    const tipo = e.dataTransfer.getData("tipo");
    const aceptado = contenedor.dataset.accept;

    if (tipo === aceptado) {
      contenedor.classList.add("correcto");
      puntos++;
      puntosDisplay.textContent = `Puntos: ${puntos}`;
      resultado.textContent = "✅ ¡Correcto!";
    } else {
      contenedor.classList.add("incorrecto");
      resultado.textContent = "❌ Incorrecto";
    }

    setTimeout(() => {
      contenedor.classList.remove("correcto", "incorrecto");
      resultado.textContent = "";
      mostrarNuevoItem();
    }, 800);
  });
});

function iniciarJuego() {
  puntos = 0;
  puntosDisplay.textContent = "Puntos: 0";
  mensajeFinal.textContent = "";
  mostrarNuevoItem();
  intervalo = setInterval(actualizarTiempo, 1000);
}

function finalizarJuego() {
  areaItem.innerHTML = "";
  if (puntos >= 35) {
    mensajeFinal.textContent = "🎉 ¡Felicidades! Has clasificado correctamente y ganaste el juego. 🌟";
  } else {
    mensajeFinal.textContent = "😓 No llegaste a los 35 puntos, pero no te rindas. ¡Puedes mejorar!";
  }
}

iniciarJuego();
