import { world } from "@minecraft/server";

world.afterEvents.playerPlaceBlock.subscribe((event) => {
  const block = event.block;
  const player = event.player;

  if (!block || !player) {
    return;
  }

  if (
    block.typeId === "minecraft:mob_spawner" &&
    !player.hasTag("SpawningSpawners") &&
    block.isWaterlogged
  )
    player.runCommand("function adv/spawning_spawners/grant");
});