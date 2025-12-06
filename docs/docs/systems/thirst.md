---
title: "🚰 Thirst System"
description: "Explore the Thirst System in UndeadPandemic. Understand dehydration, rehydration, consumables, and the effects of low hydration on players’ health and gameplay."
---

# 🚰 Thirst System

**What is the Thirst System?**  

The Thirst System allows players to experience thirst within the game. Thirst is represented by a **blue boss bar**.

---

## How Does the Thirst System Work?

### Dehydration

When enabled, the thirst boss bar starts at **80%** by default and decreases over time.  

The **rate of dehydration** is controlled by the following settings in `config.yml`:

- `dehydration_rate` – how frequently thirst decreases  
- `dehydration_qty` – the amount by which thirst decreases each interval  

### Becoming Unwell

Players will receive alerts as their hydration levels drop:

- **50%** – first warning  
- **25%** – second warning  

When thirst reaches **5%**, dehydration effects begin:

- **Confusion**  
- **Lethargy**  

These effects alter the player's state of mind and performance.

### Rehydration

Players can restore hydration by consuming appropriate **consumables**.  

- Consumables will **replenish thirst** according to the `Consumables` settings in the configuration.

### Consequences

The current thirst system has **no significant negative consequences** beyond the temporary debuffs.  

- Previous versions used the XP system to demonstrate thirst, which interfered with vanilla XP mechanics.  
- This behaviour has been removed to prevent conflicts with the core gameplay.

---

**Tip:** Keep consumables on hand to stay hydrated and avoid dehydration debuffs during long excursions.