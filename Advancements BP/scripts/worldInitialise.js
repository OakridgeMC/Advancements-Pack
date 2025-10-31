import {
  world
} from "@minecraft/server";

const allScores = [
  'ow_x',
  'ow_z',
  'levitation_start',
  'AdvancementCount',
  'MinecraftCount',
  'NetherCount',
  'EndCount',
  'AdventureCount',
  'HusbandryCount',
  'AdvancementCount',

  'DungeonsCount',
  'DragonsCount'
];

world.afterEvents.worldLoad.subscribe(e => {

  for (const score of allScores) {
    if (!world.scoreboard.getObjective(score)) {
      world.scoreboard.addObjective(score)
    }
  }
});

world.afterEvents.playerSpawn.subscribe(e => {
  const initialSpawn = e.initialSpawn;
  if (initialSpawn == false) return;
  for (const score of allScores) {
    world.scoreboard.getObjective(score).addScore(e.player, 0);


  }

  e.player.removeTag('aly:dungeons_enabled');
  e.player.removeTag('aly:dragons_enabled');
});

