import {
  world,
  system
} from "@minecraft/server";

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    if (player.isSneaking && !player.hasTag("Sneak100")) {
      player.runCommand('function adv/sneak_100/test')
    }
  }
}, 20);



