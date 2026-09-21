# Joc 01 Draft d’onzes històrics

## Objectiu
Construir l’onze ideal d’una categoria futbolística en 2–3 minuts.

## Adjunts per a AI Studio
- `01_APP_BASE/arquitectura.md`
- `01_APP_BASE/especificacio.md`
- aquest fitxer
- `data/historical_players.json`

## Flux
1. Escollir categoria.
2. Escollir formació: 4-3-3, 4-4-2 o 3-5-2.
3. Completar posicions una a una.
4. Confirmar onze.
5. Veure puntuació i targeta.

## Regles
Cada ronda ofereix 4 jugadors compatibles amb la posició. Un jugador no pot repetir-se. Si la posició queda buida, no es pot confirmar. La puntuació és 60% qualitat, 20% encaix i 20% equilibri.

## Resultat
Mostrar nota, estil d’equip, millor elecció, elecció més discutible, percentil simulat i text compartible.

## Dades
`historical_players.json` ha de tenir id, nom, posició, país, època, categories, qualitat, encaix i tags.

## Criteri de finalització
Tres formacions, quatre categories, onze rondes, validació, reinici, mòbil, puntuació explicable i targeta compartible.
