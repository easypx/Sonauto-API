# Sonauto AI Song Generator

Ein einfaches Tool zum Generieren von Songs mit der Sonauto AI API. Dieses Projekt umfasst eine benutzerfreundliche Web-GUI und einen Proxy-Server, der Anfragen an die Sonauto-API weiterleitet.

## Funktionen
- **Web-GUI:** Eingabe eines Prompts und eines Sonauto-API-Keys zur Song-Generierung.
- **Song-Wiedergabe:** Wiedergabe und Download der generierten Songs direkt im Browser.
- **Proxy-Server:** Sichere Weiterleitung von Anfragen an die Sonauto-API.

## Voraussetzungen
- **Node.js**: Version 14 oder höher ([nodejs.org](https://nodejs.org)).
- Ein gültiger **Sonauto API-Key** ([sonauto.ai/developers](https://sonauto.ai/developers)).
- Ein moderner Webbrowser (z. B. Chrome, Firefox).

## Installation

1. **Repository klonen oder herunterladen:**
   ```bash
   git clone https://github.com/dein-benutzername/sonauto-projekt.git
   cd sonauto-projekt
   ```
2. **Abhängigkeiten installieren:**
   ```bash
   npm init -y
   npm install express axios cors
   ```
3. **Projektstruktur prüfen:**
Stelle sicher, dass die folgende Struktur vorhanden ist:
   ```bash
   sonauto-projekt/
   ├── public/
   │   └── sonauto-gui.html
   ├── server.js
   ├── package.json
   └── .gitignore
   ```

4. **Startanleitung Server starten:**
   ```bash
   node server.js
   Der Server läuft auf http://localhost:3000.
   ```

5. **Öffne im Browser:**
http://localhost:3000/sonauto-gui.html

6. **Song generieren:**
Gib deinen Sonauto-API-Key ein.
Beschreibe den Song im Prompt-Feld (z. B. „Ein energiegeladener Rock-Song über Abenteuer“).
Klicke auf „Generate Song“ und warte ca. 1-2 Minuten.

**API-Dokumentation:**
Details zur Sonauto-API findest du unter: Sonauto Developers.

**Fehlerbehebung:**
- Fehler 500 (Internal Server Error): Überprüfe, ob der API-Key gültig ist und die Sonauto-API erreichbar ist.
- GUI lädt nicht: Stelle sicher, dass sonauto-gui.html im public-Ordner liegt.
- Ad-Blocker: Deaktiviere Ad-Blocker (z. B. uBlock Origin) für localhost, um Interferenzen zu vermeiden.

**Lizenz:**
Dieses Projekt ist unter der MIT-Lizenz (LICENSE) lizenziert.




