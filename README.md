# AntonellaLlanten_EXAMEN_TOMY-CAZADOR-DE-HUESOS-
Examen de pensamiento computacional.

🐶 Información del proyecto

 ## Nombre: TOMY CAZADOR DE HUESOS
 
Autor/a: Antonella Llanten

Descripción general:
OP ART DOG es un sistema interactivo en p5.js donde un perro debe recolectar huesos mientras esquiva glitches visuales. El sistema está compuesto por múltiples estados (inicio, juego, victoria y derrota) que modifican la lógica y comportamiento del entorno.

## ¿Qué es el proyecto?
Es un videojuego interactivo basado en estados, donde el usuario:

Se mueve con el teclado
Recolecta objetos (huesos)
Evita enemigos (glitches)
Intenta alcanzar un puntaje para ganar

## ¿Qué se ve en pantalla?
-Un fondo tipo grilla OP ART dinámica
-Un personaje (perro)
-Huesos que aparecen aleatoriamente
-Enemigos tipo glitch
-Interfaz con puntaje y vidas
-Pantallas de inicio, victoria y derrota

## Inputs del sistema
-Flechas del teclado → movimiento del personaje
-Tecla “2” → iniciar el juego
-Tecla “1” → reiniciar el sistema

## Outputs del sistema
Movimiento del personaje en pantalla
Generación de objetos dinámicos
Cambio de estados del juego
Retroalimentación visual (colisiones)
Aumento de dificultad progresiva
Pantallas de victoria y error

## DESCRIPCIÓN CONCEPTUAL

El proyecto se basa en la idea de un sistema visual interactivo caótico-controlado, donde el usuario interactúa con un entorno que evoluciona constantemente.

Se explora la relación entre:

-orden (malla OP ART)
-caos (glitches / enemigos)
-interacción (usuario)}

## Referentes de diseño
OP ART (ilusión óptica y repetición geométrica)
Glitch art digital (errores visuales)
Videojuegos arcade clásicos
Sistemas interactivos en tiempo real

# SISTEMA COMPUTACIONAL
 ## Inputs
Teclado (flechas)
Teclas 1 y 2
Tiempo del sistema (frameCount)
Colisiones con objetos 

## Procesos
Generación aleatoria con random()
Mapeo visual con map()
Detección de colisiones con dist()
Control de movimiento del jugador
Gestión de dificultad progresiva

## Estados del sistema
Menú (estado 0)
Juego (estado 1)
Victoria (estado 2)
Derrota (estado 3)

## Eventos
Presionar “2” → inicia el juego
Colisión con hueso → suma puntos
Colisión con enemigo → pierde vida
Alcanzar puntaje → victoria
Quedarse sin vidas → derrota
Presionar “1” → reinicio

## Outputs
Animación visual dinámica
Feedback de colisiones
Cambio de estado del sistema
Interfaz de puntaje y vidas
Efecto visual OP ART constante

## Recursos multimedia
Personaje (perro)
Huesos (objetos recolectables)
Sonido de interacción (opcional en versión final)
Estética visual OP ART + glitch

Función:
No es decorativa, sino que actúa como feedback del sistema:

-objetos = objetivos
-enemigos = penalización
-estética = percepción del estado del sistema

# REGISTRO DE PROCESO
## Etapas del desarrollo
1.-Diseño de sistema base con estados
2.-Implementación de movimiento del personaje
3.-Creación de mecánica de recolección
4.-Agregado de enemigos tipo glitch
5.-Implementación de sistema de vidas y puntaje
6.-Desarrollo de dificultad progresiva
7.-Integración de estética OP ART

# Registro visual

![proceso](https://github.com/antonellallanten-sys/AntonellaLlanten_EXAMEN_TOMY-CAZADOR-DE-HUESOS-/blob/main/imagenes/IMG_8729.jpeg)

Durante el proceso de desarrollo se realizó una primera versión del sistema interactivo, donde un personaje controlado por el usuario se mueve por la pantalla para atrapar rectángulos (huesos) y evitar cuadrados rojos (obstáculos).

![proceso] (

