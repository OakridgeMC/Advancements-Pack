import {
  world,
  system,
  BlockVolume
} from "@minecraft/server";

const validMobs = [
  "minecraft:armadillo",
  "minecraft:axolotl",
  "minecraft:bee",
  "minecraft:blaze",
  "minecraft:bogged",
  "minecraft:breeze",
  "minecraft:camel",
  "minecraft:cat",
  "minecraft:cave_spider",
  "minecraft:chicken",
  "minecraft:cod",
  "minecraft:cow",
  "minecraft:creeper",
  "minecraft:donkey",
  "minecraft:dolphin",
  "minecraft:drowned",
  "minecraft:elder_guardian",
  "minecraft:enderman",
  "minecraft:endermite",
  "minecraft:evoker",
  "minecraft:fox",
  "minecraft:frog",
  "minecraft:ghast",
  "minecraft:goat",
  "minecraft:glow_squid",
  "minecraft:guardian",
  "minecraft:hoglin",
  "minecraft:horse",
  "minecraft:husk",
  "minecraft:llama",
  "minecraft:magma_cube",
  "minecraft:mooshroom",
  "minecraft:ocelot",
  "minecraft:panda",
  "minecraft:parrot",
  "minecraft:phantom",
  "minecraft:pig",
  "minecraft:piglin_brute",
  "minecraft:pillager",
  "minecraft:polar_bear",
  "minecraft:pufferfish",
  "minecraft:rabbit",
  "minecraft:ravager",
  "minecraft:salmon",
  "minecraft:sheep",
  "minecraft:shulker",
  "minecraft:silverfish",
  "minecraft:skeleton",
  "minecraft:skeleton_horse",
  "minecraft:slime",
  "minecraft:sniffer",
  "minecraft:stray",
  "minecraft:spider",
  "minecraft:squid",
  "minecraft:strider",
  "minecraft:trader_llama",
  "minecraft:tropical_fish",
  "minecraft:turtle",
  "minecraft:vex",
  "minecraft:vindicator",
  "minecraft:warden",
  "minecraft:witch",
  "minecraft:wither",
  "minecraft:wither_skeleton",
  "minecraft:wolf",
  "minecraft:zoglin",
  "minecraft:zombie",
  "minecraft:zombie_horse",
  "minecraft:zombie_villager",
  "minecraft:zombified_piglin",
  "minecraftzombie_pigman"
]

world.afterEvents.entityDie.subscribe((event) => {
  const deadEntity = event.deadEntity;
  const damageSource = event.damageSource.damagingEntity;
  const damageProjectile = event.damageSource.damagingProjectile;
  if (!damageSource) {
    return;
  }
  if (!validMobs.includes(deadEntity.typeId)) return
  if (deadEntity.hasComponent("minecraft:is_baby")) return;
  if (damageSource.typeId === "minecraft:player") {
    if (damageSource.hasTag("ItSpreads")) return;
    const corner1 = { x: deadEntity.location.x - 8, y: deadEntity.location.y - 4, z: deadEntity.location.z - 8 }
    const corner2 = { x: deadEntity.location.x + 8, y: deadEntity.location.y + 4, z: deadEntity.location.z + 8 }
    const dim = deadEntity.dimension
    const volume = deadEntity.dimension.getBlocks((new BlockVolume(corner1, corner2)), {})
    for (const location of volume.getBlockLocationIterator()) {
      const block = dim.getBlock(location)
      if (block.typeId === "minecraft:sculk_catalyst") {
        damageSource.runCommand('function adv/it_spreads/grant')
        return;
      }
    }
  }
})