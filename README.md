# DreamGame

DreamGame ist ein privates Projekt für eine mobile Game-Discovery-App. Die Grundidee dahinter war ein simpler Game-Finder, über den man ohne überladene Store-Seiten schnell neue Spiele entdecken und sich die wichtigsten Eckdaten (Plattformen, Spielmodus, aktuelle Spielerzahlen, Bewertungen, Preis und Trailer) anschauen kann.

## Projektstatus (Frontend-Prototyp)

Ursprünglich sollte die Plattform im Hintergrund regelmäßig über die Steam-API mit aktuellen Spieledaten versorgt werden. In diesem Repository ist vor allem das Frontend umgesetzt. 

Damit die App ohne Datenbank-Setup direkt lokal gestartet und durchgeklickt werden kann, laufen die Ansichten aktuell mit statischen Testdaten aus der `rawdata.js`. Erste Ansätze für den Backend-Datenimport über die Steam-API und die Speicherung in MongoDB liegen bereits unter `pages/api/` (`fetchDetails.js`, `processBatches.js`) sowie `lib/`, sind aber noch nicht an das Frontend angebunden. Auch das Filter-Menü in der Spieleliste ist bisher rein als UI-Oberfläche gebaut.

## Was im Frontend umgesetzt ist

- **Startseite & Entdecken-Modus:** Kartenansicht für das "Spiel des Tages" bzw. zum Durchklicken von Spielen inklusive Ausklapp-Ansicht für weitere Details, Social-Media-Links und eingebettetem YouTube-Trailer.
- **Spieleliste:** Kompakte Übersicht aller Spiele mit direkter Verlinkung auf die jeweilige Detailseite (`/[id]`) und einem ausklappbaren Filter-Overlay.
- **Neueste Spiele:** Listenansicht mit Fokus auf Release-Daten, Spielerzahlen und Preis.
- **Favoriten:** Merkliste, über die man Spiele markieren und wieder entfernen kann (gespeichert im `localStorage`).
- **Login-Screen:** UI-Entwurf für die Anmeldung unter `/login`.

## Verwendete Technologien

- Next.js (Pages Router) & React 18
- styled-components für das Styling
- Material UI Icons (`@mui/icons-material`)
- `use-local-storage` für die Favoritenliste
- `next-pwa` (Basis-Setup für Progressive Web App)
- MongoDB (`mongodb`) für die vorbereiteten API-Routen

## Lokal starten

Für das Frontend wird keine Datenbank benötigt, da die Daten lokal aus der `rawdata.js` geladen werden.

```bash
npm install
npm run dev
```

Danach läuft das Projekt unter `http://localhost:3000`. Da das Layout für Smartphones ausgelegt ist, schaut man sich die Seite im Browser am besten über die DevTools in der mobilen Ansicht an.
