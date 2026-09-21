# Backend i usuaris reals

## Quan implementar-lo
Només després de validar la PWA amb localStorage. El backend no és necessari per crear i provar els jocs.

## Entitats

User: id, email, username, createdAt, preferences.

GameResult: id, userId, gameId, challengeDate, score, attempts, createdAt.

Group: id, ownerId, name, inviteCode, createdAt.

GroupMember: groupId, userId, joinedAt.

Season: id, startsAt, endsAt, status.

Badge: id, userId, type, earnedAt.

## Regles

- mai guardar contrasenyes directament;
- validar puntuacions al servidor;
- no confiar en el client per a classificacions;
- limitar intents per userId i data;
- permetre eliminar compte i dades;
- registrar només l’analítica necessària.

## Prompt

Adjunta aquest fitxer i `01_APP_BASE/arquitectura.md`.

“Dissenya una implementació de backend per a les entitats definides. No escriguis secrets ni triïs un proveïdor sense explicar el trade-off. Proposa endpoints, validació, autenticació, límits d’intents i migració des de localStorage. Atura’t abans d’implementar i mostra primer l’arquitectura.”
