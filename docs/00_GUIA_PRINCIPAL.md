# TrophyLeagues Daily

## Guia de construcció de zero a publicació

TrophyLeagues Daily és una plataforma web de reptes futbolístics curts, inspirada en el bucle de PlayUs: repte diari, intents limitats, resultats compartibles, grups d’amics i temporades. La diferència és l’especialització en futbol, nostàlgia, debat, humor, scouting i connexió amb TrophyLeagues.

TrophyLeagues és el joc principal. Daily és la porta d’entrada, el canal de contingut i la comunitat.

## Ordre exacte de treball amb AI Studio

1. Crea una aplicació nova a Google AI Studio.
2. Adjunta tots els fitxers d’aquesta carpeta com a context inicial.
3. Envia `prompts/00_context_inicial.txt`.
4. Envia `prompts/01_arquitectura_app.txt`.
5. Prova l’aplicació abans de continuar.
6. Envia `prompts/02_disseny_visual.txt`.
7. Envia `prompts/03_dades_i_persistencia.txt`.
8. Afegeix els jocs en l’ordre recomanat: 01, 02, 03, 04 i 05.
9. Per cada joc, envia primer el prompt de construcció, després el de QA i finalment el de correcció.
10. No enviïs dos prompts de construcció alhora.
11. Després dels cinc primers jocs, envia `prompts/18_integracio_social.txt`.
12. Envia `prompts/19_testing_final.txt`.
13. Envia `prompts/20_publicacio.txt`.

## Regla essencial

No demanis mai “fes-ho tot” en una sola petició. Demana una fase, prova-la, guarda una versió i continua. AI Studio pot generar una bona base, però ha de rebre decisions concretes i criteris de finalització.

## Prioritat

Els cinc primers jocs són els únics necessaris per validar la plataforma:

1. Draft d’onzes històrics.
2. Quin jugador és?
3. Fitxa o passa.
4. Manager en 60 segons.
5. Draft impossible.

Els altres deu han d’estar documentats i preparats, però no s’han de construir fins que els primers mostrin retorn i comparticions.

## Definició de “fet”

Un joc no està fet perquè la pantalla sigui bonica. Està fet quan:

- s’entén en menys de deu segons;
- dura entre un i tres minuts;
- té un inici i un final clars;
- la puntuació és explicable;
- es pot reiniciar;
- funciona en mòbil;
- té una pantalla de resultat compartible;
- no genera errors de consola;
- no trenca els altres jocs;
- les dades estan separades del codi.
