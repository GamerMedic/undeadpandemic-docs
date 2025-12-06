# ⚡ Features

## 🧟 Zombie Spawning
* Zombies can spawn based on a configurable rate (`zombies.spawn-rate`).
* **Custom Zombies:** Customize zombies' appearance and attributes using the `ZombieType` enum. Custom zombies spawn based on a configurable chance.
* **Vanilla Zombies:** Regular vanilla zombies also spawn according to configuration.
* Zombies spawn faster during specific events, such as full moons.
* **Blood Moon Event:** During a full moon, zombies may spawn more frequently. The event is configurable, including the chance (`zombies.events.blood-moon.horde-chance`).

---

## 💧 Thirst System
* Players have a **thirst level** that depletes over time.
* Thirst depletion rate is configurable (`thirst.dehydration_rate`) and varies for premium players.
* Premium players lose thirst at a **slower rate** (`thirst.dehydration_amount`).
* Low thirst causes **debuffs** like Confusion and Weakness.
* Players receive **warnings** when thirst is dangerously low.
* Thirst is displayed using a **boss bar** and is updated periodically.
* Thirst changes are persisted to ensure consistency across sessions.

---

## 🌙 Moon Phase Monitoring
* The plugin monitors the current **moon phase** of the world.
* During a **full moon**, zombie spawn rates increase.
* A random chance determines whether the full moon event triggers, adding unpredictability.

---

## ✨ Premium Features
* **Faster Thirst Depletion:** Premium players experience slower thirst loss.
* **Custom Zombie Spawning:** Unique zombies may spawn under specific conditions or events.
* **Dehydration Buffers:** Premium users may receive custom debuffs and longer thresholds for critical thirst.
* **Exclusive Events:** Certain events, such as blood moon horde spawns, may be more frequent or rewarding.

---

## ⚙️ Plugin Configuration
* The plugin relies heavily on the `config.yml` file for customization.
* Key configurable options:
  * Zombie spawn rates and chances
  * Thirst max, buffer, and warning thresholds
  * Moon phase-related events (accelerated spawn rates, event chances)

---

## 🧑‍🤝‍🧑 Player Interactions and Feedback
* Provides in-game **feedback** via messages for low thirst levels.
* Applies **potion effects** (e.g., Confusion, Weakness) when players are dehydrated.
* Premium players may receive enhanced or tailored feedback and notifications.

---

## 💎 Premium vs 🧡 Non-Premium Features

| Feature Area | Premium Players | Non-Premium Players |
|-------------|----------------|-------------------|
| Thirst | Slower depletion, custom debuffs, extended mechanics | Standard depletion and debuffs |
| Zombie Spawning | Enhanced spawn rates, custom zombies | Vanilla and occasional custom zombies |
| Events | More frequent/exclusive events (blood moons, horde spawns) | Standard moon phase mechanics and spawning |
| Player Feedback | Tailored notifications and effects | Standard feedback and effects |