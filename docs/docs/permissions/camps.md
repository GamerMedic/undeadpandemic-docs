---
id: camps
title: 🏕️ Camp Permissions
sidebar_label: 🏕️ Camps
description: Permissions that control access to creating and deleting player camps in UndeadPandemic.
---

# 🏕️ Camp Permissions

These permissions determine whether a player can create or delete their **SafeZone camps**.

---

## 🏗️ Camp Management Permissions

| Permission | Description | Default |
|-----------|-------------|---------|
| `undeadpandemic.camp.create` | Allows the player to create a camp (SafeZone). | `true` |
| `undeadpandemic.camp.delete` | Allows the player to delete their camp. | `true` |

---

### ℹ️ Notes

- Camp data is stored in [`safeZoneData.yml`](/config/safeZoneData.yml).
- SafeZones are implemented using **WorldGuard protected chunks**.
- Default camp allowance is **4 chunks per player** unless edited.

---

### 👍 Recommended For:
- Regular players  
- Survival servers  
- Base-building environments  
