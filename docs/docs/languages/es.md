# 🇪🇸 Español

El archivo YAML predeterminado para el idioma español.

```yaml
messages:
  # Welcome and Premium Messages
  welcome-premium: "¡Bienvenido, {playerName}!"
  upgrade-premium: "¡Mejora a premium para obtener beneficios exclusivos!"
  no-premium: "¡Esta es una función Premium!"

  # Player Health and Effects
  thirst-warning: "¡Advertencia: Tu sed está baja!"
  thirst-buffer: "¡Tu sed está críticamente baja! Te sientes débil y confundido."
  water-purification: "¡Has purificado el agua sucia en agua limpia!"
  analgesia-used: "Has usado Analgesia. Tu salud ha sido parcialmente restaurada."
  bandage-used: "Has usado un Vendaje. La regeneración de salud ha sido activada."
  antibiotics-used: "Has usado Antibióticos. ¡Se han eliminado todos los efectos negativos!"
  adrenaline-used: "Has usado Adrenalina. Ahora estás a plena salud y con resistencia al daño durante 30 segundos."
  infection-applied: "&4¡Has sido infectado!"

  # Zombie Guts
  zombie-guts-effect-worn-off: "El efecto de las Tripas de Zombie ha desaparecido."
  zombie-guts-removed-rain: "El efecto de las Tripas de Zombie ha sido removido por la lluvia."
  zombie-guts-removed-water: "El efecto de las Tripas de Zombie ha sido removido por entrar al agua."
  zombie-guts-created: "*¡Te has cubierto con las asquerosas tripas y ahora hueles a podredumbre!*"
  zombie-guts-chestplate: "Me he untado la camiseta con tripas... Qué asco."
  zombie-guts-status-four: "&4Esto debería durar un rato."
  zombie-guts-status-three: "&cEsto debería durar lo suficiente."
  zombie-guts-status-two: "&6No me queda mucho tiempo con esto."
  zombie-guts-status-one: "&eEsto es solo un poco, no durará mucho."
  zombie-guts-status-zero: "&7No tiene sentido ir a ningún lado con esto."
  zombie-guts-plate-status-four: "&4Fresco y goteando..."
  zombie-guts-plate-status-three: "&cResbaloso con sangre."
  zombie-guts-plate-status-two: "&6Secándose. El olor aumenta."
  zombie-guts-plate-status-one: "&eDescomponiéndose. Las moscas se agrupan."
  zombie-guts-plate-status-zero: "&7Deshaciéndose..."

  # Events
  bloodmoon-rises: "&4☾ La Luna Sangrienta se eleva... ☾"
  bloodmoon-dawns: "&7☀ La Luna Sangrienta desaparece cuando amanece... ☀"
  bloodmoon-dread: "&7Un sentimiento de pavor llena el aire..."

  # Combat and Zombies
  zombie-headshot: "&4&l¡Disparo a la cabeza!"
  zombie-bodyshot: "¡Has golpeado el cuerpo del zombie!"

  # Permissions and Restrictions
  no-permission: "No tienes permiso para hacer eso."
  players-only-cmd: "Solo los jugadores pueden ejecutar este comando."
  player-not-found: "No se pudo encontrar al jugador."
  world-restriction-message: "No puedes usar este plugin en el mundo actual: %world%."
  xp-restricted-world: "La recolección de XP está deshabilitada en este mundo."
  xp-restricted-item: "Los objetos relacionados con XP están deshabilitados en este servidor."

  # Inventory and Crafting
  torch-used: "¡La antorcha está activa y proporciona visión nocturna!"
  torch-out-of-power: "La antorcha se ha quedado sin batería y no se puede usar."
  battery-empty: "Esta batería está vacía y no se puede usar."
  battery-transferred: "La batería se ha transferido a la antorcha."
  cannot-switch-during-torch-use: "No puedes cambiar de objeto mientras la antorcha está en uso."
  crafting-success: "¡Has creado el objeto con éxito!"
  crafting-blacklist: "&4¡No puedes crear este objeto!"
  receipe-missing: "La receta para este objeto falta o está incompleta."
  invalid-material: "El material para este objeto no es válido."
  invalid-item: "Objeto inválido. Objetos disponibles: Adrenalina, Analgesia, Antibióticos, Vendaje, Antorcha, Batería."
  invalid-qty: "Cantidad inválida. Por favor ingresa un número válido."

  # Barbed Wire
  no-wire-cutters: "&c¡Necesitas cortadores de alambre para quitar el alambre de púas!"
  hurt-by-barbed-wire: "&c¡Te has lastimado con el alambre de púas!"

  # Rewards
  reward-money: "¡Has sido recompensado con {amount} monedas!"
  reward-items: "¡Has sido recompensado con x{quantity} {itemName}(s)! "

  # Configuration and Updates
  config-reload: "La configuración ha sido recargada."
  update-plots-err: "&fNo se pudo actualizar el número de parcelas de {player}."

  # Plot Management
  plots-updated: '&2La cuenta de parcelas de {player} ha sido ajustada por {new-plots}. Ahora tiene {total-plots} parcelas restantes.'
  missing-plots: '&4No se pudo obtener el número restante de parcelas.'
  missing-plots-err: '&4Debes elegir cuántas parcelas dar a {player}.'

  # Camp Commands
  camp-cmd-no-player: '&4Debes seleccionar un jugador.'
  camp-cmd-no-amount: '&4Debes elegir cuántas parcelas darle a {player}.'
  camp-cmd-no-neg: '&eNo puedes usar números negativos en el comando /camp.'
  camp-created: '&e¡Tu campamento ha sido creado!'
  camp-created-err: '&4No se pudo crear el campamento.'
  camp-destroyed: '&eTu campamento ya no es seguro.'
  camp-destroyed-err: '&cNo se pudo destruir tu campamento.'
  camp-exists: '&eNo se pudo crear el campamento porque ya existe uno con el mismo nombre.'
  camp-info: '------------- &c&l[Información del Campamento] &r&f-------------'
  camp-info-msg: 'No se pudo obtener la cantidad restante de bloques.'
  camp-plot-count: 'Te quedan &2{plots} &r&fparcelas. Úsalas sabiamente.'
