---
sidebar_position: 10
---

# 🌍 Languages

import React, { useState } from 'react';

export const LanguageSelector = () => {
  const [lang, setLang] = useState('en');

  const yamlData = {
    en: `
messages:
  # Welcome and Premium Messages
  welcome-premium: "Welcome, {playerName}!"
  upgrade-premium: "Upgrade to premium for exclusive benefits!"
  no-premium: "This is a Premium feature!"
  # Player Health and Effects
  thirst-warning: "Warning: Your thirst is low!"
  thirst-buffer: "Your thirst is critically low! You feel weak and confused."
  water-purification: "You purified dirty water into clean water!"
  analgesia-used: "You used Analgesia. Your health was partially restored."
  bandage-used: "You used a Bandage. Health regeneration has been activated."
  antibiotics-used: "You used Antibiotics. All negative effects removed!"
  adrenaline-used: "You used Adrenaline. You are now at full health with damage resistance for 30 seconds."
  infection-applied: "&4You have been infected!"
  # Zombie Guts
  zombie-guts-effect-worn-off: "Zombie Guts effect has worn off."
  zombie-guts-removed-rain: "Zombie Guts effect removed due to rain."
  zombie-guts-removed-water: "Zombie Guts effect removed due to water."
  zombie-guts-created: "*You have covered yourself with disgusting guts and now smell of rot!*"
  zombie-guts-chestplate: "I smeared my chestplate with guts... Gross."
  zombie-guts-status-four: "&4This should last a while."
  zombie-guts-status-three: "&cThis should last long enough."
  zombie-guts-status-two: "&6Not much time left with this."
  zombie-guts-status-one: "&eJust a little, won't last long."
  zombie-guts-status-zero: "&7No point going anywhere with this."
  zombie-guts-plate-status-four: "&4Fresh and dripping..."
  zombie-guts-plate-status-three: "&cSlippery with blood."
  zombie-guts-plate-status-two: "&6Drying. Smell increases."
  zombie-guts-plate-status-one: "&eRotting. Flies gathering."
  zombie-guts-plate-status-zero: "&7Falling apart..."
  # Events
  bloodmoon-rises: "&4☾ The Blood Moon rises... ☾"
  bloodmoon-dawns: "&7☀ The Blood Moon disappears at dawn... ☀"
  bloodmoon-dread: "&7A feeling of dread fills the air..."
  # Combat and Zombies
  zombie-headshot: "&4&lHeadshot!"
  zombie-bodyshot: "You hit the zombie body!"
  # Permissions and Restrictions
  no-permission: "You do not have permission to do that."
  players-only-cmd: "Only players can execute this command."
  player-not-found: "Player not found."
  world-restriction-message: "You cannot use this plugin in the current world: %world%."
  xp-restricted-world: "XP collection is disabled in this world."
  xp-restricted-item: "XP-related items are disabled on this server."
  # Inventory and Crafting
  torch-used: "Torch is now active and provides night vision!"
  torch-out-of-power: "Torch is out of power and cannot be used."
  battery-empty: "This battery is empty and cannot be used."
  battery-transferred: "Battery has been transferred to the torch."
  cannot-switch-during-torch-use: "Cannot switch items while torch is in use."
  crafting-success: "You successfully crafted the item!"
  crafting-blacklist: "&4You cannot craft this item!"
  receipe-missing: "Recipe for this item is missing or incomplete."
  invalid-material: "Material for this item is invalid."
  invalid-item: "Invalid item. Available: Adrenaline, Analgesia, Antibiotics, Bandage, Torch, Battery."
  invalid-qty: "Invalid quantity. Please enter a valid number."
  # Barbed Wire
  no-wire-cutters: "&cYou need wire cutters to remove barbed wire!"
  hurt-by-barbed-wire: "&cYou were hurt by barbed wire!"
  # Rewards
  reward-money: "You have been rewarded with {amount} coins!"
  reward-items: "You have been rewarded with x{quantity} {itemName}(s)!"
  # Configuration and Updates
  config-reload: "Configuration settings have been reloaded."
  update-plots-err: "&fCould not update {player}'s plot count."
  # Plot Management
  plots-updated: '&2{player} plot count has been adjusted by {new-plots}. They now have {total-plots} plots left.'
  missing-plots: '&4Could not retrieve remaining plot count.'
  missing-plots-err: '&4You must select how many plots to give {player}.'
  # Camp Commands
  camp-cmd-no-player: '&4You must select a player.'
  camp-cmd-no-amount: '&4You must select how many plots to give {player}.'
  camp-cmd-no-neg: '&eYou cannot use negative numbers in /camp command.'
  camp-created: '&eYour camp has been created!'
  camp-created-err: '&4Could not create camp.'
  camp-destroyed: '&eYour camp is no longer safe.'
  camp-destroyed-err: '&cCould not destroy your camp.'
  camp-exists: '&eCould not create camp because one with that name already exists.'
  camp-info: '------------- &c&l[Camp Info] &r&f-------------'
  camp-info-msg: 'Could not retrieve remaining block count.'
  camp-plot-count: 'You have &2{plots} &r&fplots left. Use wisely.'
`,

    es: `messages:
  # Welcome and Premium Messages
  welcome-premium: "¡Bienvenido, {playerName}!"
  upgrade-premium: "¡Actualiza a premium para beneficios exclusivos!"
  no-premium: "¡Esta es una función Premium!"

  # Player Health and Effects
  thirst-warning: "¡Advertencia: Tu sed está baja!"
  thirst-buffer: "¡Tu sed es críticamente baja! Te sientes débil y confundido."
  water-purification: "¡Has purificado el agua sucia en agua limpia!"
  analgesia-used: "Has usado Analgesia. Tu salud se ha restaurado parcialmente."
  bandage-used: "Has usado un Vendaje. La regeneración de salud ha sido activada."
  antibiotics-used: "Has usado Antibióticos. ¡Todos los efectos negativos han sido eliminados!"
  adrenaline-used: "Has usado Adrenalina. Ahora tienes salud completa y resistencia a daños durante 30 segundos."
  infection-applied: "&4¡Has sido infectado!"

  # Zombie Guts
  zombie-guts-effect-worn-off: "El efecto de las Tripas de Zombie ha desaparecido."
  zombie-guts-removed-rain: "El efecto de las Tripas de Zombie ha sido eliminado por la lluvia."
  zombie-guts-removed-water: "El efecto de las Tripas de Zombie ha sido eliminado por el agua."
  zombie-guts-created: "*¡Te has cubierto con esas repugnantes tripas y ahora hueles a putrefacción!*"
  zombie-guts-chestplate: "Me he untado la pechera con tripas... Qué asco."
  zombie-guts-status-four: "&4Esto debería durar un tiempo."
  zombie-guts-status-three: "&cEsto debería durar lo suficiente."
  zombie-guts-status-two: "&6No queda mucho tiempo con esto."
  zombie-guts-status-one: "&eEs solo una mancha, no durará mucho."
  zombie-guts-status-zero: "&7No sirve de nada ir a algún lugar con esto."
  zombie-guts-plate-status-four: "&4Fresco y goteando..."
  zombie-guts-plate-status-three: "&cResbaladizo de sangre."
  zombie-guts-plate-status-two: "&6Secándose. El olor aumenta."
  zombie-guts-plate-status-one: "&eDescomponiéndose. Las moscas se agrupan."
  zombie-guts-plate-status-zero: "&7Cayéndose a pedazos..."

  # Events
  bloodmoon-rises: "&4☾ La Luna de Sangre se eleva... ☾"
  bloodmoon-dawns: "&7☀ La Luna de Sangre desaparece al amanecer... ☀"
  bloodmoon-dread: "&7Un sentimiento de terror llena el aire..."

  # Combat and Zombies
  zombie-headshot: "&4&l¡Disparo a la cabeza!"
  zombie-bodyshot: "¡Has golpeado el cuerpo del zombi!"

  # Permissions and Restrictions
  no-permission: "No tienes permiso para hacer eso."
  players-only-cmd: "Solo los jugadores pueden ejecutar este comando."
  player-not-found: "Jugador no encontrado."
  world-restriction-message: "No puedes usar este plugin en el mundo actual: %world%."
  xp-restricted-world: "La recolección de XP está deshabilitada en este mundo."
  xp-restricted-item: "Los objetos relacionados con XP están deshabilitados en este servidor."

  # Inventory and Crafting
  torch-used: "¡La antorcha está ahora activa y proporciona visión nocturna!"
  torch-out-of-power: "La antorcha está sin energía y no puede ser usada."
  battery-empty: "Esta batería está vacía y no puede ser usada."
  battery-transferred: "La batería ha sido transferida a la antorcha."
  cannot-switch-during-torch-use: "No puedes cambiar de objeto mientras la antorcha está en uso."
  crafting-success: "¡Has creado el objeto con éxito!"
  crafting-blacklist: "&4¡No puedes crear este objeto!"
  receipe-missing: "La receta para este objeto falta o está incompleta."
  invalid-material: "El material para este objeto es inválido."
  invalid-item: "Objeto inválido. Disponibles: Adrenalina, Analgesia, Antibióticos, Vendaje, Antorcha, Batería."
  invalid-qty: "Cantidad inválida. Por favor ingresa un número válido."

  # Barbed Wire
  no-wire-cutters: "&c¡Necesitas cortaalambres para remover el alambre de púas!"
  hurt-by-barbed-wire: "&c¡Has sido herido por el alambre de púas!"

  # Rewards
  reward-money: "¡Has sido recompensado con {amount} monedas!"
  reward-items: "¡Has sido recompensado con x{quantity} {itemName}(s)!"

  # Configuration and Updates
  config-reload: "Se han recargado las configuraciones."
  update-plots-err: "&fNo se pudo actualizar el número de parcelas de {player}."

  # Plot Management
  plots-updated: '&2El número de parcelas de {player} ha sido ajustado a {new-plots}. Ahora tienen {total-plots} parcelas restantes.'
  missing-plots: '&4No se pudo recuperar el número de parcelas restantes.'
  missing-plots-err: '&4Debes seleccionar cuántas parcelas darle a {player}.'

  # Camp Commands
  camp-cmd-no-player: '&4Debes seleccionar un jugador.'
  camp-cmd-no-amount: '&4Debes seleccionar cuántas parcelas darle a {player}.'
  camp-cmd-no-neg: '&eNo puedes usar números negativos en el comando /camp.'
  camp-created: '&e¡Tu campamento ha sido creado!'
  camp-created-err: '&4No se pudo crear el campamento.'
  camp-destroyed: '&eTu campamento ya no es seguro.'
  camp-destroyed-err: '&cNo se pudo destruir tu campamento.'
  camp-exists: '&eNo se pudo crear el campamento porque ya existe uno con el mismo nombre.'
  camp-info: '------------- &c&l[Información del Campamento] &r&f-------------'
  camp-info-msg: 'No se pudo recuperar el número de bloques restantes.'
  camp-plot-count: 'Te quedan &2{plots} &r&fparcelas. Úsalas sabiamente.'
`,
    fr: `messages:
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
  camp-cmd-no-amount: '&4Vous devez choisir combien de parcelles attribuer à {player}.'
  camp-cmd-no-neg: '&eVous ne pouvez pas utiliser de nombres négatifs dans la commande /camp.'
  camp-created: '&eVotre camp a été créé !'
  camp-created-err: '&4Impossible de créer le camp.'
  camp-destroyed: "&eVotre camp n'est plus sûr."
  camp-destroyed-err: '&cImpossible de détruire votre camp.'
  camp-exists: "&eLe camp n'a pas pu être créé car un autre camp du même nom existe déjà."
  camp-info: '------------- &c&l[Informations sur le camp] &r&f-------------'
  camp-info-msg: 'Impossible de récupérer le nombre restant de blocs.'
  camp-plot-count: 'Il vous reste &2{plots} &r&fparcelles. Utilisez-les judicieusement.'
`,
    nl: `messages:
  # Welcome and Premium Messages
  welcome-premium: "Welkom, {playerName}!"
  upgrade-premium: "Upgrade naar premium voor exclusieve voordelen!"
  no-premium: "Dit is een premium functie!"

  # Player Health and Effects
  thirst-warning: "Waarschuwing: Je dorst is laag!"
  thirst-buffer: "Je dorst is kritiek laag! Je voelt je zwak en verward."
  water-purification: "Je hebt het vuile water gezuiverd naar schoon water!"
  analgesia-used: "Je hebt Analgesia gebruikt. Je gezondheid is gedeeltelijk hersteld."
  bandage-used: "Je hebt een Verband gebruikt. Gezondheidsregeneratie is ingeschakeld."
  antibiotics-used: "Je hebt Antibiotica gebruikt. Alle negatieve effecten zijn verwijderd!"
  adrenaline-used: "Je hebt Adrenaline gebruikt. Je bent nu volledig gezond en hebt 30 seconden schadebestendigheid."
  infection-applied: "&4Je bent geïnfecteerd!"

  # Zombie Guts
  zombie-guts-effect-worn-off: "Het effect van de Zombie Guts is verdwenen."
  zombie-guts-removed-rain: "Het effect van de Zombie Guts is verwijderd door de regen."
  zombie-guts-removed-water: "Het effect van de Zombie Guts is verwijderd door het betreden van water."
  zombie-guts-created: "*Je hebt jezelf bedekt met die walgelijke ingewanden en nu stink je naar rotting!*"
  zombie-guts-chestplate: "Ik heb mijn bovenkleding besmeurd met ingewanden... Bah."
  zombie-guts-status-four: "&4Dit zou een tijdje moeten duren."
  zombie-guts-status-three: "&cDit zou genoeg moeten duren."
  zombie-guts-status-two: "&6Ik heb niet veel tijd meer met dit."
  zombie-guts-status-one: "&eDit is slechts een vlek, het duurt niet lang."
  zombie-guts-status-zero: "&7Dit heeft geen zin, je kunt hier niet verder mee."
  zombie-guts-plate-status-four: "&4Vers en druipend..."
  zombie-guts-plate-status-three: "&cGlad van bloed."
  zombie-guts-plate-status-two: "&6Aan het opdrogen. De geur wordt sterker."
  zombie-guts-plate-status-one: "&eIn ontbinding. Vliegen verzamelen zich."
  zombie-guts-plate-status-zero: "&7Het valt uit elkaar..."

  # Events
  bloodmoon-rises: "&4☾ De Bloedmaan stijgt... ☾"
  bloodmoon-dawns: "&7☀ De Bloedmaan verdwijnt bij het ochtendgloren... ☀"
  bloodmoon-dread: "&7Een gevoel van angst vult de lucht..."

  # Combat and Zombies
  zombie-headshot: "&4&lHoofdschot!"
  zombie-bodyshot: "Je hebt het lichaam van de zombie geraakt!"

  # Permissions and Restrictions
  no-permission: "Je hebt geen toestemming om dit te doen."
  players-only-cmd: "Alleen spelers kunnen deze commando uitvoeren."
  player-not-found: "Speler niet gevonden."
  world-restriction-message: "Je kunt deze plugin niet gebruiken in de huidige wereld: %world%."
  xp-restricted-world: "XP verzamelen is uitgeschakeld in deze wereld."
  xp-restricted-item: "XP-gerelateerde items zijn uitgeschakeld op deze server."

  # Inventory and Crafting
  torch-used: "De fakkel is nu actief en biedt nachtzicht!"
  torch-out-of-power: "De fakkel is zonder stroom en kan niet gebruikt worden."
  battery-empty: "Deze batterij is leeg en kan niet gebruikt worden."
  battery-transferred: "De batterij is overgedragen naar de fakkel."
  cannot-switch-during-torch-use: "Je kunt geen items wisselen terwijl de fakkel in gebruik is."
  crafting-success: "Je hebt het item succesvol gecreëerd!"
  crafting-blacklist: "&4Je kunt dit item niet maken!"
  receipe-missing: "Het recept voor dit item ontbreekt of is incompleet."
  invalid-material: "Het materiaal voor dit item is ongeldig."
  invalid-item: "Ongeldig item. Beschikbare items: Adrenaline, Analgesia, Antibiotica, Verband, Fakkel, Batterij."
  invalid-qty: "Ongeldige hoeveelheid. Voer een geldig nummer in."

  # Barbed Wire
  no-wire-cutters: "&cJe hebt draadknippers nodig om het prikkeldraad te verwijderen!"
  hurt-by-barbed-wire: "&cJe bent gewond door het prikkeldraad!"

  # Rewards
  reward-money: "Je bent beloond met {amount} munten!"
  reward-items: "Je bent beloond met x{quantity} {itemName}(s)!"

  # Configuration and Updates
  config-reload: "De configuratie-instellingen zijn opnieuw geladen."
  update-plots-err: "&fKon het aantal percelen van {player} niet bijwerken."

  # Plot Management
  plots-updated: '&2Het aantal percelen van {player} is aangepast met {new-plots}. Ze hebben nu {total-plots} percelen over.'
  missing-plots: '&4Kon het resterende aantal percelen niet ophalen.'
  missing-plots-err: '&4Je moet kiezen hoeveel percelen je aan {player} wilt geven.'

  # Camp Commands
  camp-cmd-no-player: '&4Je moet een speler selecteren.'
  camp-cmd-no-amount: '&4Je moet kiezen hoeveel percelen je aan {player} wilt geven.'
  camp-cmd-no-neg: '&eJe kunt geen negatieve getallen gebruiken in de /camp-commando.'
  camp-created: '&eJe kamp is aangemaakt!'
  camp-created-err: '&4Het kamp kon niet worden aangemaakt.'
  camp-destroyed: '&eJe kamp is niet meer veilig.'
  camp-destroyed-err: '&cJe kamp kon niet worden vernietigd.'
  camp-exists: '&eHet kamp kon niet worden aangemaakt omdat er al een kamp met die naam bestaat.'
  camp-info: '------------- &c&l[Informatie over Kampen] &r&f-------------'
  camp-info-msg: 'Kon het resterende aantal blokken niet ophalen.'
  camp-plot-count: 'Je hebt &2{plots} &r&fpercelen over. Gebruik ze verstandig.'
`,
    pt: `messages:
  # Welcome and Premium Messages
  welcome-premium: "Bem-vindo, {playerName}!"
  upgrade-premium: "Faça upgrade para o premium e obtenha benefícios exclusivos!"
  no-premium: "Esta é uma função Premium!"

  # Player Health and Effects
  thirst-warning: "Aviso: Sua sede está baixa!"
  thirst-buffer: "Sua sede está criticamente baixa! Você se sente fraco e confuso."
  water-purification: "Você purificou a água suja em água limpa!"
  analgesia-used: "Você usou Analgesia. Sua saúde foi parcialmente restaurada."
  bandage-used: "Você usou um Curativo. A regeneração de saúde foi ativada."
  antibiotics-used: "Você usou Antibióticos. Todos os efeitos negativos foram removidos!"
  adrenaline-used: "Você usou Adrenalina. Agora está com saúde total e resistência a danos por 30 segundos."
  infection-applied: "&4Você foi infectado!"

  # Zombie Guts
  zombie-guts-effect-worn-off: "O efeito das Entranhas de Zumbi desapareceu."
  zombie-guts-removed-rain: "O efeito das Entranhas de Zumbi foi removido devido à chuva."
  zombie-guts-removed-water: "O efeito das Entranhas de Zumbi foi removido ao entrar na água."
  zombie-guts-created: "*Você se cobriu com as nojentas entranhas e agora você cheira a podre!*"
  zombie-guts-chestplate: "Eu espalhei as entranhas na minha roupa... Que nojo."
  zombie-guts-status-four: "&4Isso deve durar um tempo."
  zombie-guts-status-three: "&cIsso deve durar o suficiente."
  zombie-guts-status-two: "&6Eu não tenho muito tempo com isso."
  zombie-guts-status-one: "&eIsso é apenas uma mancha, não vai durar muito."
  zombie-guts-status-zero: "&7Isso não vai adiantar, você não pode ir para lugar algum com isso."
  zombie-guts-plate-status-four: "&4Fresca e escorrendo..."
  zombie-guts-plate-status-three: "&cEscorregadia de sangue."
  zombie-guts-plate-status-two: "&6Secando. O cheiro está aumentando."
  zombie-guts-plate-status-one: "&eApodrecendo. Moscas se acumulam."
  zombie-guts-plate-status-zero: "&7Está caindo aos pedaços..."

  # Events
  bloodmoon-rises: "&4☾ A Lua de Sangue Está Subindo... ☾"
  bloodmoon-dawns: "&7☀ A Lua de Sangue desaparece com a chegada da manhã... ☀"
  bloodmoon-dread: "&7Uma sensação de medo preenche o ar..."

  # Combat and Zombies
  zombie-headshot: "&4&lTiro na cabeça!"
  zombie-bodyshot: "Você acertou o corpo do zumbi!"

  # Permissions and Restrictions
  no-permission: "Você não tem permissão para fazer isso."
  players-only-cmd: "Apenas jogadores podem executar este comando."
  player-not-found: "Jogador não encontrado."
  world-restriction-message: "Você não pode usar esta plugin no mundo atual: %world%."
  xp-restricted-world: "A coleta de XP está desabilitada neste mundo."
  xp-restricted-item: "Itens relacionados ao XP estão desabilitados neste servidor."

  # Inventory and Crafting
  torch-used: "A tocha agora está ativa e fornece visão noturna!"
  torch-out-of-power: "A tocha ficou sem energia e não pode ser usada."
  battery-empty: "Esta bateria está vazia e não pode ser usada."
  battery-transferred: "A vida da bateria foi transferida para a tocha."
  cannot-switch-during-torch-use: "Você não pode trocar de itens enquanto a tocha estiver em uso."
  crafting-success: "Você criou o item com sucesso!"
  crafting-blacklist: "&4Você não pode criar este item!"
  receipe-missing: "A receita para este item está faltando ou incompleta."
  invalid-material: "O material para este item é inválido."
  invalid-item: "Item inválido. Itens disponíveis: Adrenalina, Analgesia, Antibióticos, Curativo, Tocha, Bateria."
  invalid-qty: "Quantidade inválida. Por favor, insira um número válido."

  # Barbed Wire
  no-wire-cutters: "&cVocê precisa de cortadores de arame para remover o arame farpado!"
  hurt-by-barbed-wire: "&cVocê foi ferido pelo arame farpado!"

  # Rewards
  reward-money: "Você foi recompensado com {amount} moedas!"
  reward-items: "Você foi recompensado com x{quantity} {itemName}(s)!"

  # Configuration and Updates
  config-reload: "As configurações de configuração foram recarregadas."
  update-plots-err: "&fNão foi possível atualizar o número de parcelas de {player}."

  # Plot Management
  plots-updated: '&2O número de parcelas de {player} foi ajustado para {new-plots}. Eles agora têm {total-plots} parcelas restantes.'
  missing-plots: '&4Não foi possível recuperar o número restante de parcelas.'
  missing-plots-err: '&4Você deve escolher quantas parcelas dar a {player}.'

  # Camp Commands
  camp-cmd-no-player: '&4Você deve selecionar um jogador.'
  camp-cmd-no-amount: '&4Você deve escolher quantas parcelas dar a {player}.'
  camp-cmd-no-neg: '&eVocê não pode usar números negativos no comando /camp.'
  camp-created: '&eSeu acampamento foi criado!'
  camp-created-err: '&4Não foi possível criar o acampamento.'
  camp-destroyed: '&eSeu acampamento não está mais seguro.'
  camp-destroyed-err: '&cNão foi possível destruir seu acampamento.'
  camp-exists: '&eO acampamento não pôde ser criado porque já existe um com o mesmo nome.'
  camp-info: '------------- &c&l[Informações do Acampamento] &r&f-------------'
  camp-info-msg: 'Não foi possível recuperar o número restante de blocos.'
  camp-plot-count: 'Você tem &2{plots} &r&fparcelas restantes. Use-as com sabedoria.'`,
    zh: `messages:
  # Welcome and Premium Messages
  welcome-premium: "欢迎，{playerName}！"
  upgrade-premium: "升级到高级版，享受独家福利！"
  no-premium: "这是高级版功能！"

  # Player Health and Effects
  thirst-warning: "警告：你的口渴值很低！"
  thirst-buffer: "你的口渴值危机四伏！你感觉虚弱且迷茫。"
  water-purification: "你将脏水净化成了干净水！"
  analgesia-used: "你使用了止痛药。你的健康部分恢复了。"
  bandage-used: "你使用了绷带。健康恢复已启用。"
  antibiotics-used: "你使用了抗生素。所有负面效果已清除！"
  adrenaline-used: "你使用了肾上腺素。你现在恢复了满血，并且在接下来的30秒内有伤害抗性。"
  infection-applied: "&4你已被感染！"

  # Zombie Guts
  zombie-guts-effect-worn-off: "僵尸内脏效果已消失。"
  zombie-guts-removed-rain: "由于下雨，僵尸内脏效果已被移除。"
  zombie-guts-removed-water: "由于进入水中，僵尸内脏效果已被移除。"
  zombie-guts-created: "*你把恶心的僵尸内脏涂在身上，现在你闻起来像腐烂的尸体！*"
  zombie-guts-chestplate: "我把僵尸内脏涂在了衣服上... 真恶心。"
  zombie-guts-status-four: "&4这个效果应该会持续一段时间。"
  zombie-guts-status-three: "&c这个效果应该会持续足够长的时间。"
  zombie-guts-status-two: "&6我带着这个不会太久。"
  zombie-guts-status-one: "&e这只是一个污点，不能维持太久。"
  zombie-guts-status-zero: "&7这样下去也没有意义，什么地方也不能去。"
  zombie-guts-plate-status-four: "&4新鲜且滴水..."
  zombie-guts-plate-status-three: "&c血迹斑斑。"
  zombie-guts-plate-status-two: "&6正在干燥。恶臭上升。"
  zombie-guts-plate-status-one: "&e腐烂。苍蝇聚集。"
  zombie-guts-plate-status-zero: "&7正在分解..."

  # Events
  bloodmoon-rises: "&4☾ 血月升起... ☾"
  bloodmoon-dawns: "&7☀ 血月在黎明破晓时消失... ☀"
  bloodmoon-dread: "&7空气中弥漫着一股恐惧的气息..."

  # Combat and Zombies
  zombie-headshot: "&4&l爆头！"
  zombie-bodyshot: "你击中了僵尸的身体！"

  # Permissions and Restrictions
  no-permission: "你没有权限执行此操作。"
  players-only-cmd: "只有玩家可以执行此命令。"
  player-not-found: "未找到玩家。"
  world-restriction-message: "你不能在当前世界使用此插件：%world%。"
  xp-restricted-world: "在此世界中禁止收集经验值。"
  xp-restricted-item: "此服务器禁用了与经验相关的物品。"

  # Inventory and Crafting
  torch-used: "火把现在已激活，提供夜视效果！"
  torch-out-of-power: "火把电力已耗尽，无法使用。"
  battery-empty: "此电池已空，无法使用。"
  battery-transferred: "电池电量已转移到火把上。"
  cannot-switch-during-torch-use: "在使用火把时无法切换物品。"
  crafting-success: "你已成功制作该物品！"
  crafting-blacklist: "&4你不能制作这个物品！"
  receipe-missing: "此物品的配方丢失或不完整。"
  invalid-material: "该物品的材料无效。"
  invalid-item: "无效的物品。可用物品：肾上腺素、止痛药、抗生素、绷带、火把、电池。"
  invalid-qty: "数量无效。请输入一个有效的数字。"

  # Barbed Wire
  no-wire-cutters: "&c你需要 wire cutters 才能移除铁丝网！"
  hurt-by-barbed-wire: "&c你被铁丝网伤到了！"

  # Rewards
  reward-money: "你获得了 {amount} 硬币的奖励！"
  reward-items: "你获得了 x{quantity} 个 {itemName} 的奖励！"

  # Configuration and Updates
  config-reload: "配置设置已重新加载。"
  update-plots-err: "&f无法更新 {player} 的地块数量。"

  # Plot Management
  plots-updated: '&2{player} 的地块数量已调整为 {new-plots}。他们现在有 {total-plots} 个地块剩余。'
  missing-plots: '&4无法获取剩余的地块数量。'
  missing-plots-err: '&4你必须选择给 {player} 分配多少地块。'

  # Camp Commands
  camp-cmd-no-player: '&4你必须选择一个玩家。'
  camp-cmd-no-amount: '&4你必须选择给 {player} 分配多少地块。'
  camp-cmd-no-neg: '&e你不能在 /camp 命令中使用负数。'
  camp-created: '&e你的营地已创建！'
  camp-created-err: '&4无法创建营地。'
  camp-destroyed: '&e你的营地不再安全。'
  camp-destroyed-err: '&c无法销毁你的营地。'
  camp-exists: '&e无法创建营地，因为已经有一个同名的营地存在。'
  camp-info: '------------- &c&l[营地信息] &r&f-------------'
  camp-info-msg: '无法获取剩余的块数。'
  camp-plot-count: '你剩余 &2{plots} &r&f个地块。请明智使用它们。'`,
  };

  return (
    <div>
      Language:
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="nl">Nederlands</option>
        <option value="pt">Português</option>
        <option value="zh">中文</option>
      </select>

      <pre style={{
        backgroundColor: '#2d2d2d',
        color: '#f8f8f2',
        padding: '15px',
        borderRadius: '8px',
        overflowX: 'auto',
        marginTop: '20px'
      }}>
        {yamlData[lang]}
      </pre>
    </div>
  );
};

<LanguageSelector />