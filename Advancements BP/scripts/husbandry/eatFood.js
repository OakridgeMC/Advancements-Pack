import {
  world,
  system
} from "@minecraft/server";

const foodTypeId = [
  'minecraft:apple',
  'minecraft:baked_potato',
  'minecraft:beef',
  'minecraft:beetroot',
  'minecraft:beetroot_soup',
  'minecraft:bread',
  'minecraft:carrot',
  'minecraft:chicken',
  'minecraft:chorus_fruit',
  'minecraft:cod',
  'minecraft:cooked_beef',
  'minecraft:cooked_chicken',
  'minecraft:cooked_cod',
  'minecraft:cooked_mutton',
  'minecraft:cooked_porkchop',
  'minecraft:cooked_rabbit',
  'minecraft:cooked_salmon',
  'minecraft:cookie',
  'minecraft:dried_kelp',
  'minecraft:enchanted_golden_apple',
  'minecraft:glow_berries',
  'minecraft:golden_apple',
  'minecraft:golden_carrot',
  'minecraft:honey_bottle',
  'minecraft:melon_slice',
  'minecraft:mushroom_stew',
  'minecraft:mutton',
  'minecraft:poisonous_potato',
  'minecraft:porkchop',
  'minecraft:potato',
  'minecraft:pufferfish',
  'minecraft:pumpkin_pie',
  'minecraft:rabbit',
  'minecraft:rabbit_stew',
  'minecraft:rotten_flesh',
  'minecraft:salmon',
  'minecraft:spider_eye',
  'minecraft:suspicious_stew',
  'minecraft:sweet_berries',
  'minecraft:tropical_fish',
  'oakridge:meal',
  'oakridge:miners_stew',
  'oakridge:sweet_berry_pie',
  'oakridge:chorus_pie',
  'oakridge:apple_pie',
  'oakridge:golden_apple_pie',
  'oakridge:notch_apple_pie',
  'oakridge:cinnamon_roll',
  'oakridge:blazing_kebab',
  'oakridge:mincemeat_pie',
  'oakridge:puffer_cookie',
  'oakridge:sandwich_beef',
  'oakridge:sandwich_chicken',
  'oakridge:sandwich_fish',
  'oakridge:sandwich_mutton',
  'oakridge:sandwich_pork',
  'oakridge:sandwich_rabbit',
  'oakridge:sandwich_salmon'
];

world.afterEvents.itemCompleteUse.subscribe((event) => {
  const item = event.itemStack;
  const player = event.source;

  if (!item || !player) {
    return;
  }
  if (!foodTypeId.includes(item.typeId)) {
    return;
  }

  let tag = item.typeId.split(':').pop() ?? '';
  tag = tag[0].toUpperCase() + tag.substring(1);

  player.addTag(`Ate_${tag}`);
  if(player.hasTag('BalancedDiet')) {return;}
  player.runCommand('function adv/a_balanced_diet/test')
})