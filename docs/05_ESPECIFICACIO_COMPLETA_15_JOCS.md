# Especificació completa dels 15 jocs

## Regles comunes

Tots els jocs han de tenir una sola acció principal, durar menys de tres minuts, mostrar intents o progrés, acabar amb puntuació i generar una targeta compartible. Les dades han d’estar separades de la interfície. Cap joc pot exigir registre per començar.

## 01 Draft d’onzes històrics

Objectiu: construir el millor onze d’una categoria.

Flux: categoria > formació > ronda de posició > elecció entre 3–5 jugadors > onze final > puntuació.

Categories inicials: Mundial, Eurocopa, Champions, seleccions, dècades i clubs històrics.

Puntuació: qualitat individual 60%, encaix de posicions 20%, equilibri de l’equip 20%.

Resultat: nota de l’1 al 100, estil d’equip, percentil i frase de debat.

Casos límit: si falta una posició, impedir finalitzar; si hi ha empat, aplicar criteri de categoria; si la categoria no té dades, mostrar error amigable.

## 02 Quin jugador és?

Objectiu: identificar un jugador en sis intents.

Pistes: nacionalitat, posició, dècada, clubs, títols i dada curiosa.

Puntuació: 100, 75, 60, 45, 30 o 0 segons intent.

Resultat: ratxa, intents i targeta amb caselles, sense revelar la resposta.

Casos límit: acceptar accents i variants de nom; no permetre enviar buit; impedir més intents després de la resposta.

## 03 Fitxa o passa

Objectiu: decidir si fitxar jugadors ficticis amb informació incompleta.

Accions: FITXA, ESPERA, PASSA.

Cada cas inclou: edat, posició, preu, tres atributs visibles, nota d’scout i risc.

Resultat: valor de plantilla, benefici o pèrdua i perfil d’scout.

Casos límit: no permetre doble clic; mostrar sempre la revelació; separar dades visibles i ocultes.

## 04 Manager en 60 segons

Objectiu: preparar un partit amb cinc decisions.

Decisions: formació, mentalitat, pressió, focus d’entrenament i substitució.

Simulació: calcular resultat a partir d’atributs d’equip, compatibilitat tàctica i una variació aleatòria limitada.

Resultat: marcador, tres causes de la victòria o derrota i puntuació de manager.

Casos límit: explicar sempre el resultat; no usar aleatorietat pura; permetre reiniciar.

## 05 Draft impossible

Objectiu: construir un onze sota una regla diària.

Restriccions: només suplents, només esquerrans, només una dècada, pressupost baix, només jugadors subestimats, només veterans, només jugadors d’un país.

Resultat: validar restricció, calcular puntuació i generar una frase provocadora.

## 06 Press conference

Objectiu: respondre cinc preguntes després d’un partit.

Cada resposta afecta quatre barres: afició, vestidor, directiva i premsa.

Incloure respostes serioses, diplomàtiques, agressives i absurdes.

Resultat: titular de premsa, reputació i perfil de manager.

## 07 Carrera misteriosa

Objectiu: endevinar un jugador a partir de la seva trajectòria.

Pistes: primer club, club menys conegut, selecció, company, any o títol.

Resultat: punts segons la pista utilitzada i explicació de la trajectòria.

## 08 Qui guanya aquest partit?

Objectiu: comparar dos equips històrics.

El jugador tria guanyador, formació i estil. La simulació mostra tres factors: qualitat, encaix i context.

Resultat: marcador, home del partit i explicació.

## 09 Mercat de fitxatges

Objectiu: acabar cinc rondes amb el màxim valor de plantilla.

Accions: comprar, vendre o esperar.

Notícies: lesions, forma, competència i potencial.

Utilitzar jugadors ficticis a la primera versió per evitar riscos de llicències.

## 10 El VAR ha parlat

Objectiu: decidir una jugada controvertida.

Modes: penal, fora de joc, vermella, mà i simulació.

Resultat: decisió pròpia, decisió de la comunitat i explicació.

## 11 Ascens exprés

Objectiu: aconseguir l’ascens en cinc jornades.

Decisions: fitxatge, entrenament, tàctica i gestió del vestidor.

Resultat: posició final i tres decisions que han determinat la temporada.

## 12 Simulador de president

Objectiu: sobreviure a deu crisis.

Variables: diners, reputació, afició i estabilitat del vestidor.

Incloure situacions absurdes i una portada final generada amb text.

## 13 Football Chaos

Objectiu: guanyar un partit curt amb una regla absurda.

Regles: pilota gegant, gols dobles, camp relliscós, jugadors invisibles durant un segon o porters magnètics.

Fer-lo opcional fins que l’arquitectura arcade estigui madura.

## 14 On és el jugador?

Objectiu: identificar jugador o selecció amb pistes geogràfiques.

Mostrar mapa simplificat, bandera o ruta de clubs. No cal mapa real en el primer prototip.

## 15 TrophyLeagues Daily

No és un joc separat. És l’orquestrador que escull el repte del dia, limita intents, desa puntuació, actualitza ratxes, mostra classificacions i genera el resultat compartible.

============================================================
CRITERIS DE FINALITZACIÓ COMUNS
============================================================

- partida jugable sense registre;
- instrucció visible en una frase;
- temps inferior a tres minuts;
- puntuació explicable;
- reinici funcional;
- resultat compartible;
- responsive mòbil;
- dades separades;
- cap error de consola;
- cap regressió en els altres jocs.
