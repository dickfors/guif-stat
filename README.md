# Guif Matchstatistik

Webbapp för att registrera statistik under pågående handbollsmatcher för Eskilstuna Guif dam. Gjord för iPad och iPhone.

**Öppna appen:** https://dickfors.github.io/guif-stat/

## Installera på iPad eller iPhone
1. Öppna adressen ovan i **Safari**.
2. Tryck på dela-knappen.
3. Välj **Lägg till på hemskärmen**.

Appen fungerar sedan utan internet.

## Data
Allt som registreras sparas bara på den egna enheten. Använd **Exportera** på startskärmen för backup eller för att skicka matcher till en annan tränare, som läser in dem med **Importera**.

## Uppdatera appen
När `index.html` ändras: höj versionen i `sw.js` (`guif-stat-v1` → `guif-stat-v2`) så att telefonerna hämtar den nya versionen.

## Molnsynk
Med inloggning (Firebase) synkas lag, matcher och statistik mellan alla tränare i samma lagutrymme, även live under match. Appen fungerar utan internet och synkar när nätet är tillbaka.

- Första enheten: **Logga in** → **Skapa nytt lagutrymme** (laddar upp enhetens data) → dela lagkoden.
- Övriga: **Logga in** → **Gå med** med lagkoden.
- Säkerhetsreglerna finns i `firestore.rules` och klistras in under Firestore → Regler i Firebase-konsolen.
