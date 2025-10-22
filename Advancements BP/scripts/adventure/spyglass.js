import {
  world,
  system
} from "@minecraft/server";

world.afterEvents.itemStartUse.subscribe((event) => {
  const item = event.itemStack;
  const player = event.source;

  if (!item || !player) {
    return;
  }

  if (item.typeId === 'minecraft:spyglass') {

    if (player.getEntitiesFromViewDirection().length == 0) return;
    const target = player.getEntitiesFromViewDirection()[0].entity
    if (!target) return;
    if (target && target.typeId === "minecraft:parrot" && !player.hasTag('ItBird')) player.runCommand('function adv/is_it_a_bird/grant')
    if (target && target.typeId === "minecraft:ghast" && !player.hasTag('ItBalloon')) player.runCommand('function adv/is_it_a_balloon/grant')
    if (target && target.typeId === "minecraft:ender_dragon" && !player.hasTag('ItPlane')) player.runCommand('function adv/is_it_a_plane/grant')
    if (target && target.typeId === "minecraft:creaking" && !player.hasTag('ItTree')) player.runCommand('function adv/is_it_a_tree/grant')

  }
})