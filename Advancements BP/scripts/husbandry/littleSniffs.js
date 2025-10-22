import {
  world,
  system
} from "@minecraft/server";

world.afterEvents.playerInteractWithEntity.subscribe((event) => {
  const entity = event.target;
  const player = event.player;
  const item = event.beforeItemStack;;

  if (!entity || !player || !item) {
    return;
  }
  if (entity.typeId !== 'minecraft:sniffer' || item.typeId !== 'minecraft:torchflower_seeds') return;
  if(entity.hasComponent('minecraft:is_baby')) {
    if (!player.hasTag('LittleSniffs')) player.runCommand('function adv/little_sniffs/grant')
  }
})

