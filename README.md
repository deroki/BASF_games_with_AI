# 🎮 BASF Games with AI — Guía para Profesores y Facilitadores

> **Un taller donde los niños crean sus propios videojuegos hablando con un agente de IA — sin necesidad de programar.**

---

## 📖 ¿Qué es esto?

Este es un kit de taller listo para usar que permite a niños (de 8 a 14 años) crear sus propios videojuegos usando **GitHub Copilot Chat** como asistente de diseño de juegos con IA. Los niños nunca tocan el código — solo responden preguntas y describen lo que quieren con lenguaje natural. La IA escribe todo el código, ejecuta el juego y deja que los niños lo personalicen libremente.

---

## 🧠 ¿Cómo funciona?

El taller tiene **3 fases**:

| Fase | Qué pasa | Duración |
|------|----------|----------|
| **1. Descubrimiento** | Copilot pregunta al niño 20 preguntas divertidas sobre su juego soñado (género, héroe, enemigos, colores, etc.) | 15–25 min |
| **2. Construcción** | Copilot escribe el juego entero y lo abre en el navegador | 5–10 min |
| **3. Vibe Coding** | Los niños piden cambios libremente ("hazlo más rápido", "añade explosiones") y los ven en directo | 30–60 min |

### El flujo
```
El niño abre VS Code → Abre Copilot Chat → Escribe "¡Vamos a crear mi juego!"
       ↓
La IA hace 20 preguntas una a una → El niño responde cada una
       ↓
La IA construye el juego completo → Lo abre en el navegador
       ↓
El niño dice "hazme el héroe rojo" → La IA actualiza al instante → El niño lo ve
       ↓
🎉 ¡El niño tiene un juego único y personalizado!
```

---

## 🛠️ Preparación Pre-Taller (IMPORTANTE)

### Requisitos por máquina
| Elemento | Detalles |
|----------|----------|
| **VS Code** | Última versión ([descargar](https://code.visualstudio.com/)) |
| **Extensión GitHub Copilot** | Instalada y con sesión iniciada con licencia válida |
| **Extensión GitHub Copilot Chat** | Instalada y con sesión iniciada |
| **Navegador moderno** | Chrome, Edge o Firefox |
| **Este repositorio** | Clonado o copiado en la máquina |

### Pasos de configuración

#### 1. Clonar el repositorio
```bash
git clone <url-del-repo>
cd BASF_games_with_AI
```

#### 2. Abrir en VS Code
```bash
code .
```

#### 3. Verificar que Copilot funciona
- Abre el panel de Copilot Chat (barra lateral izquierda → icono de chat)
- Escribe "Hola" — si Copilot responde, ¡todo bien!

#### 4. Checklist antes de cada sesión (haz esto antes de que se siente cada niño)
- [ ] VS Code abierto con esta carpeta cargada
- [ ] `START_HERE.md` visible en el editor (modo Preview recomendado: `Ctrl+Shift+V`)
- [ ] Panel de Copilot Chat abierto en el lateral
- [ ] `game/index.html` visible en una pestaña
- [ ] Navegador abierto y listo

---

## 📂 Estructura del Proyecto

```
BASF_games_with_AI/
├── .github/
│   └── copilot-instructions.md   ← 🧠 El cerebro del agente IA (NO EDITAR)
├── .vscode/
│   └── settings.json             ← Configuración de VS Code para el taller
├── game/
│   ├── index.html                ← La página del juego (se abre en el navegador)
│   ├── game.js                   ← Copilot escribe el juego aquí
│   └── style.css                 ← Estilos visuales
├── START_HERE.md                 ← Lo que ven los niños primero
└── README.md                     ← Este archivo (para profesores)
```

### Archivo clave: `.github/copilot-instructions.md`
Este es el **archivo más importante**. Contiene todas las instrucciones que le dicen a Copilot cómo comportarse como asistente amigable de creación de juegos para niños. Define:
- La personalidad de la IA (divertida, motivadora, con muchos emojis)
- Las 20 preguntas de descubrimiento
- Cómo construir juegos 2D (Canvas) vs 3D (Three.js)
- Las reglas de la fase de vibe coding
- Comportamiento ante errores

> ⚠️ **No edites este archivo** a menos que quieras cambiar el comportamiento de la IA. Si lo personalizas, asegúrate de mantener el tono amigable para niños.

---

## 👩‍🏫 Cómo dirigir el taller

### Antes de que lleguen los niños
1. Configura todas las máquinas (ver preparación arriba)
2. Prueba una máquina tú mismo — escribe "¡Vamos a crear mi juego!" y pasa por algunas preguntas
3. Asegúrate de que `start game/index.html` abre el navegador correctamente

### Plan de la sesión

| Tiempo | Actividad | Tu rol |
|--------|-----------|--------|
| **0–5 min** | Bienvenida y mostrar `START_HERE.md` en pantalla | Explica: "¡Hoy vais a construir VUESTRO PROPIO juego hablando con una IA!" |
| **5–10 min** | Los niños abren Copilot Chat | Ayúdales a encontrar el icono del chat y a escribir la frase mágica |
| **10–30 min** | Fase 1: La IA hace las 20 preguntas | Pasea por la sala, ayuda a los niños que se atascen formulando ideas |
| **30–40 min** | Fase 2: El juego se construye y se ejecuta | Ayuda con cualquier problema del navegador |
| **40–80 min** | Fase 3: Vibe coding — personalización libre | ¡Anima a ideas locas! Sugiere cosas si los niños se quedan sin ideas |
| **80–90 min** | Presentación | Cada niño presenta su juego al grupo |

### Consejos para cada fase

#### Fase 1 — Descubrimiento
- Si un niño es **tímido o se atasca**, sugiere: "¿Qué tal un juego del espacio? ¿O del océano?"
- Si un niño da **respuestas muy cortas**, anímale a dar más detalle: "¿De qué COLOR debería ser el héroe?"
- Si un niño quiere **saltarse preguntas**, no pasa nada — la IA se adaptará

#### Fase 2 — Construcción
- El juego debería abrirse automáticamente en el navegador
- Si no se abre, dile al niño que escriba: "Ejecuta mi juego por favor"
- Si el juego tiene problemas, dile al niño que escriba: "El juego no funciona bien, ¿puedes arreglarlo?"

#### Fase 3 — Vibe Coding
¡Aquí es donde ocurre la magia! Sugiere estas ideas si los niños se quedan sin inspiración:
- "Haz que el jugador deje un rastro detrás"
- "Añade un power-up que te haga invencible"
- "Cambia todos los colores del juego"
- "Añade un segundo jugador"
- "Haz que los enemigos exploten cuando los venzas"
- "Añade un código trampa secreto"
- "Añade una tabla de puntuaciones"

---

## 🔧 Solución de problemas

| Problema | Solución |
|----------|----------|
| Copilot no responde | Comprueba que la extensión de Copilot tiene la sesión iniciada y está activa |
| El juego no se abre en el navegador | Abre manualmente `game/index.html` en Chrome/Edge |
| El juego tiene un bug o se cuelga | Dile al niño que escriba: "Mi juego tiene un error, ¿puedes arreglarlo?" |
| El juego 3D va lento | Dile al niño que escriba: "Haz el juego más simple y rápido" |
| El niño editó el código sin querer | Pulsa `Ctrl+Z` para deshacer, o pide a Copilot que reescriba el archivo |
| El niño quiere empezar de nuevo | Dile que escriba: "Empecemos de cero — ¡quiero hacer un juego completamente nuevo!" |
| Copilot hace demasiadas preguntas | Debería hacer exactamente 20 — si se desvía, escribe: "Sáltate las preguntas y construye el juego" |

---

## 🎯 Resultados de aprendizaje

Al final del taller, los niños habrán:
- ✅ Diseñado un juego desde cero (pensamiento de diseño de juegos)
- ✅ Experimentado cómo la IA puede escribir código a partir de lenguaje natural
- ✅ Aprendido a **describir ideas con claridad** (¡ingeniería de prompts!)
- ✅ Iterado en un proyecto creativo (diseñar → probar → mejorar)
- ✅ Construido algo que pueden enseñar a amigos y familia

---

## 🔄 Resetear para el siguiente niño

Entre sesiones, resetea el espacio de trabajo:

```bash
# Resetear game.js a la pantalla de bienvenida
git checkout -- game/game.js game/index.html
```

O simplemente vuelve a clonar el repositorio.

---

## 📌 Opciones de personalización

¿Quieres ajustar el taller? Esto es lo que puedes cambiar:

| Qué | Dónde | Cómo |
|-----|-------|------|
| Número de preguntas | `.github/copilot-instructions.md` | Añade/elimina preguntas en la Fase 1 |
| Personalidad de la IA | `.github/copilot-instructions.md` | Cambia la sección de personalidad |
| Tecnología del juego | `.github/copilot-instructions.md` | Cambia Canvas/Three.js por otros frameworks |
| Rango de edad | `.github/copilot-instructions.md` | Ajusta la complejidad del lenguaje |
| Configuración de VS Code | `.vscode/settings.json` | Tamaño de fuente, tema, etc. |
| Pantalla de bienvenida | `game/game.js` | Cambia la animación inicial |

---

## ❓ Preguntas frecuentes

**P: ¿Los niños necesitan saber programar?**
R: ¡No! No se requiere ningún conocimiento de programación. Solo chatean.

**P: ¿Para qué edades es?**
R: Diseñado para 8–14 años, pero funciona para cualquier edad que pueda escribir y describir ideas.

**P: ¿Necesita internet?**
R: Sí — Copilot Chat requiere conexión a internet.

**P: ¿Qué tipos de juegos pueden hacer los niños?**
R: Juegos 2D (plataformas, vista cenital, arcade) y juegos 3D básicos. La IA gestiona toda la complejidad.

**P: ¿Pueden dos niños compartir una máquina?**
R: ¡Sí! Emparejarlos como "diseñador" (responde preguntas) y "probador" (ejecuta el juego). Intercambiar a mitad de sesión.

**P: ¿Cuánto dura una sesión?**
R: Mínimo 45 minutos, ideal 90 minutos. La fase de vibe coding puede durar todo lo que quieras.

**P: ¿Los niños pueden llevarse su juego a casa?**
R: ¡Sí! Copia la carpeta `game/` a un USB o comprímela en un ZIP. El juego funciona en cualquier navegador.

---

## 📜 Licencia

Este kit de taller se proporciona para uso educativo en eventos de BASF.
