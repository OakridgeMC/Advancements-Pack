import { world, system } from "@minecraft/server";

system.runInterval(() => {
  for (const player of world.getPlayers()) {   
    const riding = player.getComponent("minecraft:riding");
    if (player.dimension.id == "minecraft:the_end" && riding && !player.hasTag("LowRider") && (player.location.y < 0)) {
        player.runCommand("function adv/low_rider/grant");
      }
    }
}, 20);