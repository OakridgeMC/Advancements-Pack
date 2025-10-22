import {
  world,
  system,
  EntityDamageCause
} from "@minecraft/server";

world.afterEvents.entityHurt.subscribe((event) => {
  const hurtEntity = event.hurtEntity;
  const damageSource = event.damageSource.damagingEntity;
  const cause = event.damageSource.cause
  const damage = event.damage
  if (!damageSource || !damageSource.isValid) {
    return;
  }
  if (damageSource.hasTag('OverOverkill')) {
    return;
  }
  if (damageSource.typeId !== "minecraft:player") {
    return;
  }
  if (cause != EntityDamageCause.maceSmash) {
    return;
  }
  if (!damageSource.getComponent("minecraft:equippable")) { return; }

  const heldItem = damageSource.getComponent("minecraft:equippable").getEquipment("Mainhand");
  if (!heldItem) { return; }
  if (heldItem.typeId !== 'minecraft:mace') {
    return;
  }

  if (damage >= 100) damageSource.runCommand('function adv/over_overkill/grant')

});