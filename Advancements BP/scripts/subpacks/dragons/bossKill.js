import {
  world
} from "@minecraft/server";


world.afterEvents.entityDie.subscribe((event) => {
  const deadEntity = event.deadEntity;
  const damageSource = event.damageSource.damagingEntity;
  if (!damageSource) {
    return;
  }
  if (damageSource.typeId !== "minecraft:player") return;
  if (!damageSource.hasTag('aly:dragons_enabled')) return;

  if (deadEntity.typeId === "dragons:lethal_dragon" && !damageSource.hasTag('DangerousCompany')) {
    damageSource.runCommand('function adv/subpacks/dangerous_company/grant');
  }
});
