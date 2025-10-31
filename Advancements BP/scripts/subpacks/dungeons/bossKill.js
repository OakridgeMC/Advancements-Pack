import {
  world,
  system
} from "@minecraft/server";

const endersent = [
  'dungeons:blight_eye',
  'dungeons:binding_eye',
  'dungeons:savage_eye',
  'dungeons:ravenous_eye',
  'dungeons:spiked_eye',
  'dungeons:reaping_eye'
];

world.afterEvents.entityDie.subscribe((event) => {
  const deadEntity = event.deadEntity;
  const damageSource = event.damageSource.damagingEntity;
  const damageProjectile = event.damageSource.damagingProjectile;
  if (!damageSource) {
    return;
  }
  if(damageSource.typeId !== "minecraft:player") return;
  if(!damageSource.hasTag('aly:dungeons_enabled')) return;

  if (deadEntity.typeId === "dungeons:redstone_monstrosity" && !damageSource.hasTag('DungeonCrawler')) {
    damageSource.runCommand('function adv/subpacks/dungeon_crawler/grant');
  }
  if (deadEntity.typeId === "dungeons:nameless_one" && !damageSource.hasTag('GoodnightGramps')) {
    damageSource.runCommand('function adv/subpacks/goodnight_gramps/grant');
  }
  if (deadEntity.typeId === "dungeons:mooshroom_monstrosity" && !damageSource.hasTag('FungalFeud')) {
    damageSource.runCommand('function adv/subpacks/fungal_feud/grant');
  }
  if (deadEntity.typeId === "dungeons:wretched_wraith" && !damageSource.hasTag('LetGo')) {
    damageSource.runCommand('function adv/subpacks/let_it_go/grant');
  }
  if (deadEntity.typeId === "dungeons:corrupted_cauldron" && !damageSource.hasTag('YouCooked')) {
    damageSource.runCommand('function adv/subpacks/you_cooked/grant');
  }
  if (deadEntity.typeId === "dungeons:jungle_abomination" && !damageSource.hasTag('TreeFeller')) {
    damageSource.runCommand('function adv/subpacks/tree_feller/grant');
  }
  if (deadEntity.typeId === "dungeons:tempest_golem" && !damageSource.hasTag('TitanKiller')) {
    damageSource.runCommand('function adv/subpacks/titan_killer/grant');
  }
  if (deadEntity.typeId === "dungeons:ancient_guardian" && !damageSource.hasTag('Thalassophobia')) {
    damageSource.runCommand('function adv/subpacks/thalassophobia/grant');
  }
  if (deadEntity.typeId === "dungeons:boss_wildfire" && !damageSource.hasTag('Firefighter')) {
    damageSource.runCommand('function adv/subpacks/firefighter/grant');
  }
  if (endersent.includes(deadEntity.typeId) && !damageSource.hasTag('ForEye')) {
    damageSource.runCommand('function adv/subpacks/eye_for_an_eye/grant');
  }
  if (deadEntity.typeId === "dungeons:vengeful_heart_of_ender" && !damageSource.hasTag('Heartbreaking')) {
    damageSource.runCommand('function adv/subpacks/heartbreaking/grant');
  }
});
