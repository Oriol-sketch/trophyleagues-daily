# Política de context i tokens

## Regla principal

No adjuntis tota la documentació en cada prompt. Cada tasca té una llista d’adjunts mínima. Si AI Studio ja ha creat o modificat els fitxers de l’aplicació, no els tornis a enganxar com a text: demana-li que els llegeixi del projecte.

## Paquet base que només cal donar una vegada

Adjunta al primer prompt:

- `00_GUIA_GENERAL/com_comencar.md`
- `01_APP_BASE/especificacio.md`
- `01_APP_BASE/arquitectura.md`

Després escriu: “Conserva aquest context com a especificació estable. No el repeteixis ni el copiïs en respostes futures.”

## Per afegir un joc

Adjunta només:

- `01_APP_BASE/arquitectura.md`;
- `joc/especificacio.md`;
- `joc/data.json`;
- el prompt de la tasca.

No adjuntis la guia general completa ni les especificacions d’altres jocs.

## Per fer QA

Adjunta només:

- `joc/especificacio.md`;
- `joc/qa_checklist.md`;
- el prompt de QA.

Demana a AI Studio que inspeccioni els fitxers existents del projecte.

## Per integrar funcionalitats comunes

Adjunta només:

- `01_APP_BASE/arquitectura.md`;
- l’especificació de la integració;
- el prompt de la integració.

## Tècnica de continuació

Després de cada tasca, demana una resposta curta amb:

1. fitxers creats;
2. fitxers modificats;
3. proves executades;
4. errors pendents;
5. instrucció per continuar.

No demanis explicacions llargues del codi. Demana canvis i proves.
