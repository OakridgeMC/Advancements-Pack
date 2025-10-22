import {
  world,
  system
} from "@minecraft/server";


world.afterEvents.playerPlaceBlock.subscribe((event) => {
  const block = event.block;
  const player = event.player;

  if (!block || !player) {
    return;
  }

  if (block.typeId === 'minecraft:dried_ghast' && !player.hasTag('StayHydrated') && block.isWaterlogged) player.runCommand('function adv/stay_hydrated/grant')
})

