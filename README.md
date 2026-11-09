# 🐾 Cirugía Quest

Un videojuego web para memorizar **paso a paso** la Ovariohisterectomía (OVH) y la Cesárea en pequeños animales, basado en las diapositivas del curso.

## ▶️ Cómo jugar

1. Abre **`index.html`** en cualquier navegador (computadora o celular).
2. Elige una misión.
3. En cada ronda aparecen los pasos **desordenados**: haz clic en ellos en el **orden correcto**.
4. Si aciertas, el paso salta en verde y sumas puntos. Si fallas, el juego te da una **pista** explicando qué paso tocaba y por qué.
5. Al completar cada ronda aparece un **dato curioso / cosa clave que no debes dejar pasar**.
6. Termina todas las rondas para ganar tu medalla 🏅.

## 🎮 Misiones

| Misión | Contenido |
|--------|-----------|
| 🐕 **OVH en Perra** | Preparación → anestesia → laparotomía → extraer ovarios → cuerpo uterino y cierre → **complicaciones** |
| 🐈 **OVH en Gata** | Abordaje lateral por el **flanco izquierdo** (técnica estrellada) |
| 🤰🐕 **Cesárea en Perra** | Manejo previo → anestesia (¡sin premedicación!) → técnica → reanimación de neonatos con **Doxapram** |
| 🔬 **Anatomía e Irrigación** | Recorrido del aparato genital, ligamentos y arterias (ovárica + uterina) |

**Total:** 16 rondas · 67 pasos · 16 datos curiosos.

## 📁 Archivos

- `index.html` — estructura del juego (archivo a abrir)
- `style.css` — estilos
- `data.js` — todos los pasos, pistas y datos (tomados de las diapositivas)
- `game.js` — lógica del juego

## 💊 Recordatorio clave

El **Doxapram** NO revierte la anestesia: es un **estimulante respiratorio** que se usa ante la **apnea** del neonato (1–2 gotas sublinguales o 0,05 ml SC, repetible cada 15–20 min).
