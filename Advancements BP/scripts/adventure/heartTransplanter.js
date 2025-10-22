import {
  world,
  system
} from "@minecraft/server";


world.afterEvents.playerPlaceBlock.subscribe((event) => {
  const block = event.block;
  const player = event.player;
  const axis = block.permutation.getState('pillar_axis');

  if (!block || !player) {
    return;
  }

  if (block.typeId !== 'minecraft:creaking_heart') return;
  if (player.hasTag('HeartTransplanter')) return;

  var b1 = block;
  var b2 = block;

  if (axis === 'y') {
    b1 = block.below();
    b2 = block.above();
    if (player.hasTag('debug')) player.sendMessage('y');
  } else if (axis === 'x') {
    b1 = block.east();
    b2 = block.west();
    if (player.hasTag('debug')) player.sendMessage('x');
  } else if (axis === 'z') {
    b1 = block.north();
    b2 = block.south();
    if (player.hasTag('debug')) player.sendMessage('z');
  } else {
    if (player.hasTag('debug')) player.sendMessage('none');
    return;
  }

  if (player.hasTag('debug')) player.sendMessage(b1.typeId);
  if (player.hasTag('debug')) player.sendMessage(b2.typeId);

  if (b1.typeId !== 'minecraft:pale_oak_log') return;
  if (b2.typeId !== 'minecraft:pale_oak_log') return;

  const a1 = b1.permutation.getState('pillar_axis');
  const a2 = b2.permutation.getState('pillar_axis');

  if (player.hasTag('debug')) player.sendMessage(a1);
  if (player.hasTag('debug')) player.sendMessage(a2);

  if (a1 === axis && a2 === axis) player.runCommand('function adv/heart_transplanter/grant')
})

