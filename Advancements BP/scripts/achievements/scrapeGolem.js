import {
  world,
  system
} from "@minecraft/server";

world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
  const item = event.itemStack;
  const player = event.player;
  const block = event.block

  if (!item || !player || !block) {
    return;
  }
  if (player.hasTag("NoMan")) return;

  if (item.hasTag('minecraft:is_axe') && block.typeId == "minecraft:copper_golem_statue") {
    system.run(() => {


      player.runCommand('function adv/no_man_left_behind/grant')
    })
  }
})