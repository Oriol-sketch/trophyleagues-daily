# Guia de copiar, adjuntar i enviar a AI Studio

Aquesta és la guia operativa. Segueix-la en ordre. No adjuntis tota la carpeta a cada prompt.

## 0. Crear projecte

Obre Google AI Studio, crea una aplicació nova i prepara un projecte buit. Si AI Studio permet afegir fitxers al context del projecte, afegeix-los allà. Si no, adjunta els fitxers indicats en cada fase.

## 1. Context inicial

Adjunta exactament:

- `00_GUIA_GENERAL/com_comencar.md`
- `00_GUIA_GENERAL/politica_tokens.md`
- `01_APP_BASE/especificacio.md`
- `01_APP_BASE/arquitectura.md`

Enganxa aquest missatge:

```text
Llegeix els quatre fitxers adjunts com l’especificació estable del projecte TrophyLeagues Daily. No construeixis encara cap joc. Confirma que has entès la navegació, l’arquitectura, la política de context i l’ordre de treball. A partir d’ara, treballarem per fases. No repeteixis els documents en les respostes i no modifiquis fitxers fora de la tasca activa.
```

## 2. Crear la base de l’app

Adjunta:

- `01_APP_BASE/especificacio.md`
- `01_APP_BASE/arquitectura.md`
- `01_APP_BASE/prompts/01_crear_arquitectura.md`

Enganxa:

```text
Executa la tasca del prompt adjunt 01_crear_arquitectura.md. Abans d’escriure codi, mostra l’arbre de fitxers i el pla. Després implementa només l’arquitectura base. Al final mostra fitxers creats, fitxers modificats, proves executades i errors pendents.
```

## 3. Aplicar disseny i persistència local

Per al disseny, adjunta:

- `01_APP_BASE/especificacio.md`
- `01_APP_BASE/arquitectura.md`
- `01_APP_BASE/prompts/02_disseny_visual.md`

Envia:

```text
Executa només la tasca de disseny visual. No afegeixis jocs ni backend. Prova les mides mòbil i escriptori indicades i informa dels fitxers modificats.
```

Per a dades, adjunta:

- `01_APP_BASE/especificacio.md`
- `01_APP_BASE/arquitectura.md`
- `01_APP_BASE/prompts/03_dades_localstorage.md`

Envia:

```text
Executa només la tasca de dades i localStorage. No afegeixis funcionalitats socials ni backend.
```

## 4. Afegir cada joc

Per cada carpeta de joc, adjunta només:

- `01_APP_BASE/arquitectura.md`
- `01_APP_BASE/especificacio.md`
- `especificacio.md` del joc;
- `data.json` del joc;
- `01_construccio.md` del joc.

Envia:

```text
Executa només el prompt de construcció adjunt. Reutilitza els components comuns existents. No reescriguis els altres jocs. Mostra primer els fitxers que modificaràs i atura’t si falta alguna dada.
```

Després prova manualment. Per QA, adjunta només:

- `especificacio.md` del joc;
- `data.json` del joc;
- `02_qa.md` del joc.

Envia:

```text
Executa el QA del prompt adjunt sense afegir funcionalitats. Retorna una taula d’errors reproduïbles.
```

Si hi ha errors, adjunta:

- `especificacio.md` del joc;
- `03_correccio.md` del joc;
- resultat del QA.

Envia:

```text
Corregeix només els errors reproduïbles del QA. No canviïs el disseny ni afegeixis funcionalitats noves.
```

Repeteix aquest procés en aquest ordre:

1. `02_JOC_DRAFT_ONZES`
2. `03_JOC_QUIN_JUGADOR`
3. `04_JOC_FITXA_PASSA`
4. `05_JOC_MANAGER_60`
5. `06_JOC_DRAFT_IMPOSSIBLE`
6. `07_JOC_PRESS_CONFERENCE`
7. `08_JOC_CARRERA_MISTERIOSA`
8. `09_JOC_QUI_GUANYA`
9. `10_JOC_MERCAT`
10. `11_JOC_VAR`
11. `12_JOC_ASCENS`
12. `13_JOC_PRESIDENT`
13. `14_JOC_FOOTBALL_CHAOS`
14. `15_JOC_ON_ES_JUGADOR`
15. `16_JOC_DAILY`

## 5. Integració social

Quan tots els jocs funcionin, adjunta:

- `01_APP_BASE/arquitectura.md`
- `17_INTEGRACIO_SOCIAL/especificacio.md`
- el prompt social corresponent.

Executa en ordre: classificació local, grups amb codi i temporades. No afegeixis backend encara.

## 6. Testing final

Adjunta:

- `01_APP_BASE/arquitectura.md`
- `18_TESTING/01_checklist.md`
- `18_TESTING/01_prompt.md`

Envia:

```text
Executa l’auditoria completa. No afegeixis funcionalitats. Corregeix només errors crítics i torna a provar-los. Retorna una taula final amb estat PASS o FAIL.
```

## 7. Backend real

Només després de validar la PWA, adjunta:

- `01_APP_BASE/arquitectura.md`
- `22_BACKEND/especificacio.md`

Envia:

```text
No implementis encara. Dissenya l’arquitectura de backend, endpoints, autenticació, validació d’intents i migració des de localStorage. Mostra riscos, costos i decisions pendents.
```

Després de revisar el disseny, demana la implementació en una tasca separada.

## 8. Publicació

Adjunta:

- `01_APP_BASE/arquitectura.md`
- `23_DEPLOYMENT/guia.md`
- `25_CHECKLIST_FINAL/lliurament.md`

Envia:

```text
Prepara el projecte per publicar-lo segons els fitxers adjunts. No publiquis ni utilitzis secrets. Retorna una checklist i indica qualsevol bloqueig.
```

## Regla per no gastar tokens

No enganxis el contingut dels documents dins del missatge si ja els has adjuntat. No adjuntis especificacions d’altres jocs. No demanis resums llargs. Demana sempre fitxers modificats, proves i errors pendents.
