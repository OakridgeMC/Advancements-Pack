import {
    world,
    system
} from "@minecraft/server";

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    if (!player.hasTag("HotTourist") && player.dimension.id === 'minecraft:nether') {
      //player.sendMessage('nether biome registered')
      player.runCommand('summon adv:biome ^^^-1.2')
      }
   }
}, 100);



