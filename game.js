/* ============================================================
   LÓGICA DEL JUEGO — Cirugía Quest
   ============================================================ */

// --- Estado ---
let misionActual = null;   // "ovh" | "cesarea"
let indiceRonda = 0;       // ronda actual
let siguienteEsperado = 0; // qué posición toca acertar (0-indexed)
let puntos = 0;
let erroresRonda = 0;

// --- Referencias a pantallas ---
const pantallas = {
  inicio: document.getElementById("pantalla-inicio"),
  juego:  document.getElementById("pantalla-juego"),
  fin:    document.getElementById("pantalla-fin"),
};

function mostrarPantalla(nombre){
  Object.values(pantallas).forEach(p => p.classList.remove("activa"));
  pantallas[nombre].classList.add("activa");
  window.scrollTo(0,0);
}

// --- Utilidad: barajar array (Fisher-Yates) ---
function barajar(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

// ===== INICIO: botones de misión =====
document.querySelectorAll(".btn-mision[data-mision]").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    iniciarMision(btn.dataset.mision);
  });
});

function iniciarMision(clave){
  misionActual = clave;
  indiceRonda = 0;
  puntos = 0;
  document.getElementById("marcador").textContent = puntos;
  document.getElementById("nombre-mision").textContent = MISIONES[clave].nombre;
  mostrarPantalla("juego");
  cargarRonda();
}

// ===== Cargar una ronda =====
function cargarRonda(){
  const mision = MISIONES[misionActual];
  const ronda = mision.rondas[indiceRonda];
  siguienteEsperado = 0;
  erroresRonda = 0;

  document.getElementById("nombre-ronda").textContent =
    "Ronda " + (indiceRonda+1) + " de " + mision.rondas.length;
  document.getElementById("titulo-ronda").textContent = ronda.titulo;
  document.getElementById("instruccion-ronda").textContent = ronda.instruccion;
  document.getElementById("lista-ordenada").innerHTML = "";
  document.getElementById("mensaje").className = "mensaje";
  document.getElementById("mensaje").innerHTML = "";

  actualizarProgreso();

  // Crear botones de pasos (barajados) guardando su posición correcta
  const banco = document.getElementById("banco-pasos");
  banco.innerHTML = "";
  const pasosConIndice = ronda.pasos.map((p,i)=>({...p, correcto:i}));
  barajar(pasosConIndice).forEach(p=>{
    const b = document.createElement("button");
    b.className = "paso-btn";
    b.textContent = p.texto;
    b.dataset.correcto = p.correcto;
    b.addEventListener("click", ()=> intentarPaso(b, p));
    banco.appendChild(b);
  });
}

// ===== Intento de colocar un paso =====
function intentarPaso(boton, paso){
  const ronda = MISIONES[misionActual].rondas[indiceRonda];
  const msg = document.getElementById("mensaje");

  if(Number(boton.dataset.correcto) === siguienteEsperado){
    // ¡Acierto!
    boton.classList.add("usado");
    agregarALista(siguienteEsperado+1, paso.texto);
    siguienteEsperado++;
    puntos += 10;
    document.getElementById("marcador").textContent = puntos;

    if(siguienteEsperado === ronda.pasos.length){
      rondaCompletada();
    }else{
      msg.className = "mensaje ok";
      msg.innerHTML = "✅ ¡Correcto! Sigue con el siguiente paso.";
    }
  }else{
    // Error: mostrar la pista del paso que SÍ tocaba
    erroresRonda++;
    puntos = Math.max(0, puntos - 3);
    document.getElementById("marcador").textContent = puntos;
    boton.classList.add("sacudir");
    setTimeout(()=>boton.classList.remove("sacudir"), 400);

    const pasoCorrecto = ronda.pasos[siguienteEsperado];
    msg.className = "mensaje error";
    msg.innerHTML = "❌ Ese no es el siguiente paso.<br>💡 <strong>Pista:</strong> " + pasoCorrecto.pista;
  }
}

function agregarALista(numero, texto){
  const li = document.createElement("li");
  li.innerHTML = '<span class="num">'+numero+'</span><span>'+texto+'</span>';
  document.getElementById("lista-ordenada").appendChild(li);
}

// ===== Ronda completada =====
function rondaCompletada(){
  const mision = MISIONES[misionActual];
  const msg = document.getElementById("mensaje");
  const esUltima = indiceRonda === mision.rondas.length - 1;

  let bonus = erroresRonda === 0 ? 20 : 0;
  if(bonus){
    puntos += bonus;
    document.getElementById("marcador").textContent = puntos;
  }

  const ronda = mision.rondas[indiceRonda];

  msg.className = "mensaje ok";
  msg.innerHTML = "🎉 <strong>¡Ronda completada en el orden correcto!</strong>" +
    (bonus ? " +20 de bonus por no fallar 🌟" : "");

  // Mostrar el DATO CURIOSO / cosa clave de esta ronda
  if(ronda.dato){
    const caja = document.createElement("div");
    caja.className = "caja-dato";
    caja.innerHTML = "<span class='etiqueta-dato'>💡 No dejes pasar esto</span>" + ronda.dato;
    msg.appendChild(caja);
  }

  const btn = document.createElement("button");
  btn.className = "btn-siguiente";
  btn.textContent = esUltima ? "🏁 Terminar cirugía" : "➡️ Siguiente ronda";
  btn.addEventListener("click", ()=>{
    if(esUltima){
      terminarMision();
    }else{
      indiceRonda++;
      cargarRonda();
    }
  });
  msg.appendChild(document.createElement("br"));
  msg.appendChild(btn);

  actualizarProgreso(true);
}

function actualizarProgreso(completa){
  const mision = MISIONES[misionActual];
  const total = mision.rondas.length;
  const hechas = completa ? indiceRonda+1 : indiceRonda;
  const pct = (hechas/total)*100;
  document.getElementById("progreso-relleno").style.width = pct + "%";
}

// ===== Fin de la misión =====
function terminarMision(){
  mostrarPantalla("fin");
  const mision = MISIONES[misionActual];
  const totalPasos = mision.rondas.reduce((s,r)=>s+r.pasos.length,0);

  document.getElementById("fin-titulo").textContent = "🏅 ¡" + mision.nombre.replace(/^[^\s]+\s/,'') + " completada!";
  document.getElementById("fin-texto").textContent = "Memorizaste la secuencia completa paso a paso.";

  let medalla = "🥉 Residente";
  if(puntos >= totalPasos*10 + 20) medalla = "🥈 Cirujano";
  if(puntos >= totalPasos*10 + mision.rondas.length*20) medalla = "🥇 Cirujano experto";

  document.getElementById("fin-resumen").innerHTML =
    "Puntaje final: <strong>⭐ " + puntos + "</strong><br>" +
    "Pasos dominados: <strong>" + totalPasos + "</strong><br>" +
    "Rango obtenido: <strong>" + medalla + "</strong>" +
    (misionActual === "cesarea"
      ? "<br><br>🐶 Recuerda el gran final: ante <strong>apnea</strong> del cachorro → <strong>Doxapram</strong> (estimulante respiratorio), 1–2 gotas sublinguales o 0,05 ml SC, repetible cada 15–20 min."
      : "");
}

// ===== Navegación =====
document.getElementById("btn-volver").addEventListener("click", ()=> mostrarPantalla("inicio"));
document.getElementById("btn-menu-fin").addEventListener("click", ()=> mostrarPantalla("inicio"));
document.getElementById("btn-repetir").addEventListener("click", ()=> iniciarMision(misionActual));
