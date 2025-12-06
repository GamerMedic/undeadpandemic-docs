# 🗄️ config.yml

This is the default `config.yml` page. The following sections explain each configuration option in detail, and how to modify the file to customise the plugin.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

<Tabs
  defaultValue="core"
  values={[
    { label: 'Core Settings', value: 'core' },
    { label: 'Premium', value: 'premium' },
    { label: 'Zombies', value: 'zombies' },
    { label: 'Mobs', value: 'mobs' },
    { label: 'Water', value: 'water' },
  ]}
>

<TabItem value="core">

`version` — The version number for the config file.

<Admonition type="caution">
Changing the `version` number can corrupt your config.yml file.
</Admonition>

`lang` — The default language used for in-game messages.

`worlds` — Configure a blacklist or whitelist of worlds where the plugin is active.

</TabItem>

<TabItem value="premium">

`api-key` — Provided when a premium licence is purchased.

<Admonition type="danger">
API keys must be kept secure! Anyone with your key could steal your licence.
</Admonition>

`api-user` — Your Minecraft UUID, used for premium authentication.

<Admonition type="info">
You can use the [Minecraft UUID Converter](https://mcuuid.net/) to find your UUID. It is also provided with your API key.
</Admonition>

`api-url` — The API endpoint for licence verification.

<Admonition type="caution">
Do not change this unless instructed. Licences cannot be verified elsewhere.
</Admonition>

</TabItem>

<TabItem value="zombies">

**`spawn-vanilla-zombies`** — Enable or disable vanilla zombies.

**`custom-zombie-rate`** — Chance that a custom zombie spawns instead of a vanilla one.

**`spawn-rate`** — Default spawn rate in seconds.

<mark style={{backgroundColor: 'yellow'}}>**`sun-burn`**</mark> — Whether zombies are damaged by sunlight (default `false`).

<mark style={{backgroundColor: 'yellow'}}>**`see-names`**</mark> — Whether zombie name tags are shown (default `true`).

<mark style={{backgroundColor: 'yellow'}}>**`spawn-in-daylight`**</mark> — Whether zombies spawn in daylight.

**`events`** — Configurable events for more challenging gameplay.

**`blood-moon`** — Options for the Blood Moon event.

`horde-chance` — Chance a horde appears during a full moon.

**`types`** — Different types of zombies.

- `slow`: Name, health, speed, strength, door-breaking, skin, armour, weapon.
- `strong`, `stupid`, `default`: Same structure.

**`drops`** — Custom items dropped by zombies.

- `type`: Valid Minecraft material.
- `name`: Item display name.
- `lore`: Item lore (multiline allowed).
- `custom-model-data`: Texture ID.
- `quantity`: Number to drop.

**`infection`** — Infection settings.

- `immunity-duration`: Hours of protection after joining (`-1` to disable).
- `chance`: Probability of infection on attack.
- `symptoms`: Potion effects applied.
- `use-milk`: Use milk to cure infection (default `false`).

**`guts`** — Zombie Guts options.

- `enabled`, `material`, `custom-model-data`, `effective-time-min/max`, `effect-duration`
- `slowness-duration/level/enabled`
- `lore`, `weather-removal`, `water-removal`

**`reward`** — Rewards for killing zombies.

- `enabled`, `type` (`money` or `item`)
- `money.amount` or `items` with type, quantity, name, lore
- `reward-chance`: Chance to receive a reward

</TabItem>

<TabItem value="mobs">

**`animal-drops`** — Configure drops from animals.

- `enabled`: If `true`, animals drop [Rotten Flesh](https://docs.stevezr963.me/items/rotten-flesh).
- `drop-chance`: Chance of dropping (0.0–1.0).

**`mobs`** — Mob spawning settings.

- `use-whitelist`: Only spawn mobs in the whitelist.
- `whitelist`: List of valid mob entities.

</TabItem>

<TabItem value="water">

**`water`** — Water mechanics.

- `enabled`: Chance to collect dirty water.
- `dirty-water-chance`: 0.0–1.0
- `dirty-bucket`: Custom item settings (name, lore, material, CMD)
- `heat_sources`: Materials that purify water

</TabItem>
</Tabs>

---

<Tabs
  defaultValue="thirst"
  values={[
    { label: 'Thirst', value: 'thirst' },
    { label: 'Experience', value: 'xp' },
    { label: 'Items', value: 'items' },
    { label: 'Camps', value: 'camps' },
  ]}
>

<TabItem value="thirst">

**`thirst`** — Thirst system settings.

- `enabled`, `max-thirst`, `warning-thirst`, `buffer-thirst`
- `dehydration_rate/amount` (premium only)
- `buffers`: Potion effects, duration, amplifier
- `display`: boss-bar and placeholder
- `items`: Thirst-replenishing items (water, berries, milk, etc.)

</TabItem>

<TabItem value="xp">

**`xp`** — Experience settings.

- `enabled`: False disables XP collection and enchanting

<Admonition type="info">
XP no longer affects thirst display. It can safely be used for gameplay. Setting it to `false` provides a more realistic scenario.
</Admonition>

</TabItem>

<TabItem value="items">

**`items`** — Custom items.

- `force-vanilla-overrule`: Controls crafting behaviour
- Each custom item: `name`, `lore`, `custom-model-data`, `recipe`
- `crafting-blacklist`: List of blocked items

</TabItem>

<TabItem value="camps">

**`camps`** — Campfire and cauldron settings.

- `campfires`: `douse-in-rain`, `interval`, `delay`
- `cauldrons`: `fill-in-rain`, `interval`, `delay`

</TabItem>
</Tabs>

<Admonition type="tip">
You can see the complete `config.yml` file below.
</Admonition>

```yaml
# CORE SETTINGS
version: 7 # Do not change this number! It is used for compatibility checks.
lang: "en"
worlds:
  # Mode can be either "blacklist" or "whitelist"
  mode: "blacklist"
  
  # List of worlds (world names) to block or allow
  list:
    - world_nether
    - world_the_end

# DATABASE SETTINGS
storage:
  ## Storage Types: flatfile, mysql, sqlite
  type: flatfile
  
  mysql:
    host: localhost
    port: 3306
    database: undeadpandemic
    username: root
    password: your-password
    table: player_data
    useSSL: false
    
  sqlite:
    file: playerData.db
    
  migrated: false

# PREMIUM SETTINGS
premium:
  ## If you have purchased premium then please copy and paste your API key
  ## and UUID here to enable premium features on your server.
  api-key: "YOUR_SECRET_API_KEY"
  api-user: "YOUR_UUID"
  api-url: "https://api.stevezr963.me/"

# ZOMBIE SETTINGS
zombies:
  spawn-vanilla-zombies: true
  custom-zombie-rate: 70 # Percentage chance of custom zombie spawning. This will apply to zombies spawning during the day,
  spawn-rate: 5 # 5 zombies every spawn. This does not apply to zombies spawning during the day.
  spawn-radius: 50 # Within how many blocks will custom zombies spawn?
  sun-burn: false # Set zombies to burn in daylight (Premium)
  see-names: true # Set to false if you'd like to have the name tags removed. (Premium)
  spawn-in-daylight: true # Set to false to prevent Zombies spawning in the daylight (Premium).
  pick-up-items: false # Allow zombies to pick up items (Premium)
  body-damage: 0.25 # Premium - Set the amount of damage that hitting the body will inflict. Must be between 0.0 and 1.0 (100%). This is always 0.25 without premium.
  zombie-on-death: true # Premium - Decide if player zombies are spawned on player death. If not premium, this will always be true.
  keep-inv-on-death: false # Premium - When set to false the player will lose their inventory on death and it will be given to their zombie. zombie-on-death must also be true.
  
  # Adjust damage settings
  kills:
    destroy-the-brain: true # Premium - Kills zombies instantly with a single hit to the head. This is always false without premium.
    allow-body-damage: true # Premium - Allow zombies to be killed from hits on any part of the body. This will have no effect if 'destroy-the-brain' is true. This is always true without premium.
    headshot-difficulty: 'normal' # Premium - How easy it should be to get a head shot? Easy|Normal|Hard. Easy may appear to give a head shot on a body hit. This is always 'normal' without premium.
    
  
  # Events are premium
  events:
    blood-moon:
      horde-chance: 50

  types:
    slow:
      name: "Slow Zombie"
      health: 30.0
      speed: 0.1 # 0.23 is the default MC speed. The base player walking speed is 0.1
      strength: 2
      can-break-doors: false
      skin: "default"
      armor:
        helmet: "IRON_HELMET"
        chestplate: "IRON_CHESTPLATE"
        leggings: "IRON_LEGGINGS"
        boots: "IRON_BOOTS"
      weapon: "WOODEN_SWORD"
    
    strong:
      name: "Strong Zombie"
      health: 80.0
      speed: 0.2
      strength: 8
      can-break-doors: true
      skin: "default"
      armor:
        helmet: "DIAMOND_HELMET"
        chestplate: "DIAMOND_CHESTPLATE"
        leggings: "DIAMOND_LEGGINGS"
        boots: "DIAMOND_BOOTS"
      weapon: "DIAMOND_SWORD"

    stupid:
      name: "Stupid Zombie"
      health: 50.0
      speed: 0.05
      strength: 1
      can-break-doors: false
      skin: "default"
      armor:
        helmet: "LEATHER_HELMET"
        chestplate: "LEATHER_CHESTPLATE"
        leggings: "LEATHER_LEGGINGS"
        boots: "LEATHER_BOOTS"
      weapon: "STICK"

    default:
      name: "" # Leave empty if you don't want to see a name tag for vanilla zombies
      health: 40.0
      speed: 0.23
      strength: 5
      can-break-doors: true
      skin: "default"
      armor:
        helmet: "CHAINMAIL_HELMET"
        chestplate: "CHAINMAIL_CHESTPLATE"
        leggings: "CHAINMAIL_LEGGINGS"
        boots: "CHAINMAIL_BOOTS"
      weapon: "IRON_SWORD"

  # Custom drops for zombies
  disable-drops: false # When set to true zombies will not drop any items unless reward.type is 'item'.
  drops:
    - type: "ROTTEN_FLESH" # Item type
      name: "Zombie Flesh" # Display name
      lore: # Item lore
        - "Eww, it's from a zombie!"
        - "Will you eat it?"
      custom-model-data: 12345 # Custom model data
      quantity: 5 # Amount to drop
    - type: "IRON_INGOT"
      name: "Shiny Iron"
      lore:
        - "A piece of iron, pure and shiny."
        - "Can be used for crafting."
      custom-model-data: 67890
      quantity: 1

  # INFECTION SETTINGS
  infection:
    immunity-duration: 3 # Immunity period in hours (on first login)
    # Probability of infection upon zombie attack (0.0 to 1.0)
    chance: 0.5

    # Effects of the infection on players
    # Format: EFFECT_NAME:DURATION_IN_SECONDS:AMPLIFIER
    symptoms:
      - POISON:10:1
      - SLOW:20:2
      - WEAKNESS:15:1
      - HUNGER:30:1
      
    use-milk: false # If set to true players will be able to use the vanilla action of milk to remove infection buffers.
      
  # GUTS SETTINGS
  guts:
    enabled: true                   # Enable or disable the Zombie Guts feature
    material: SLIME_BLOCK           # The material used for the Zombie Guts item
    custom-model-data: 12345        # The custom model data for the item
    effect-time-min: 30             # The minimum amount of time (in seconds) that the guts will survive
    effect-time-max: 120            # The maximum amount of time (in seconds) that the guts will survive
    effect-duration: 120            # How long the zombies ignore the player (in seconds)
    slowness-duration: 60           # Duration for the slowness effect (in seconds)
    slowness-level: 1               # Level of the slowness effect (0 = No effect, 1 = Slowness I, etc.)
    slowness-enabled: true          # Whether to apply the slowness effect or not
    name: "&6Zombie Guts"
    lore:
      - "&7Worn to mask your scent"
      - "&7Zombies will ignore you for a while"
    weather-removal: true           # Remove Zombie Guts effect if it rains
    water-removal: true             # Remove Zombie Guts effect if the player enters water
      
  # REWARD SETTINGS
  reward:
    enabled: true  # Enable or disable rewards
    type: "money"  # Can be either "money" or "item"
  
    # Money reward settings
    money:
      amount: 100  # Amount of money to reward

    # Item reward settings
    items:
      - type: "DIAMOND"
        quantity: 1
        name: "Shiny Diamond"
        lore:
          - "A precious gem."

    # Optional chance to reward either money or items
    reward-chance: 50  # Percentage chance to reward money (0-100)
    
# ANIMAL DROP SETTINGS
animal-drops:
  enabled: true  # Enable/disable animal mobs dropping tainted meat
  drop-chance: 0.75  # Chance of dropping rotten flesh (0.0 to 1.0)
  custom-model-data: 12345 # The CMD of tainted meat, this applies to all meat items.
  
  ## Customise name for infected meat
  ## {mob} will be replaced with the name of the mob.
  name: '&2Suspicious {mob} Flesh'
  ## You can remove or add animals that drop meat to this list.
  ## Uncomment the line below and remove the uncommented line to leave the list blank.
  ## infected_animals: []
  animals:
    - PIG
    - HOGLIN
    - COW
    - MUSHROOM_COW
    - CHICKEN
    - SHEEP
    - RABBIT
    - SALMON
    - COD
  
mobs:
  # Passive mobs are not affected.
  use-whitelist: true # When enabled, mob spawning will be disabled for all mobs except zombies and those listed on the whitelist.
  whitelist: # Only those mobs listed here will spawn (except zombies which will always spawn).
    - ZOMBIE_VILLAGER
  
# Water collection settings
water:
  enabled: true
  dirty-water-chance: 0.75 # 75% chance to collect dirty water when filling a bucket or bottle # Premium
  
  dirty_bucket:
    name: '&5Dirty Water Bucket'
    lore: '&fThis water looks a bit off.'
    custom_model_data: 23456
  
  ## Customise the item when collecting infected water
  dirty_water_bottle:
    material: POTION
    name: '&2Suspicious Water'
    lore: '&4This water looks strange.'
    potion_type: POISON # This is how the potion will look. The default is POISON. A common choice may be WATER
    custom_model_data: 12345
  
  ## Customise the item when collecting clean water
  clean_water_bottle:
    material: POTION
    name: '&bClean Water'
    lore: '&fSafe to drink.'
    potion_type: WATER # This is how the potion will look. The default is POISON. A common choice may be WATER
    custom_model_data: 67890
    
  ##heat_sources: [] ## use this if you want the heat_sources list to be empty
  heat_sources:
    - MAGMA_BLOCK
    - CAMPFIRE
    - LAVA
  
# THIRST SETTINGS
thirst:
  enabled: true                 # Enable or disable thirst system
  max-thirst: 100               # Maximum thirst level
  warning-thirst: 30            # Thirst level to trigger hotbar warning
  buffer-thirst: 10             # Thirst level to trigger confusion and weakness effects
  dehydration_rate: 60          # How quickly thirst will decrease in seconds. (PREMIUM)
  dehydration_amount: 5         # By what percentage thirst will decrease, i.e. decrease 5% every 60 seconds. (PREMIUM)
  buffers:
    - effect: "CONFUSION"   # Effect to apply
      duration: 200          # Duration in ticks (10 seconds)
      amplifier: 1           # Effect level (1 = level 2)
    - effect: "WEAKNESS"
      duration: 200
      amplifier: 1
  display:
    boss-bar: true              # Show thirst as a boss bar
    placeholder: true           # Use PlaceholderAPI for thirst display

  items:
    POTION:                     # Water bottle
      thirst: 20                # Amount of thirst replenished
      #custom-model-data: 1      # Custom model data for the item

    SWEET_BERRIES:
      thirst: 10
      #custom-model-data: 2

    MELON_SLICE:
      thirst: 15
      #custom-model-data: 3

    MILK:
      thirst: 20
      #custom-model-data: 3
      
xp:
  enabled: false

items:
  # Option to force vanilla items to override custom items with the same recipe
  force-vanilla-override: true  # Set to false if you want custom items to take precedence
  analgesia:
    name: "Analgesia"
    material: "MUSIC_DISC_11"
    lore:
      - "Stops pain and restores some health."
    custom-model-data: 12345
    recipe: "analgesia"
  bandage:
    name: "Bandage"
    material: "MUSIC_DISC_13"
    lore:
      - "Regenerates health over time"
    custom-model-data: 12345
    recipe: "bandage"
  antibiotics:
    name: "Antibiotics"
    material: "MUSIC_DISC_12"
    lore:
      - "Removes all negative effects"
    custom-model-data: 12345
    recipe: "antibiotics"
  adrenaline:
    name: "Adrenaline"
    material: "MUSIC_DISC_10"
    lore:
      - "Keeps you at full health for a while"
    custom-model-data: 12345
    recipe: "adrenaline"
  torch:
    name: "Torch"
    material: "BLAZE_ROD"
    lore:
      - "A source of light in the dark."
      - "Charge: %charge%%"
    custom-model-data: 12345
    recipe: "torch"
  battery:
    name: "Battery"
    material: "REDSTONE"
    lore:
      - "Powers your torch."
      - "Charge: %charge%%"
    custom-model-data: 12345
    max-life: 100  # Max battery life for the battery
    recipe: "battery"
  barbed-wire:
    name: "Barbed Wire"
    lore:
      - "A dangerous trap."
      - "Hurts anyone who moves through it."
    custom-model-data: 12345
    ## /************** hurts-mobs ****************
    ## ** Can only be enabled using premium.
    ## ** Be careful using this as it may cause lag.
    ## ** Lag should be minimal, but if you experience lag then you can either reduce the zombie or mob spawn rates,
    ## ** or disable this feature.
    ## ******************************************/
    hurts-mobs: false
    recipe: "barbed-wire"
  wire-cutters:
    name: "Wire Cutters"
    lore:
      - "Essential tool for removing barbed wire."
      - "Only available to premium players."
    custom-model-data: 12345
    recipe: "wire-cutters"
    
  crafting-blacklist:
    - LEATHER_HELMET
    - LEATHER_CHESTPLATE
    - LEATHER_LEGGINGS
    - LEATHER_BOOTS
    - IRON_HELMET
    - IRON_CHESTPLATE
    - IRON_LEGGINGS
    - IRON_BOOTS
    - GOLDEN_HELMET
    - GOLDEN_CHESTPLATE
    - GOLDEN_LEGGINGS
    - GOLDEN_BOOTS
    - DIAMOND_HELMET
    - DIAMOND_CHESTPLATE
    - DIAMOND_LEGGINGS
    - DIAMOND_BOOTS
    - CHAINMAIL_HELMET
    - CHAINMAIL_CHESTPLATE
    - CHAINMAIL_LEGGINGS
    - CHAINMAIL_BOOTS
    - NETHERITE_HELMET
    - NETHERITE_CHESTPLATE
    - NETHERITE_LEGGINGS
    - NETHERITE_BOOTS
    - SHIELD

camps:
  campfires:
    douse-in-rain: true # Premium - When enabled camp fires will be doused when it rains. This requires a server restart.
    interval: 25 # Checks for re-lit fires every n seconds.
    delay: true # delays the check by the interval. When set to 'false' the check will happen instantly.
  cauldrons:
    fill-in-rain: true # Premium - When enabled caulrons will be filled with rain water. This requires a server restart.
    interval: 25 # Fills by one level every n seconds.
    delay: true
```