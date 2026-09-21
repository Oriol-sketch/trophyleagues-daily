# Arquitectura tècnica

## Fitxers

- `index.html`: contenidor i metadades.
- `styles.css`: sistema visual responsive.
- `app.js`: routing i estat global.
- `data/`: JSON de contingut.
- `games/`: mòdul de cada joc.
- `components/`: header, bottom navigation, score card, share card i leaderboard.
- `storage/`: funcions de localStorage.

## Contracte d’un joc

Cada joc ha d’exposar:

- `id`;
- `title`;
- `duration`;
- `start()`;
- `render(container)`;
- `submitAnswer(answer)`;
- `getScore()`;
- `getShareText()`;
- `reset()`.

Els jocs no poden manipular directament la navegació global. Han de retornar estat i puntuació al controlador comú.

## Dades

No hardcodejar contingut llarg dins de components. Les preguntes, jugadors, crisis i textos han d’anar en JSON.

## Qualitat

Sense dependències externes per a l’MVP. No utilitzar imatges protegides. El projecte ha de poder executar-se amb una previsualització estàtica.
