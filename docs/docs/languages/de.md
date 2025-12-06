# 🇩🇪 Deutsch

Die YAML-Standarddatei für die deutsche Sprache. *(Von Google Translate bereitgestellt)*

```yaml
messages:
  # Welcome and Premium Messages
  welcome-premium: "Willkommen, {playerName}!"
  upgrade-premium: "Upgrade auf Premium für exklusive Vorteile!"
  no-premium: "Dies ist eine Premium-Funktion!"

  # Player Health and Effects
  thirst-warning: "Warnung: Dein Durst ist niedrig!"
  thirst-buffer: "Dein Durst ist kritisch niedrig! Du fühlst dich schwach und verwirrt."
  water-purification: "Du hast das schmutzige Wasser in sauberes Wasser umgewandelt!"
  analgesia-used: "Du hast Analgesie verwendet. Deine Gesundheit wurde teilweise wiederhergestellt."
  bandage-used: "Du hast ein Verband verwendet. Die Gesundheitsregeneration wurde aktiviert."
  antibiotics-used: "Du hast Antibiotika verwendet. Alle negativen Effekte wurden entfernt."
  adrenaline-used: "Du hast Adrenalin verwendet. Du bist nun bei voller Gesundheit und hast für 30 Sekunden Schadensresistenz."
  infection-applied: "&4Du wurdest infiziert!"

  # Zombie Guts
  zombie-guts-effect-worn-off: "Der Zombie-Gutseffekt ist abgeklungen."
  zombie-guts-removed-rain: "Der Zombie-Gutseffekt wurde durch den Regen entfernt."
  zombie-guts-removed-water: "Der Zombie-Gutseffekt wurde durch das Eintauchen ins Wasser entfernt."
  zombie-guts-created: "*Du hast dich mit den ekelhaften Eingeweiden bedeckt und riechst jetzt faul!*"
  zombie-guts-chestplate: "Ich habe mein Oberteil mit Eingeweiden beschmiert... Eklig."
  zombie-guts-status-four: "&4Das sollte eine Weile halten."
  zombie-guts-status-three: "&cDas sollte lange genug halten."
  zombie-guts-status-two: "&6Ich werde nicht lange mit diesem Geruch leben."
  zombie-guts-status-one: "&eDas ist nur ein Klecks, es wird nicht lange halten."
  zombie-guts-status-zero: "&7Es hat keinen Sinn, mit diesem Geruch noch irgendwo hinzugehen."
  zombie-guts-plate-status-four: "&4Frisch und tropfend..."
  zombie-guts-plate-status-three: "&cRutschig vom Blut."
  zombie-guts-plate-status-two: "&6Trocknend. Der Gestank steigt."
  zombie-guts-plate-status-one: "&eZerfallend. Fliegen sammeln sich."
  zombie-guts-plate-status-zero: "&7Fällt auseinander..."

  # Events
  bloodmoon-rises: "&4☾ Der Blutmond steigt... ☾"
  bloodmoon-dawns: "&7☀ Der Blutmond vergeht, als die Morgendämmerung anbricht... ☀"
  bloodmoon-dread: "&7Ein Gefühl der Angst liegt in der Luft..."

  # Combat and Zombies
  zombie-headshot: "&4&lKopfschuss!"
  zombie-bodyshot: "Du hast den Zombie am Körper getroffen!"

  # Permissions and Restrictions
  no-permission: "Du hast keine Berechtigung, dies zu tun."
  players-only-cmd: "Nur Spieler können diesen Befehl ausführen."
  player-not-found: "Spieler konnte nicht gefunden werden."
  world-restriction-message: "Du kannst dieses Plugin in der aktuellen Welt nicht verwenden: %world%."
  xp-restricted-world: "XP-Sammlung ist in dieser Welt deaktiviert."
  xp-restricted-item: "XP-bezogene Gegenstände sind auf diesem Server deaktiviert."

  # Inventory and Crafting
  torch-used: "Die Fackel ist jetzt aktiv und bietet Nachtsicht!"
  torch-out-of-power: "Die Fackel hat keine Batterie mehr und kann nicht mehr verwendet werden."
  battery-empty: "Dieser Akku ist leer und kann nicht verwendet werden."
  battery-transferred: "Batterieleistung wurde auf die Fackel übertragen."
  cannot-switch-during-torch-use: "Du kannst während der Verwendung der Fackel keine Gegenstände wechseln."
  crafting-success: "Du hast den Gegenstand erfolgreich hergestellt!"
  crafting-blacklist: "&4Du kannst diesen Gegenstand nicht herstellen!"
  receipe-missing: "Das Rezept für diesen Gegenstand fehlt oder ist unvollständig."
  invalid-material: "Das Material für diesen Gegenstand ist ungültig."
  invalid-item: "Ungültiger Gegenstand. Verfügbare Gegenstände: Adrenalin, Analgesie, Antibiotika, Verband, Fackel, Batterie."
  invalid-qty: "Ungültige Menge. Bitte gib eine gültige Zahl ein."

  # Barbed Wire
  no-wire-cutters: "&cDu benötigst Drahtschneider, um Stacheldraht zu entfernen!"
  hurt-by-barbed-wire: "&cDu wurdest vom Stacheldraht verletzt!"

  # Rewards
  reward-money: "Du wurdest mit {amount} Münzen belohnt!"
  reward-items: "Du wurdest mit x{quantity} {itemName}(s) belohnt!"

  # Configuration and Updates
  config-reload: "Die Konfigurationseinstellungen wurden neu geladen."
  update-plots-err: "&fEs konnte {player}'s Plot-Anzahl nicht aktualisiert werden."

  # Plot Management
  plots-updated: '&2{player} Plot-Anzahl wurde um {new-plots} angepasst. Sie haben jetzt {total-plots} Plots übrig.'
  missing-plots: '&4Konnte deine verbleibenden Plots nicht abrufen.'
  missing-plots-err: '&4Du musst auswählen, wie viele Plots du {player} geben möchtest.'

  # Camp Commands
  camp-cmd-no-player: '&4Du musst einen Spieler auswählen.'
  camp-cmd-no-amount: '&4Du musst auswählen, wie viele Plots du {player} geben möchtest.'
  camp-cmd-no-neg: '&eDu kannst keine negativen Zahlen im /camp Befehl verwenden.'
  camp-created: '&eDein Lager wurde erstellt!'
  camp-created-err: '&4Das Lager konnte nicht erstellt werden.'
  camp-destroyed: '&eDein Lager ist nicht mehr sicher.'
  camp-destroyed-err: '&cDein Lager konnte nicht zerstört werden.'
  camp-exists: '&eDas Lager konnte nicht erstellt werden, weil ein Lager mit demselben Namen bereits existiert.'
  camp-info: '------------- &c&l[Lager Info] &r&f-------------'
  camp-info-msg: 'Konnte deine verbleibenden Blöcke nicht abrufen.'
  camp-plot-count: 'Du hast &2{plots} &r&fPlots übrig. Verwende sie weise.'
