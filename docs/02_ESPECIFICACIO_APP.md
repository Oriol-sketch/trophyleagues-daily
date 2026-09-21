# Especificació de l’aplicació

## Navegació

Barra inferior mòbil: Inici, Reptes, Classificació, Perfil.

La pantalla Inici mostra el repte del dia, la ratxa, la puntuació de temporada i un botó cap a TrophyLeagues.

La pantalla Reptes mostra el repte diari, jocs anteriors i modes disponibles.

La pantalla Classificació mostra Avui, Setmana, Temporada, Amics i Global.

La pantalla Perfil mostra àlies, títol, ratxa, rècords, insígnies i registre a la beta.

## Flux d’una partida

Inici > Jugar > instrucció curta > partida > resultat > compartir o tornar a Inici.

No hi hauria d’haver més de tres clics abans de començar.

## Dades

Separar `players.json`, `clubs.json`, `nationalTeams.json`, `historicalTeams.json`, `dailyChallenges.json`, `fictionalScouting.json` i `humorText.json`.

Cada repte té id, data, tipus, títol, dificultat, contingut, resposta, explicació, puntuació i text de compartir.

La primera versió pot utilitzar localStorage. La versió amb usuaris reals necessitarà backend, autenticació i base de dades. AI Studio no ha d’inventar aquest backend sense una fase específica.

## Puntuació

Resposta al primer intent: 100 punts. Segon intent: 75. Tercer intent: 50. Error: 0. Bonus de ratxa: fins a 20. Bonus de dificultat: fins a 30.

## Temporades

Una temporada dura 28 o 30 dies. Cada repte dona punts. La classificació d’amics és més important que la global perquè facilita la viralitat real.

## Grups

Crear grup amb nom i codi. El codi es comparteix amb amics. No cal xat a la primera versió.

## Resultat compartible

Mostrar puntuació, intents, percentil, ratxa i una frase humorística. No mostrar la resposta del repte diari si encara es pot jugar.

## TrophyLeagues

Cada pantalla de resultat ha d’incloure un enllaç discret a “Construeix el teu propi club a TrophyLeagues”. No convertir cada joc en un anunci.

## Disseny

Mobile-first, esportiu, fosc amb verd o turquesa, targetes grans, tipografia contundent, animacions curtes i botons molt visibles. Estètica pròpia, sense copiar EA, UEFA, FIFA o cap club.
