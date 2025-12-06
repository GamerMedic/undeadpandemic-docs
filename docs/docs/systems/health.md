---
title: "💊 Health System"
description: "Learn how the Health System in UndeadPandemic works, including health status, injuries, illnesses, and potion effects. Stay alive by managing thirst, infections, broken bones, and more."
---

# 💊 Health System

**Effective from v2.6.0**  
This page only applies to v2.6.0 and onwards. Information about previous versions will not be included until v2.6.0 is released.

---

## What is the Health System?

The Health System tracks and manages player wellbeing, encompassing the following variables:

- **Thirst** 💧  
- **Illness / Injury** 🩺  

---

## Health Status

A player's **Health Status** reflects their current wellbeing. It can be:

- **Healthy** ✅ – no negative effects  
- **Unhealthy** ⚠️ – displays one of the following health conditions  

When a player is **unhealthy**, potion effects are applied automatically. Some of these can be customised, but the defaults are as follows:

| Condition             | Effects                                                                 | After Effects |
|-----------------------|------------------------------------------------------------------------|---------------|
| **Zombie Infection** 🧟 | Poison; Pain (Harm); Lethargy (Slowness); Hunger; Confusion; Weakness | Death if not cured with antibiotics |
| **Dehydration** 💧      | Confusion; Pain (Harm)                                                 | Death if not cured by drinking |
| **Starvation** 🍖       | Hunger; Confusion; Pain (Harm); Blindness                               | Death if not cured by eating |
| **Infection** 🦠        | Lethargy (Slowness); Weakness                                          | Heals over time or with antibiotics |
| **Broken Bone** 🦴      | Slowness; Pain (Harm)                                                 | Heals over time or with a splint |
| **Hypothermia** ❄️     | Slowness; Weakness; Pain (Harm)                                        | Death if not cured by drinking soup or warming up |
| **Depression** 😔       | Slowness; Weakness                                                     | Suicide if not treated by exercise or talking |
| **Mania** ⚡             | Paraesthesia (Damage Resistance & Health Boost); Strength (Increased Damage); Luck; Radiance (Glowing); Quickness (Speed); Depression | Mania will go away on its own, but causes Depression which must be treated |

---

## Thirst

See **[Thirst System](thirst)** if using versions below v2.6.0.