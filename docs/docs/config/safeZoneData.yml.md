# 🏠 safeZoneData.yml

import Admonition from '@theme/Admonition';

<Admonition type="success">
The `safeZoneData.yml` file is a storage file.
</Admonition>

This file stores the number of plots that a player currently has to create a safezone.

SafeZones are given as a WorldGuard-protected chunk, and each player is given 4 by default. The default number cannot be changed, but the number of chunks each player has can be modified using the [\`/safezone\` command](https://docs.stevezr963.me/commands/safezone) or by directly editing the `safeZoneData.yml` file.

<Admonition type="caution">
**UUIDS**: You will notice that this file uses player UUIDs instead of display names. This is because WorldGuard offers unique protection based on UUIDs.

Player display names are not currently stored in this file, but this will be added in the future.

In the meantime, you can use [this resource](https://mcuuid.net/) to find a player's UUID, so that you can alter this file accurately.
</Admonition>

The file will look like this:

```yaml
a1b2c345-678d-901e-f234-5gh678h90123:
  SafeZone_Blocks: 4
```