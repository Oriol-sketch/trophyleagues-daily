# Joc 12 Simulador de President

## Propòsit

Minijoc narratiu de 2 a 4 minuts. El jugador assumeix la presidència d’un club fictici i ha de superar deu crisis. Cada decisió modifica diners, reputació, afició i vestidor. El joc ha de ser humorístic però coherent: les decisions tenen conseqüències comprensibles.

## Fitxers que s’han d’adjuntar a AI Studio

Adjunta aquests fitxers abans d’enviar el prompt de construcció:

- `00_GUIA_PRINCIPAL.md`
- `02_ESPECIFICACIO_APP.md`
- `games/12_simulador_president.md`
- `data/president_crises.json`
- `data/humorText.json`
- `prompts/12_president_build.txt`

No adjuntis encara els fitxers d’altres jocs si AI Studio tendeix a barrejar les funcionalitats. La plataforma comuna sí que s’ha de mantenir com a context.

## Objectiu del jugador

Superar deu crisis i acabar amb el màxim nivell de salut del club. No cal guanyar tots els esdeveniments. El jugador ha de poder perdre, però sempre ha de veure per què.

## Pantalles

### Pantalla 1 Introducció

Elements:

- títol `Simulador de President`;
- subtítol `Deu decisions per salvar el teu club`;
- quatre indicadors inicials;
- botó `Assumir la presidència`;
- text curt: `Cada decisió té conseqüències. No podràs agradar a tothom.`

Valors inicials:

- diners: 60;
- reputació: 50;
- afició: 55;
- vestidor: 60.

### Pantalla 2 Crisi

Elements:

- número de crisi: `Crisi 3 de 10`;
- titular o títol;
- descripció de dues o tres frases;
- quatre indicadors actuals;
- tres botons de decisió;
- cap altra acció disponible.

### Pantalla 3 Conseqüència

Elements:

- decisió triada;
- text de conseqüència;
- canvis positius en verd i negatius en vermell;
- indicadors actualitzats;
- botó `Continuar`.

### Pantalla 4 Resultat final

Elements:

- titular final;
- títol del president;
- puntuació total;
- quatre indicadors finals;
- tres decisions que més han influït;
- frase humorística;
- botó `Compartir resultat`;
- botó `Tornar a jugar`.

## Regles

- Hi ha deu crisis en ordre.
- Cada crisi té tres opcions.
- Cada opció aplica quatre modificadors.
- Els indicadors sempre es mantenen entre 0 i 100.
- Si un indicador arriba a 0, la partida pot continuar fins a la pantalla final, però el text ha d’indicar que el club està en estat crític.
- El jugador no ha de veure els modificadors abans de triar.
- Després de triar, sempre ha de veure els modificadors.
- No hi ha temporitzador en la primera versió.
- No hi ha resposta absolutament correcta: cada opció ha de tenir un avantatge i un cost.

## Fórmula de puntuació

Puntuació base = mitjana dels quatre indicadors finals.

Bonus de supervivència = 5 punts si cap indicador és inferior a 20.

Bonus de coherència = 5 punts si el jugador ha pres almenys cinc decisions que milloren dos indicadors alhora.

Puntuació final màxima: 110, limitada visualment a 100.

Classificació:

- 85–100: President llegendari;
- 70–84: President competent;
- 55–69: Temporada irregular;
- 35–54: Crisi institucional;
- 0–34: El club et destitueix.

## Les deu crisis

### Crisi 1 La pancarta contra el president

Situació: l’afició protesta perquè el club ha venut la seva estrella.

A: Culpar l’entrenador. Canvis: diners 0, reputació -10, afició -15, vestidor -5.

B: Explicar el pla i prometre un fitxatge. Canvis: diners -10, reputació +8, afició +10, vestidor +2.

C: Ignorar la protesta. Canvis: diners 0, reputació -5, afició -20, vestidor +5.

### Crisi 2 El fitxatge viral

Situació: un jugador famós a les xarxes costa gairebé tot el pressupost.

A: Fitxar-lo. Diners -25, reputació +15, afició +18, vestidor -4.

B: Negociar una cessió. Diners -8, reputació +5, afició +5, vestidor +3.

C: Fitxar una promesa desconeguda. Diners -5, reputació -4, afició -8, vestidor +12.

### Crisi 3 L’entrenador i la roda de premsa

Situació: l’entrenador critica públicament la directiva.

A: Acomiadar-lo. Diners -15, reputació +5, afició -5, vestidor -12.

B: Donar-li suport públic. Diners 0, reputació -8, afició +3, vestidor +10.

C: Fer veure que no ha passat res. Diners 0, reputació -4, afició -2, vestidor -4.

### Crisi 4 El capità enfadat

Situació: el capità exigeix renovar o amenaça amb marxar.

A: Renovar-lo immediatament. Diners -12, reputació +4, afició +8, vestidor +15.

B: Posar-lo al mercat. Diners +18, reputació -10, afició -15, vestidor -12.

C: Prometre-li el càrrec de director esportiu. Diners -5, reputació +2, afició +3, vestidor +5.

### Crisi 5 El patrocinador estrany

Situació: un patrocinador ofereix molts diners però vol posar el seu nom a l’estadi.

A: Acceptar. Diners +25, reputació -12, afició -10, vestidor 0.

B: Rebutjar-lo. Diners 0, reputació +8, afició +5, vestidor 0.

C: Acceptar només per una temporada. Diners +12, reputació -5, afició -4, vestidor 0.

### Crisi 6 La cantera protesta

Situació: els joves no tenen minuts i amenacen amb marxar.

A: Donar-los minuts. Diners 0, reputació +5, afició +7, vestidor +10.

B: Fitxar un veterà. Diners -15, reputació +3, afició +2, vestidor -3.

C: Enviar-los cedits. Diners +5, reputació -3, afició -2, vestidor +2.

### Crisi 7 El derbi

Situació: arriba el partit més important de la temporada.

A: Pressionar l’equip amb un discurs agressiu. Diners 0, reputació +2, afició +8, vestidor -10.

B: Protegir l’equip de la premsa. Diners 0, reputació +5, afició -2, vestidor +12.

C: Fer una campanya viral. Diners -6, reputació +12, afició +15, vestidor -3.

### Crisi 8 El deute

Situació: descobreixes una factura que ningú havia explicat.

A: Fer-la pública. Diners -20, reputació +12, afició +4, vestidor -4.

B: Amagar-la fins al final de temporada. Diners -5, reputació -18, afició -12, vestidor +2.

C: Demanar ajuda a un inversor. Diners +20, reputació -8, afició -5, vestidor 0.

### Crisi 9 El fitxatge fallit

Situació: el fitxatge estrella no rendeix i l’afició el xiula.

A: Defensar-lo. Diners 0, reputació +3, afició -5, vestidor +10.

B: Posar-lo a la banqueta. Diners 0, reputació -2, afició +5, vestidor -4.

C: Vendre’l perdent diners. Diners -15, reputació -8, afició +2, vestidor +4.

### Crisi 10 La final

Situació: el club arriba a una final inesperada.

A: Prometre una prima enorme. Diners -20, reputació +8, afició +12, vestidor +15.

B: Mantenir el pla habitual. Diners 0, reputació +5, afició +5, vestidor +8.

C: Fer una roda de premsa espectacular. Diners 0, reputació +15, afició +18, vestidor -8.

## Textos de resultat

President llegendari: `Has convertit el caos en una era daurada. La directiva encara no sap com ho has fet.`

President competent: `No has guanyat tothom, però el club continua dempeus i això ja és molt.`

Temporada irregular: `Hi ha decisions que encara provoquen discussions al bar del club.`

Crisi institucional: `La sala de premsa està buida, el vestidor dividit i el compte bancari tremola.`

Destituït: `La junta ha convocat una reunió urgent. Tu no hi estàs convidat.`

## Dades

Crear `data/president_crises.json` amb camps: id, title, situation, options, consequenceText, modifiers i tags.

Crear `data/president_results.json` amb minScore, maxScore, title, description i shareText.

## Prompt de construcció

Adjunta `00_GUIA_PRINCIPAL.md`, `02_ESPECIFICACIO_APP.md`, aquest fitxer, `data/president_crises.json` i `data/president_results.json`.

Envia:

“Implementa exactament el Joc 12 Simulador de President segons `games/12_simulador_president.md`. No construeixis cap altre joc i no reescriguis l’arquitectura comuna. Crea les quatre pantalles indicades, carrega les crisis des de JSON, aplica els modificadors, limita els indicadors entre 0 i 100, calcula la puntuació final i genera la targeta compartible. Primer mostra els fitxers que modificaràs i després implementa-ho. Al final prova les deu crisis, reinici, mòbil i consola.”

## Prompt de QA

“Fes QA només del Simulador de President. Comprova les deu crisis, els tres botons de cada una, els modificadors, el límit 0–100, la pantalla de conseqüència, els resultats, el reinici, la targeta compartible, la vista mòbil i els errors de consola. Retorna una taula amb prova, resultat i error reproduïble. No afegeixis funcionalitats.”

## Criteri de finalització

El joc està acabat quan les deu crisis funcionen amb les tres opcions, les variables canvien correctament, el resultat final depèn realment de les decisions, el jugador pot reiniciar i la partida completa es pot acabar en menys de quatre minuts.
