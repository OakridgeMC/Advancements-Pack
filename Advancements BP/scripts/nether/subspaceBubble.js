import {
    world,
    system
} from "@minecraft/server";

world.afterEvents.playerDimensionChange.subscribe((event) => {
  const player = event.player;
  if(player.hasTag('SubspaceBubble')) return;

  const fromD = event.fromDimension.id;
  const toD = event.toDimension.id;

  if(fromD === 'minecraft:overworld' && toD === 'minecraft:nether') {
    world.scoreboard.getObjective('ow_x').setScore(player, event.fromLocation.x);
    world.scoreboard.getObjective('ow_z').setScore(player, event.fromLocation.z);

  return;
  }
  if(fromD === 'minecraft:nether' && toD === 'minecraft:overworld') {
    const x1 = world.scoreboard.getObjective('ow_x').getScore(player);
    const z1 = world.scoreboard.getObjective('ow_z').getScore(player);

   const x2 = event.toLocation.x;
   const z2 = event.toLocation.z;

  const d = Math.hypot(x2-x1, z2-z1);
  if(player.hasTag('debug')) player.sendMessage(`${d} blocks travelled through nether`);

  if(d >= 7000) player.runCommand('function adv/subspace_bubble/grant')
  }
})