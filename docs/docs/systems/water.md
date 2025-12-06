---
title: "🚰 Water System"
description: "Explore the Water System in UndeadPandemic. Learn how natural water sources may be contaminated, how to purify water, and the consequences of drinking dirty water."
---

# 🚰 Water System

The water system in **UndeadPandemic** introduces realistic hydration management, contamination risks, and purification mechanics for players.

---

### Natural Water Sources

- Players can collect water from **natural bodies of water**, such as rivers, lakes, and ponds.
- By default, there is a **configurable chance** that water collected from natural sources will be **dirty**.
- Dirty water cannot be consumed safely and must be **purified** before use.

---

### Dirty Water

- Drinking dirty water **will infect the player** with a waterborne illness.
- Infections from dirty water may include:
  - Poisoning
  - Confusion
  - Weakness
  - Lethargy
- The severity and duration of these effects can be modified in the `config.yml`.

---

### Purification

- Dirty water can be converted into **clean water** using purification methods:
  - Boiling over a heat source
- Once purified, water is **safe to drink** and restores hydration normally.

---

### Hydration Management

- Water collected and consumed by players affects their **Thirst System**.
- Maintaining hydration is essential to avoid **negative effects** such as confusion, lethargy, and eventual death from dehydration.

---

### Configurable Options

- `dirty_water_chance`: Sets the probability that water collected from natural sources is dirty.
- `infection_duration`: Sets how long a dirty water infection lasts if untreated.
- `purification_methods`: Lists available methods to purify water and their effectiveness.
- `hydration_restoration`: Controls how much thirst is restored by drinking clean water.

---

### Tips for Survival

- Always **purify water** before drinking to avoid infections.
- Keep a **backup water source** or purification items in your inventory.
- Use water strategically to maintain optimal hydration while surviving zombie threats.