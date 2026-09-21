# Joc 15 TrophyLeagues Daily

## Adjunts
- `01_APP_BASE/arquitectura.md`
- `01_APP_BASE/especificacio.md`
- aquest fitxer
- especificacions dels jocs ja implementats

## Objectiu
Orquestrar el repte del dia sense duplicar la lògica dels jocs.

## Regles
Un repte per data, tres intents, una puntuació, una ratxa i un resultat compartible. El repte es tria de `dailyChallenges.json`. Si un mode no està disponible, mostrar el següent mode segur.

## Criteri de finalització
Rotació per data, bloqueig d’intents, persistència, classificació local, fallback d’error i enllaç a TrophyLeagues.
