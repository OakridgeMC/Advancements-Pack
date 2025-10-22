import {
  world,
  system
} from "@minecraft/server";

world.afterEvents.playerInteractWithBlock.subscribe((event) => {
  const item = event.beforeItemStack;
  const player = event.player;
  const block = event.block;

  if (!item || !player || !block) {
    return;
  }
  if (item.typeId === 'minecraft:music_disc_11' && block.typeId === 'minecraft:jukebox' && !player.hasTag('RecordBreaker')) player.runCommand('function adv/record_breaker/grant')
})

