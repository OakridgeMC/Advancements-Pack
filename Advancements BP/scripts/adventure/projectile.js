import {
  world,
  system
} from "@minecraft/server";

world.afterEvents.entityHurt.subscribe((event) => {
  const damageSource = event.damageSource.damagingEntity;
  const arrow = event.damageSource.damagingProjectile
  if (!damageSource || !arrow) {
    return;
  }
  if (damageSource.typeId !== "minecraft:player") {
    return;
  }
  if (!damageSource.hasTag('TakeAim') && arrow.typeId === 'minecraft:arrow') damageSource.runCommand('function adv/take_aim/grant')
  if (!damageSource.hasTag('ThrowawayJoke') && arrow.typeId === 'minecraft:thrown_trident') damageSource.runCommand('function adv/a_throwaway_joke/grant')

});

world.afterEvents.itemCompleteUse.subscribe((event) => {
  const player = event.source;
  const item = event.itemStack;
  if (!player) {
    return;
  }
  if (player.hasTag('OlBetsy')) {
    return;
  }
  if (item.typeId === 'minecraft:crossbow') player.runCommand('function adv/ol_betsy/grant')

});