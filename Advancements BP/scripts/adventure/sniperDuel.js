import {
  world,
  system
} from "@minecraft/server";

world.afterEvents.entityDie.subscribe((event) => {
  const deadEntity = event.deadEntity;
  const damageSource = event.damageSource.damagingEntity;
  if (!damageSource) {
    return;
  }
  if (damageSource.typeId !== 'minecraft:player' || (deadEntity.typeId !== 'minecraft:skeleton' && deadEntity.typeId !== 'minecraft:stray' && deadEntity.typeId !== 'minecraft:bogged')) return;
  if (damageSource.hasTag('SniperDuel')) return;

  const x1 = deadEntity.location.x;
  const z1 = deadEntity.location.z;

  const x2 = damageSource.location.x;
  const z2 = damageSource.location.z;

  const d = Math.hypot(x2 - x1, z2 - z1);
  if (damageSource.hasTag('debug')) damageSource.sendMessage(`${d} blocks away`);

  if (d >= 50) damageSource.runCommand('function adv/sniper_duel/grant')
});