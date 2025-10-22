import {
  world,
  system
} from "@minecraft/server";

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    if (!player.hasTag("AdventuringTime") && player.dimension.id === 'minecraft:overworld') {
      //player.sendMessage('biome registered')
      player.runCommand('summon adv:biome ^^^-2.8')
    }
  }
}, 50);