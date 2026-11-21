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

## Spara på servern, roller och live
Allt sparas på servern (Firebase) och synkas live mellan alla enheter i samma lagutrymme. Ingen inloggning behövs.

- **Lagkod (8 tecken):** spelare och åskådare – kan följa matcher live och se statistik, men inte ändra.
- **Admin-kod (8+6 tecken):** tränare – kan skapa och ändra matcher, lag och spelare.
- Första starten visar en välkomstskärm: *Jag har en lagkod*, *Skapa ett nytt lag* eller *Bara prova*.
- Länken `https://dickfors.github.io/guif-stat/#lag-KOD` fyller i lagkoden automatiskt.
- Kräver att *Anonymous* är påslaget i Firebase Authentication. Säkerhetsreglerna finns i `firestore.rules`.
