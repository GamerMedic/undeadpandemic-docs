# 🇫🇷 Français

Le fichier YAML par défaut pour la langue française.

```yaml
messages:
  # Welcome and Premium Messages
  welcome-premium: "Bienvenue, {playerName} !"
  upgrade-premium: "Passez à la version premium pour des avantages exclusifs !"
  no-premium: "C'est une fonctionnalité Premium !"

  # Player Health and Effects
  thirst-warning: "Avertissement : Votre soif est faible !"
  thirst-buffer: "Votre soif est critique ! Vous vous sentez faible et confus."
  water-purification: "Vous avez purifié l'eau sale en eau propre !"
  analgesia-used: "Vous avez utilisé de l'Analgésie. Votre santé a été partiellement restaurée."
  bandage-used: "Vous avez utilisé un Bandage. La régénération de la santé a été activée."
  antibiotics-used: "Vous avez utilisé des Antibiotiques. Tous les effets négatifs ont été supprimés !"
  adrenaline-used: "Vous avez utilisé de l'Adrénaline. Vous êtes maintenant à pleine santé et avez une résistance aux dégâts pendant 30 secondes."
  infection-applied: "&4Vous avez été infecté !"

  # Zombie Guts
  zombie-guts-effect-worn-off: "L'effet des Tripes de Zombie a disparu."
  zombie-guts-removed-rain: "L'effet des Tripes de Zombie a été supprimé à cause de la pluie."
  zombie-guts-removed-water: "L'effet des Tripes de Zombie a été supprimé en entrant dans l'eau."
  zombie-guts-created: "*Vous vous êtes couvert de ces tripes dégoûtantes et maintenant vous sentez la puanteur !*"
  zombie-guts-chestplate: "Je me suis enduit la chemise de tripes... Beurk."
  zombie-guts-status-four: "&4Cela devrait durer un moment."
  zombie-guts-status-three: "&cCela devrait durer assez longtemps."
  zombie-guts-status-two: "&6Il ne me reste pas beaucoup de temps avec ça."
  zombie-guts-status-one: "&eC'est juste une tache, ça ne durera pas longtemps."
  zombie-guts-status-zero: "&7Ça ne sert à rien d'aller quelque part avec ça."
  zombie-guts-plate-status-four: "&4Frais et dégoulinant..."
  zombie-guts-plate-status-three: "&cGlissant de sang."
  zombie-guts-plate-status-two: "&6En train de sécher. L'odeur devient de plus en plus forte."
  zombie-guts-plate-status-one: "&eEn décomposition. Les mouches se rassemblent."
  zombie-guts-plate-status-zero: "&7En train de se décomposer..."

  # Events
  bloodmoon-rises: "&4☾ La Lune Sanglante se lève... ☾"
  bloodmoon-dawns: "&7☀ La Lune Sanglante disparaît à l'aube... ☀"
  bloodmoon-dread: "&7Un sentiment de terreur envahit l'air..."

  # Combat and Zombies
  zombie-headshot: "&4&lTir dans la tête !"
  zombie-bodyshot: "Vous avez frappé le corps du zombie !"

  # Permissions and Restrictions
  no-permission: "Vous n'avez pas la permission de faire cela."
  players-only-cmd: "Seuls les joueurs peuvent exécuter cette commande."
  player-not-found: "Impossible de trouver le joueur."
  world-restriction-message: "Vous ne pouvez pas utiliser ce plugin dans le monde actuel : %world%."
  xp-restricted-world: "La collecte d'XP est désactivée dans ce monde."
  xp-restricted-item: "Les objets liés à l'XP sont désactivés sur ce serveur."

  # Inventory and Crafting
  torch-used: "La torche est maintenant active et fournit la vision nocturne !"
  torch-out-of-power: "La torche est à court de batterie et ne peut pas être utilisée."
  battery-empty: "Cette batterie est vide et ne peut pas être utilisée."
  battery-transferred: "La batterie a été transférée à la torche."
  cannot-switch-during-torch-use: "Vous ne pouvez pas changer d'objet pendant que la torche est en usage."
  crafting-success: "Vous avez créé l'objet avec succès !"
  crafting-blacklist: "&4Vous ne pouvez pas créer cet objet !"
  receipe-missing: "La recette pour cet objet est manquante ou incomplète."
  invalid-material: "Le matériau pour cet objet est invalide."
  invalid-item: "Objet invalide. Objets disponibles : Adrénaline, Analgésie, Antibiotiques, Bandage, Torche, Batterie."
  invalid-qty: "Quantité invalide. Veuillez entrer un nombre valide."

  # Barbed Wire
  no-wire-cutters: "&cVous avez besoin de coupe-fil pour enlever le fil barbelé !"
  hurt-by-barbed-wire: "&cVous êtes blessé par le fil barbelé !"

  # Rewards
  reward-money: "Vous avez été récompensé avec {amount} pièces !"
  reward-items: "Vous avez été récompensé avec x{quantity} {itemName}(s) !"

  # Configuration and Updates
  config-reload: "Les paramètres de configuration ont été rechargés."
  update-plots-err: "&fImpossible de mettre à jour le nombre de parcelles de {player}."

  # Plot Management
  plots-updated: '&2Le nombre de parcelles de {player} a été ajusté de {new-plots}. Il lui reste {total-plots} parcelles.'
  missing-plots: '&4Impossible de récupérer le nombre restant de parcelles.'
  missing-plots-err: '&4Vous devez choisir combien de parcelles attribuer à {player}.'

  # Camp Commands
  camp-cmd-no-player: '&4Vous devez sélectionner un joueur.'
  camp-cmd-no-amount: '&4Vous devez choisir combien de parcelles donner à {player}.'
  camp-cmd-no-neg: '&eVous ne pouvez pas utiliser de nombres négatifs dans la commande /camp.'
  camp-created: '&eVotre camp a été créé !'
  camp-created-err: '&4Impossible de créer le camp.'
  camp-destroyed: "&eVotre camp n'est plus sûr."
  camp-destroyed-err: '&cImpossible de détruire votre camp.'
  camp-exists: "&eLe camp n'a pas pu être créé car un autre camp du même nom existe déjà."
  camp-info: '------------- &c&l[Informations sur le camp] &r&f-------------'
  camp-info-msg: 'Impossible de récupérer le nombre restant de blocs.'
  camp-plot-count: 'Il vous reste &2{plots} &r&fparcelles. Utilisez-les judicieusement.'
