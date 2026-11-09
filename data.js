/* ============================================================
   DATOS DEL JUEGO — Cirugía Quest
   Todos los pasos y datos están tomados fielmente de las
   diapositivas: OVARIECTOMÍA, OVARIOHISTERECTOMÍA Y CESÁREA
   EN PEQUEÑOS ANIMALES.

   Estructura:
   - Cada misión tiene "rondas".
   - Cada ronda tiene "pasos" (el orden del array ES el correcto).
   - Cada paso tiene una "pista" (por qué va ahí).
   - Cada ronda puede tener "dato": un DATO CURIOSO / clave que
     aparece al completarla, para que no se te pase nada.
   ============================================================ */

const MISIONES = {

  /* =======================  OVH EN PERRA  ======================= */
  ovh: {
    nombre: "🐕 OVH en Perra",
    rondas: [

      {
        titulo: "Ronda 1 — Preparación de la paciente",
        instruccion: "Antes de tocar el bisturí. Ordena los pasos previos.",
        pasos: [
          { texto: "Rasurar toda la superficie ventral del abdomen",
            pista: "El rasurado debe abarcar TODA la superficie ventral del abdomen." },
          { texto: "Vaciar completamente la vejiga",
            pista: "PASO 1: una vejiga llena estorba el campo y se puede lesionar." },
          { texto: "Desinfectar con alcohol y yodo, con bolita de algodón, en espiral de adentro hacia afuera",
            pista: "PASO 2: la asepsia va SIEMPRE del centro hacia afuera, nunca al revés." },
          { texto: "Colocarse guantes estériles",
            pista: "PASO 3: ya desinfectada la zona, el cirujano se pone guantes estériles." },
          { texto: "Ubicar el punto donde se va a realizar la incisión",
            pista: "PASO 4: se localiza el sitio exacto de la incisión." }
        ],
        dato: "📍 Punto de incisión según especie:<br>• <strong>Perra adulta</strong>: tercio craneal del área postumbilical (en el ombligo o 1–2 cm caudal). Se usan meñique e índice de la mano izquierda + índice de la derecha para dividir en 2 la zona ombligo–pubis; se incide en el centro entre índice y meñique.<br>• <strong>Perra de pecho profundo u obesa</strong>: a veces hay que extender la incisión hacia craneal (preumbilical) para romper el ligamento suspensorio con seguridad.<br>• <strong>Gata y cachorra (< 5 meses)</strong>: el punto se centra justo a la mitad entre ombligo y pubis."
      },

      {
        titulo: "Ronda 2 — Estrategia anestésica",
        instruccion: "Dormir a la paciente con seguridad. Ordena la secuencia farmacológica.",
        pasos: [
          { texto: "Premedicación + analgesia + antibiótico + omeprazol",
            pista: "La premedicación va ANTES de inducir: tranquiliza, da analgesia y protege el estómago." },
          { texto: "Inducción con propofol 4–6 mg/kg (ketamina 5 mg/kg opcional)",
            pista: "La inducción es la que 'duerme' a la paciente, después de premedicar." },
          { texto: "Mantenimiento con isofluorano o infusión de propofol (0,4 mg/kg/min), con oxígeno",
            pista: "El mantenimiento la conserva dormida durante toda la cirugía." }
        ],
        dato: "💊 Menú de fármacos de la diapo:<br>• <strong>Premedicación</strong> (elegir): acepromacina, xilacina, diacepam o midazolam.<br>• <strong>Analgesia</strong>: tramadol, butorfanol o fentanilo + meloxicam, ketoprofeno o flunixim.<br>• <strong>Antibiótico</strong>: cefalexina, ampicilina+sulbactam, ceftriaxona o ceftiofur.<br>• <strong>Protector gástrico</strong>: omeprazol.<br>⚠️ OJO: esto es para OVH. En CESÁREA es distinto (sin premedicación)."
      },

      {
        titulo: "Ronda 3 — Laparotomía (abrir el abdomen)",
        instruccion: "Entrar a la cavidad abdominal capa por capa.",
        pasos: [
          { texto: "Incisión en la línea media, caudal a la cicatriz umbilical",
            pista: "Se abre en la línea media, justo por detrás (caudal) del ombligo." },
          { texto: "Incidir piel y tejido subcutáneo",
            pista: "Primero las capas superficiales: piel y subcutáneo." },
          { texto: "Identificar la línea alba",
            pista: "La línea alba es la 'costura' blanca central; hay que identificarla antes de entrar." },
          { texto: "Elevar y realizar incisopunción",
            pista: "Se eleva la línea alba y se perfora con cuidado para no dañar vísceras." },
          { texto: "Ampliar la incisión con tijera de Mayo",
            pista: "Ya dentro, se agranda la abertura con la tijera de Mayo." }
        ],
        dato: "🔪 La <strong>incisopunción</strong> (elevar la línea alba y perforarla) es la maniobra de seguridad: al tirar hacia arriba de la pared se crea espacio y se evita pinchar intestino o vejiga al entrar."
      },

      {
        titulo: "Ronda 4 — Extraer el ovario izquierdo",
        instruccion: "Localizar, exponer y ligar el primer ovario.",
        pasos: [
          { texto: "Reflejar cranealmente el omento mayor y el bazo",
            pista: "Se apartan hacia craneal el omento y el bazo para ver el fondo del abdomen." },
          { texto: "Deslizar el dedo índice por la pared abdominal hacia el riñón izquierdo",
            pista: "El ovario izquierdo está cerca del riñón izquierdo: ahí se busca con el dedo." },
          { texto: "Identificar el ovario izquierdo y exponerlo",
            pista: "Una vez localizado, se exterioriza el ovario izquierdo." },
          { texto: "Seleccionar un punto NO vascularizado del ligamento ancho y perforarlo con el porta agujas",
            pista: "Se busca una ventana SIN vasos para no sangrar, y se perfora con el porta agujas." },
          { texto: "Pasar el cabo de la sutura por el agujero y ligar arteria y vena ováricas",
            pista: "Clave: el primer bucle NO debe recibir tensión mientras se hace el segundo." },
          { texto: "Seccionar el mesovario lentamente (palpando el ovario) y colocar pinza hemostática craneal al cuerno",
            pista: "Se corta despacio verificando que el ovario quede COMPLETO, sin dejar tejido." }
        ],
        dato: "🩸 Claves que NO puedes dejar pasar:<br>• El <strong>primer bucle de la ligadura no debe recibir tensión</strong> mientras haces el segundo (si no, se afloja y sangra).<br>• <strong>Palpa el ovario</strong> al colocar la sutura y al cortar: debes verificar que salga COMPLETO. Dejar un trocito causa 'ovario remanente'.<br>• El ovario izquierdo se busca hacia el <strong>riñón izquierdo</strong>; el derecho, hacia el polo caudal del <strong>riñón derecho</strong>."
      },

      {
        titulo: "Ronda 5 — Cuerpo uterino y cierre",
        instruccion: "Tras repetir con el ovario derecho: ligar el útero y cerrar la pared.",
        pasos: [
          { texto: "Seccionar el ligamento ancho y exponer cuerpo y cuello uterinos",
            pista: "Se libera el ligamento ancho para sacar el cuerpo del útero." },
          { texto: "Ligar las arterias y venas uterinas caudales",
            pista: "Antes de cortar el útero hay que controlar sus vasos caudales." },
          { texto: "Realizar la ligadura de transfixión",
            pista: "La transfixión 'ancla' la sutura al tejido para que no se resbale." },
          { texto: "Colocar un clamp proximal a la sutura y seccionar el tejido",
            pista: "El clamp sujeta por encima de la ligadura antes de cortar." },
          { texto: "Realizar patrón invaginante en el muñón",
            pista: "El muñón se invagina (se mete hacia adentro) para sellarlo." },
          { texto: "Síntesis de pared muscular → tejido subcutáneo → piel",
            pista: "El cierre es de adentro hacia afuera: músculo, subcutáneo y por último la piel." }
        ],
        dato: "🧵 La <strong>ligadura de transfixión</strong> atraviesa el tejido con la aguja antes de anudar, así la sutura queda anclada y no se resbala (vital en el muñón uterino, que es grueso y con presión)."
      },

      {
        titulo: "Ronda 6 — Complicaciones (¡examen seguro!)",
        instruccion: "Ordena qué hacer ante una hemorragia del muñón ovárico.",
        pasos: [
          { texto: "Conservar la calma",
            pista: "Lo primero SIEMPRE: mantener la calma, no tirar a ciegas." },
          { texto: "Ampliar la incisión",
            pista: "Para ver bien el origen del sangrado hay que agrandar el campo." },
          { texto: "Localizar la arteria ovárica (izquierda: reflejar colon descendente a la derecha / derecha: polo caudal del riñón derecho)",
            pista: "Hay que ubicar el vaso que sangra usando referencias anatómicas." },
          { texto: "Religar el vaso afectado",
            pista: "Una vez identificado el muñón que sangra, se vuelve a ligar." }
        ],
        dato: "⚠️ Complicaciones que debes conocer:<br>• <strong>Hemorragia de muñón ovárico</strong>: calma → ampliar → ubicar arteria (izq: reflejar colon descendente a la derecha; der: polo caudal del riñón derecho) → religar.<br>• <strong>Hemorragia de muñón caudal/ligamento ancho</strong>: ampliar, elevar la vejiga y ubicar el muñón cerca del cuello vesical, religar la arteria uterina caudal a la ligadura previa.<br>• <strong>Piómetra de muñón</strong>: requiere tejido ovárico funcional que produzca progesterona (o progestágenos).<br>• <strong>Ovario remanente</strong>: queda tejido ovárico activo por corte incompleto.<br>• <strong>Fístula cutánea / granuloma</strong>: reacción al material de sutura.<br>• <strong>Gossypiboma (textiloma/gasoma)</strong>: gasa olvidada dentro → se evita con DISCIPLINA y conteo."
      }

    ]
  },

  /* ===============  OVH EN GATA (abordaje lateral)  =============== */
  gata: {
    nombre: "🐈 OVH en Gata (flanco)",
    rondas: [

      {
        titulo: "Ronda 1 — Preparación y punto de incisión",
        instruccion: "La gata se prepara igual, pero OJO con dónde se incide.",
        pasos: [
          { texto: "Rasurar y desinfectar (igual que en la perra)",
            pista: "La preparación aséptica es la misma: rasurar y desinfectar en espiral." },
          { texto: "Colocarse guantes estériles",
            pista: "Guantes estériles antes de incidir." },
          { texto: "Ubicar el flanco IZQUIERDO como sitio de abordaje",
            pista: "En gata se usa el abordaje lateral por el flanco izquierdo." }
        ],
        dato: "🐱 Por qué el abordaje es distinto en la gata:<br>El <strong>cuerpo del útero de la gata es más corto y está en posición mucho más caudal</strong> que en la perra. Por eso, en abordaje ventral, la incisión va en el tercio medio o caudal (entre ombligo y pubis). Pero aquí usaremos el <strong>ABORDAJE LATERAL POR EL FLANCO IZQUIERDO</strong>, muy común en campañas de esterilización de gatas."
      },

      {
        titulo: "Ronda 2 — Abrir por el flanco",
        instruccion: "Entrar a la cavidad por el costado izquierdo.",
        pasos: [
          { texto: "Incisión vertical en el flanco izquierdo (piel y tejido subcutáneo)",
            pista: "La incisión es VERTICAL en el flanco, atravesando piel y subcutáneo." },
          { texto: "Técnica estrellada en la musculatura (o incisopunción)",
            pista: "La musculatura se abre con técnica estrellada o por incisopunción." },
          { texto: "Identificar el ovario izquierdo",
            pista: "Entrando por el flanco izquierdo, lo primero que se busca es el ovario izquierdo." },
          { texto: "Exponer el ovario izquierdo e identificar mesovario y mesometrio",
            pista: "Se exterioriza el ovario y se reconocen sus meso (mesovario y mesometrio)." }
        ],
        dato: "✨ La <strong>técnica estrellada</strong> separa las fibras musculares en forma de estrella (divulsión) en lugar de cortarlas: sangra menos y cicatriza mejor. Alternativa: incisopunción."
      },

      {
        titulo: "Ronda 3 — Ligar y extraer",
        instruccion: "Resolver ambos ovarios y el útero por la misma ventana del flanco.",
        pasos: [
          { texto: "Ligar arteria y vena ováricas izquierdas",
            pista: "Igual que en la perra: se ligan los vasos ováricos antes de cortar." },
          { texto: "Colocar pinza en el cuerno izquierdo y cortar el mesovario (evitando el tejido ovárico)",
            pista: "Se pinza el cuerno y se corta el mesovario SIN dañar el ovario." },
          { texto: "Exponer el ovario derecho y repetir el procedimiento",
            pista: "Por la misma incisión del flanco se alcanza y resuelve el ovario derecho." },
          { texto: "Elevar ambos cuernos y colocar la sutura caudal (transfixión)",
            pista: "Se elevan los dos cuernos y se liga el cuerpo uterino con transfixión caudal." }
        ],
        dato: "🚫 Clave: al cortar el mesovario hay que <strong>evitar cortar el tejido ovárico</strong>. Si se deja un fragmento, aparece el temido <strong>ovario remanente</strong> (la gata seguirá con celos)."
      },

      {
        titulo: "Ronda 4 — Cierre de la pared",
        instruccion: "Cerrar el flanco correctamente.",
        pasos: [
          { texto: "Síntesis de la pared: suturar TODAS las capas musculares",
            pista: "En el flanco hay varias capas musculares: todas deben suturarse." },
          { texto: "Síntesis de tejido subcutáneo",
            pista: "Luego el subcutáneo, de adentro hacia afuera." },
          { texto: "Síntesis cutánea (piel)",
            pista: "Por último, la piel." }
        ],
        dato: "🧵 En el abordaje lateral es indispensable <strong>suturar todas las capas musculares</strong> del flanco; si se salta alguna, puede quedar una hernia o dehiscencia."
      }

    ]
  },

  /* =======================  CESÁREA  ======================= */
  cesarea: {
    nombre: "🤰🐕 Cesárea en Perra",
    rondas: [

      {
        titulo: "Ronda 1 — Antes de la cirugía",
        instruccion: "Decidir y preparar. Ordena el manejo previo de la paciente.",
        pasos: [
          { texto: "Determinar si se trata de una distocia",
            pista: "Primero hay que confirmar si realmente hay un parto obstruido (distocia)." },
          { texto: "Estabilizar a la paciente",
            pista: "Una perra inestable no puede ir a cirugía: se estabiliza antes." },
          { texto: "Si es programada: determinar fecha exacta y maduración de los cachorros (progesterona + ecografía)",
            pista: "Se usa progesterona y ecografía para saber si los cachorros están maduros." },
          { texto: "Dejar cirujano y ayudante VESTIDOS y el instrumental preparado antes de inducir",
            pista: "Indispensable y clave para el éxito: todo listo ANTES de dormirla, por el tiempo." }
        ],
        dato: "📊 Dato curioso — progesterona para predecir el parto:<br>• <strong>&lt; 8,7 nmol/L</strong>: ~99% de iniciar fase 1 en las próximas 48 h (Cramer 2017).<br>• <strong>&lt; 3,18 nmol/L</strong>: ~100% de iniciar fase 1 en las próximas 24 h.<br>La ecografía sirve para determinar maduración fetal y monitorizar la frecuencia cardiaca de los fetos."
      },

      {
        titulo: "Ronda 2 — Estrategia anestésica de la cesárea",
        instruccion: "Ojo: aquí la anestesia es DISTINTA a la OVH, para no dormir a los cachorros.",
        pasos: [
          { texto: "SIN premedicación (para no deprimir a los cachorros)",
            pista: "A diferencia de la OVH, en cesárea NO se premedica: los fármacos pasan a los cachorros." },
          { texto: "Preoxigenar 3 a 5 minutos",
            pista: "Se da oxígeno unos minutos antes de inducir, para proteger a madre y crías." },
          { texto: "Inducción y mantenimiento inicial con propofol, hasta extraer todos los cachorros",
            pista: "Solo propofol hasta sacar a las crías; el secreto es el tiempo inducción→extracción." },
          { texto: "Comenzar la anestesia inhalatoria (una vez fuera los cachorros)",
            pista: "La inhalatoria se inicia DESPUÉS, cuando los cachorros ya están afuera." }
        ],
        dato: "🔑 La GRAN diferencia con la OVH: en cesárea <strong>NO se premedica</strong> y se usa solo propofol hasta extraer a los cachorros, porque todo lo que reciba la madre llega al cachorro y lo deprime. La inhalatoria entra recién después del parto."
      },

      {
        titulo: "Ronda 3 — Técnica quirúrgica y cierre",
        instruccion: "Sacar a los cachorros rápido y cerrar.",
        pasos: [
          { texto: "Laparotomía lo más rápido posible",
            pista: "El secreto está en el tiempo entre la inducción y la extracción: hay que ser veloz." },
          { texto: "Cesárea en bloque (con precaución al colocar la pinza caudal)",
            pista: "Es preferible sacar el útero en bloque, cuidando la pinza caudal." },
          { texto: "Síntesis uterina con patrón Cushing + Cushing",
            pista: "El útero se cierra con doble patrón invaginante: Cushing sobre Cushing." },
          { texto: "Laparorrafia: cerrar la pared igual que en la OVH",
            pista: "La pared abdominal se cierra igual que en la ovariohisterectomía." }
        ],
        dato: "⏱️ El SECRETO de la cesárea está en el <strong>tiempo entre la inducción y la extracción</strong>: cuanto menos tiempo, más vivos y vigorosos nacen los cachorros. Por eso todo debe estar listo antes de dormir a la madre."
      },

      {
        titulo: "Ronda 4 — Manejo de los neonatos (¡el gran final!)",
        instruccion: "Reanimar a los cachorros. Aquí aparece el fármaco que buscabas: el Doxapram.",
        pasos: [
          { texto: "Retirar las secreciones con gasa o perilla nasal",
            pista: "Primero se limpian boca y nariz para que el cachorro pueda respirar." },
          { texto: "Estimular y, si hay APNEA, administrar Doxapram (1–2 gotas sublinguales o 0,05 ml SC)",
            pista: "¡Este es! El Doxapram es un estimulante respiratorio: se repite cada 15–20 min si hace falta." }
        ],
        dato: "🐶 El fármaco estrella: <strong>Doxapram</strong>. NO revierte la anestesia: es un <strong>estimulante respiratorio</strong> que se usa ante <strong>apnea</strong> del neonato. Dosis: 1–2 gotas de la solución inyectable por vía sublingual (repetible cada 15–20 min) o 0,05 ml SC."
      }

    ]
  },

  /* ===============  ANATOMÍA (modo repaso)  =============== */
  anatomia: {
    nombre: "🔬 Anatomía e Irrigación",
    rondas: [
      {
        titulo: "Ronda 1 — Recorrido del aparato genital femenino",
        instruccion: "Ordena las estructuras desde el ovario hasta la salida.",
        pasos: [
          { texto: "Ovario (sostenido por el ligamento suspensorio del ovario)",
            pista: "Todo empieza en el ovario, muy fijo en la región sublumbar." },
          { texto: "Tuba uterina / oviducto (dentro de la bolsa ovárica)",
            pista: "Del ovario, el óvulo pasa a la tuba uterina (oviducto)." },
          { texto: "Cuerno uterino",
            pista: "La tuba desemboca en el cuerno uterino (los embriones se alojan aquí)." },
          { texto: "Cuerpo del útero",
            pista: "Los dos cuernos confluyen en el cuerpo uterino." },
          { texto: "Cérvix (cuello uterino)",
            pista: "El cuerpo termina en el cérvix, la 'puerta' del útero." },
          { texto: "Vagina",
            pista: "Tras el cérvix viene la vagina." },
          { texto: "Vestíbulo vaginal y vulva",
            pista: "Finalmente el vestíbulo vaginal y la vulva (la salida)." }
        ],
        dato: "🔗 Ligamentos clave: ligamento <strong>suspensorio del ovario</strong> (lo fija a la región sublumbar; es TENAZ en la perra), ligamento <strong>propio del ovario</strong>, <strong>mesovario</strong>, <strong>mesometrio</strong> y ligamento <strong>redondo del útero</strong>. El conjunto mesovario+mesometrio forma el ligamento ancho."
      },
      {
        titulo: "Ronda 2 — Irrigación (de dónde llega la sangre)",
        instruccion: "Ordena el aporte sanguíneo del cráneo (adelante) al caudal (atrás).",
        pasos: [
          { texto: "Arteria ovárica (rama uterina): aporte CRANEAL, cerca del oviducto",
            pista: "La arteria ovárica irriga la parte craneal, cerca del oviducto." },
          { texto: "Anastomosis ipsilateral en el ligamento ancho",
            pista: "En el ligamento ancho se unen la ovárica (rama uterina) y la uterina ascendente." },
          { texto: "Arteria uterina: aporte MEDIO y CAUDAL",
            pista: "La arteria uterina aporta a la zona media y caudal del útero." }
        ],
        dato: "🩸 Por eso en la OVH se ligan DOS pedículos por lado: el <strong>ovárico craneal</strong> (arteria ovárica) y el <strong>uterino caudal</strong> (arteria uterina). Ambos se anastomosan en el ligamento ancho, así que si uno queda mal ligado, igual puede sangrar por la anastomosis."
      }
    ]
  }

};
