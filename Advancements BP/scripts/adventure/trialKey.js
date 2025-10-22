import {
  world,
  system
} from "@minecraft/server";

world.afterEvents.playerInteractWithBlock.subscribe((event) => {
  const item = event.itemStack;
  const player = event.player;
  const block = event.block

  if (!item || !player || !block) {
    return;
  }

  if (block.permutation.getState("ominous") === false && item.typeId === 'minecraft:trial_key' && block.typeId === 'minecraft:vault' && !player.hasTag('LockKey')) player.runCommand('function adv/under_lock_and_key/grant')

  if (block.permutation.getState("ominous") === true && item.typeId === 'minecraft:ominous_trial_key' && block.typeId === 'minecraft:vault' && !player.hasTag('Revaulting')) player.runCommand('function adv/revaulting/grant')
})

