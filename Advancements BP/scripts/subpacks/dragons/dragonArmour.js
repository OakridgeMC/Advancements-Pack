import {
  world,
  system
} from "@minecraft/server";

const armours = [
  "dragons:void_armour",
  "dragons:forest_armour",
  "dragons:fire_armour",
  "dragons:tide_armour",
  "dragons:snow_armour",
  "dragons:sky_armour",
  "dragons:echo_armour",
  "dragons:mycelium_armour",
  "dragons:nether_armour",
  "dragons:common_armour",
  "dragons:enchanted_armour",
  "dragons:night_armour",
  "dragons:quake_armour",
  "dragons:deadly_armour",
  "dragons:bamboo_armour",
  "dragons:lethal_armour"
];

system.runInterval(() => {
  for (const player of world.getPlayers({ excludeTags: ["MayVary"] })) {
    for (const tag of player.getTags()) {
      if (armours.includes(tag)) {
        player.runCommand('function adv/subpacks/side_effects_may_vary/grant');
      }
    }
  }
  for (const player of world.getPlayers({ excludeTags: ["Unstoppable"] })) {
    if (player.hasTag("dragons:lethal_armour")) {
      player.runCommand('function adv/subpacks/unstoppable/grant');

    }
  }
}, 10);



