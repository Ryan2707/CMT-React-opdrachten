# Debug & Test Rapportage – Favorite Movies App

## 📌 Project
Favorite Movies List (React)

## 🐞 Bug Fixes

### Bug 1: useState is not defined
- **Probleem:** De applicatie crashte bij het renderen van componenten.
- **Oorzaak:** De React hook `useState` was niet geïmporteerd in `App.jsx` en `AddMovie.jsx`.
- **Oplossing:** `useState` geïmporteerd uit React in beide componenten.

---

### Bug 2: Films konden niet correct worden toegevoegd
- **Probleem:** Nieuwe films werden niet toegevoegd aan de lijst.
- **Oorzaak:** De logica voor het controleren van duplicaten was omgedraaid.
- **Oplossing:** De `includes`-check is gecorrigeerd zodat alleen bestaande films worden geblokkeerd.

---

### Bug 3: Verkeerde state setter gebruikt
- **Probleem:** Het toevoegen van een film veroorzaakte een JavaScript error.
- **Oorzaak:** De functie `setMovie` werd gebruikt in plaats van `setMovies`.
- **Oplossing:** De juiste state setter (`setMovies`) is gebruikt.

---

### Bug 4: Oneindige re-render in AddMovie component
- **Probleem:** De applicatie liep vast tijdens het renderen.
- **Oorzaak:** `setMovie('')` werd buiten de submit handler aangeroepen.
- **Oplossing:** De state reset is verplaatst naar de `handleSubmit` functie.

---

### Bug 5: Lege of spatie-only filmtitels toegestaan
- **Probleem:** Films met een lege of alleen spaties als titel konden worden toegevoegd.
- **Oorzaak:** Er was geen input validatie met `trim()`.
- **Oplossing:** `trim()` toegevoegd om lege invoer te blokkeren.

---

### Bug 6: React warning door ontbrekende key
- **Probleem:** React gaf een warning bij het renderen van de filmlijst.
- **Oorzaak:** Lijstitems hadden geen unieke `key`.
- **Oplossing:** De filmtitel wordt nu gebruikt als `key` in `MovieList`.

---

## 🧪 Test Results

### User Story 1: Movies toevoegen aan favorietenlijst — ✅ PASSED
- Invoerveld aanwezig: ✅ PASSED
- Toevoegknop aanwezig: ✅ PASSED
- Film wordt toegevoegd bij klik: ✅ PASSED
- Film verschijnt in lijst: ✅ PASSED
- Lege invoer geeft foutmelding: ✅ PASSED
- Inputveld wordt leeggemaakt na toevoegen: ✅ PASSED

---

### User Story 2: Films verwijderen uit favorietenlijst — ✅ PASSED
- Elke film heeft een verwijderknop: ✅ PASSED
- Film wordt verwijderd bij klik: ✅ PASSED
- Film verdwijnt direct uit lijst: ✅ PASSED
- Geen foutmelding bij succesvol verwijderen: ✅ PASSED

---

### User Story 3: Duplicate films voorkomen — ✅ PASSED
- Duplicate geeft foutmelding: ✅ PASSED
- Duplicate wordt niet toegevoegd: ✅ PASSED
- Lijst bevat geen duplicaten: ✅ PASSED

---

### User Story 4: Lege lijstmelding tonen — ✅ PASSED
- Lege lijstmelding zichtbaar bij geen films: ✅ PASSED
- Melding verdwijnt bij toevoegen van film: ✅ PASSED
- Melding verschijnt opnieuw bij verwijderen van alle films: ✅ PASSED

---

## ✅ Conclusie

Alle bugs zijn succesvol opgelost en alle user stories voldoen aan de gestelde acceptatiecriteria.  
De applicatie werkt correct en stabiel volgens de opdrachtomschrijving.
