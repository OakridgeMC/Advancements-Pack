import {
  world,
  system
} from "@minecraft/server";

const copperBlocks = [
  'minecraft:exposed_copper_bulb',
  'minecraft:weathered_copper_bulb',
  'minecraft:oxidized_copper_bulb'
];

world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
  const item = event.itemStack;
  const player = event.player;
  const block = event.block

  if (!item || !player || !block) {
    return;
  }
  if (player.hasTag("LightenUp")) return;
  if (block.permutation.getState("lit") === false) return;

  if (item.hasTag('minecraft:is_axe') && copperBlocks.includes(block.typeId)) {
    system.run(() => {


      player.runCommand('function adv/lighten_up/grant')
    })
  }
})