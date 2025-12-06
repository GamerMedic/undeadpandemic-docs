# 🇬🇧 English

The default YAML file for the English language.

```yaml
messages:
  # Welcome and Premium Messages
  welcome-premium: "Welcome, {playerName}!"
  upgrade-premium: "Upgrade to premium for exclusive benefits!"
  no-premium: "This is a Premium feature!"

  # Player Health and Effects
  thirst-warning: "Warning: Your thirst is low!"
  thirst-buffer: "Your thirst is critically low! You are feeling weak and confused."
  water-purification: "You have purified the dirty water into clean water!"
  analgesia-used: "You have used Analgesia. Your health has been partially restored."
  bandage-used: "You have used a Bandage. Health regeneration has been enabled."
  antibiotics-used: "You have used Antibiotics. All negative effects have been removed."
  adrenaline-used: "You have used Adrenaline. You are now at full health and have damage resistance for 30 seconds."
  infection-applied: "&4You have been infected!"
  
  # Zombie Guts
  zombie-guts-effect-worn-off: "The Zombie Guts effect has worn off."
  zombie-guts-removed-rain: "The Zombie Guts effect has been removed due to the rain."
  zombie-guts-removed-water: "The Zombie Guts effect has been removed due to entering water."
  zombie-guts-created: "*You covered your clothes in the disgusting guts and now you smell rotten!*"
  zombie-guts-chestplate: "I've smeared my top with guts... Gross."
  zombie-guts-status-four: "&4This should last a while."
  zombie-guts-status-three: "&cThis should last long enough."
  zombie-guts-status-two: "&6I won't have long with this."
  zombie-guts-status-one: "&eThis is just a smear, it won't last long at all."
  zombie-guts-status-zero: "&7No point in going anywhere with this."
  zombie-guts-plate-status-four: "&4Fresh and dripping..."
  zombie-guts-plate-status-three: "&cSlick with blood."
  zombie-guts-plate-status-two: "&6Drying. The stench rises."
  zombie-guts-plate-status-one: "&eRotting. Flies gather."
  zombie-guts-plate-status-zero: "&7Falling apart..."

  # Events
  bloodmoon-rises: "&4☾ The Blood Moon Rises... ☾"
  bloodmoon-dawns: "&7☀ The Blood Moon fades as dawn breaks... ☀"
  bloodmoon-dread: "&7A sense of dread fills the air..."

  # Combat and Zombies
  zombie-headshot: "&4&lHeadshot!"
  zombie-bodyshot: "You hit the zombie's body!"

  # Permissions and Restrictions
  no-permission: "You don't have permission to do that."
  players-only-cmd: "Only players can execute this command."
  player-not-found: "Could not find player."
  world-restriction-message: "You cannot use this plugin in the current world: %world%."
  xp-restricted-world: "XP collection is disabled in this world."
  xp-restricted-item: "XP-related items are disabled on this server."

  # Inventory and Crafting
  torch-used: "The torch is now active and provides night vision!"
  torch-out-of-power: "The torch has run out of battery and cannot be used."
  battery-empty: "This battery is empty and cannot be used."
  battery-transferred: "Battery life has been transferred to the torch."
  cannot-switch-during-torch-use: "You cannot switch items while the torch is in use."
  crafting-success: "You have successfully crafted the item!"
  crafting-blacklist: "&4You cannot craft this item!"
  receipe-missing: "The recipe for this item is missing or incomplete."
  invalid-material: "The material for this item is invalid."
  invalid-item: "Invalid item. Available items: Adrenaline, Analgesia, Antibiotics, Bandage, Torch, Battery."
  invalid-qty: "Invalid quantity. Please enter a valid number."

  # Barbed Wire
  no-wire-cutters: "&cYou need wire cutters to remove barbed wire!"
  hurt-by-barbed-wire: "&cYou are hurt by the barbed wire!"

  # Rewards
  reward-money: "You've been rewarded with {amount} coins!"
  reward-items: "You've been rewarded with x{quantity} {itemName}(s)!"

  # Configuration and Updates
  config-reload: "The configuration settings have been reloaded."
  update-plots-err: "&fCould not update {player}'s plot count."

  # Plot Management
  plots-updated: '&2{player} plot count has been adjusted by {new-plots}. They now have {total-plots} plots remaining.'
  missing-plots: '&4Could not fetch your remaining plots.'
  missing-plots-err: '&4You must choose how many plots to give to {player}.'

  # Camp Commands
  camp-cmd-no-player: '&4You must select a player.'
  camp-cmd-no-amount: '&4You must choose how many plots to give to {player}.'
  camp-cmd-no-neg: '&eYou cannot use negative numbers in the /camp command.'
  camp-created: '&eYour camp has been created!'
  camp-created-err: '&4Could not create camp.'
  camp-destroyed: '&eYour camp is no longer safe.'
  camp-destroyed-err: '&cYour camp could not be destroyed.'
  camp-exists: '&ecamp could not be created because one of the same name already exists.'
  camp-info: '------------- &c&l[Camps Info] &r&f-------------'
  camp-info-msg: 'Could not fetch your remaining blocks.'
  camp-plot-count: 'You have &2{plots} &r&fplots left. Use them wisely.'
