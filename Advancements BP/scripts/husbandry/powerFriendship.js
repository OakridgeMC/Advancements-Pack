import {
  world,
  system
} from "@minecraft/server";

const monsters = [
  'minecraft:drowned',
  'minecraft:guardian',
  'minecraft:elder_guardian'
];

world.afterEvents.entityHurt.subscribe((event) => {
  const hurtEntity = event.hurtEntity;
  const damageSource = event.damageSource.damagingEntity;
  if (!damageSource) {
    return;
  }
  if (damageSource.hasTag('axolot_enemy')) {
    return;
  }
  if (damageSource.typeId !== "minecraft:axolotl") {
    return;
  }
  if (!monsters.includes(hurtEntity.typeId)) {
    return;
  }
  hurtEntity.addTag('axolotl_enemy');
  system.runTimeout(() => {
    if (hurtEntity.isValid) hurtEntity.removeTag('axolotl_enemy');
  }, 600);

});

world.afterEvents.entityDie.subscribe((event) => {
  const deadEntity = event.deadEntity;
  const damageSource = event.damageSource.damagingEntity;
  if (!damageSource) {
    return;
  }
  if (deadEntity.typeId !== 'minecraft:axolotl') return;
  if (damageSource.hasTag('axolotl_enemy')) damageSource.removeTag('axolotl_enemy');
});

world.afterEvents.entityDie.subscribe((event) => {
  const deadEntity = event.deadEntity;
  const damageSource = event.damageSource.damagingEntity;
  if (!damageSource) {
    return;
  }
  if (damageSource.typeId !== 'minecraft:player') return;
  if (damageSource.hasTag('PowerFriendship')) return;

  if (deadEntity.hasTag('axolotl_enemy')) damageSource.runCommand('function adv/the_healing_power_of_friendship/grant')
});