import { world } from "@minecraft/server";

world.afterEvents.entityDie.subscribe((event) => {
  if (
    event.deadEntity.typeId == "minecraft:player" &&
    event.damageSource.cause == "fall"
  ) {
    const player = event.deadEntity;
    player.runCommand("function adv/bad_bones/grant");
  }
});