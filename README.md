# unq-ui-walter-gomez-trabajo-final

Trabajo Final Integrador de UIs desarrollado con React por Walter Gomez. 2026s1

## Requisitos

- Node.js 20 o superior
- npm
- git

## Clonación

```bash
git clone https://github.com/walterggomez/unq-ui-walter-gomez-trabajo-final.git
cd unq-ui-walter-gomez-trabajo-final
```

## Instalacion

```bash
npm install
```

## Ejecutar localmente

```bash
npm run dev
```

Luego abrir la URL que muestra la terminal, normalmente:

```text
http://127.0.0.1:5173
```

## Enunciado

El enunciado propuesto solicitaba desarrollar un juego de **Palabras Encadenadas** utilizando **React**.

El objetivo es formar la cadena más larga posible de palabras válidas antes de que se agote el tiempo.

El siguiente desarrollo cumple dicho objetivo


## Juego - Reglas del Juego

Una partida consiste en ingresar palabras validas en espanol que formen una cadena.

La primera palabra puede ser cualquier palabra válida y será la que inicie la cadena.

A partir de la segunda palabra, cada nueva palabra debe cumplir las siguientes condiciones:

* Debe existir en el diccionario español.
* No puede haber sido utilizada anteriormente durante la partida.
* Debe comenzar con la última letra de la palabra válida anterior.
* No se puede repetir una palabra en la misma partida.
* Una palabra valida reinicia el contador.

Por ejemplo:
```
casa  -> árbol -> luna
```

### Puntaje

Cada letra de una palabra válida otorga 1 punto.

```
casa  -> 4 puntos
árbol -> 5 puntos
luna  -> 4 puntos

Total: 13 puntos
```

### Tiempo

Cada turno tiene una duración de **15 segundos**.

- El contador comienza al ingresar la primera palabra.
- Cada vez que el jugador ingresa una palabra válida, el contador vuelve a 15 segundos.
- Mientras el tiempo no haya finalizado, el jugador puede seguir intentando ingresar palabras.
- Si el contador llega a 0, la partida termina.

## Extras implementados

- Interfaz responsive. (1/3)
- Posibilidad de jugar mas de una partida. (2/3)
- Leaderboard local con los mejores 10 puntajes. (3/3)