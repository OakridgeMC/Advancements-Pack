import {
  ActionFormData
} from "@minecraft/server-ui";

import {
  world
} from "@minecraft/server";

import { open_category_minecraft } from "./book/pageMinecraft.js";
import { open_category_nether } from "./book/pageNether.js";
import { open_category_end } from "./book/pageEnd.js";
import { open_category_adventure } from "./book/pageAdventure.js";
import { open_category_husbandry } from "./book/pageHusbandry.js";
import { open_category_achievements } from "./book/pageAchievements.js";
import { open_category_dungeons } from "./book/subpacks/pageDungeons.js";
import { open_category_dragons } from "./book/subpacks/pageDragons.js";
function getColour(pct) {
  var colour = ""
  if (pct <= 0) { colour = "§m" }
  if (pct > 0 && pct <= 24) {
    colour = "§c"
  }
  if (pct >= 25 && pct <= 49) {
    colour = "§6"
  }
  if (pct >= 50 && pct <= 74) {
    colour = "§e"
  }
  if (pct >= 75 && pct <= 99) {
    colour = "§q"
  }
  if (pct >= 100) {
    colour = "§a"
  }
  return colour
}

world.afterEvents.itemUse.subscribe(event => {
  if (event.itemStack.typeId === "adv:book_of_advancements") {

    let advancementCount = world.scoreboard.getObjective('AdvancementCount').getScore(event.source)
    let minecraftCount = world.scoreboard.getObjective('MinecraftCount').getScore(event.source)
    let netherCount = world.scoreboard.getObjective('NetherCount').getScore(event.source)
    let endCount = world.scoreboard.getObjective('EndCount').getScore(event.source)
    let adventureCount = world.scoreboard.getObjective('AdventureCount').getScore(event.source)
    let husbandryCount = world.scoreboard.getObjective('HusbandryCount').getScore(event.source)
    let achievementCount = world.scoreboard.getObjective('AchievementCount').getScore(event.source)

    let dungeonsCount = world.scoreboard.getObjective('DungeonsCount').getScore(event.source)
    let dragonsCount = world.scoreboard.getObjective('DragonsCount').getScore(event.source)

    let minecraftMax = 15
    let netherMax = 19
    let endMax = 7
    let adventureMax = 38
    let husbandryMax = 29
    let achievementMax = 14

    let advancementMax = (minecraftMax + netherMax + endMax + adventureMax + husbandryMax + achievementMax)

    let dungeonsMax = 11
    let dragonsMax = 7

    let advancementPct = (Math.round((advancementCount / advancementMax) * 1000)) / 10
    let minecraftPct = Math.round((minecraftCount / minecraftMax) * 100)
    let netherPct = Math.round((netherCount / netherMax) * 100)
    let endPct = Math.round((endCount / endMax) * 100)
    let adventurePct = Math.round((adventureCount / adventureMax) * 100)
    let husbandryPct = Math.round((husbandryCount / husbandryMax) * 100)
    let achievementPct = Math.round((achievementCount / achievementMax) * 100)

    let dungeonsPct = Math.round((dungeonsCount / dungeonsMax) * 100)
    let dragonsPct = Math.round((dragonsCount / dragonsMax) * 100)



    let minecraftColour = getColour(minecraftPct)
    let netherColour = getColour(netherPct)
    let endColour = getColour(endPct)
    let adventureColour = getColour(adventurePct)
    let husbandryColour = getColour(husbandryPct)
    let achievementColour = getColour(achievementPct)
    let dungeonsColour = getColour(dungeonsPct)
    let dragonsColour = getColour(dragonsPct)

    var buttonRoutes = ["Minecraft", "Nether", "End", "Adventure", "Husbandry", "Achievements"]

    let advancements = new ActionFormData();

    advancements.title("Advancements");
    advancements.body(`Click on a category to discover what advancements it holds.\n§eComplete :§b ${advancementCount}§e/§b${advancementMax}\n§6[${advancementPct}%%]`);

    advancements.button(`Minecraft  -  ${minecraftColour}${minecraftPct}%%`, "textures/icons/category/minecraft.png");

    advancements.button(`Nether  -  ${netherColour}${netherPct}%%`, "textures/icons/category/nether.png");

    advancements.button(`The End  -  ${endColour}${endPct}%%`, "textures/icons/category/the_end.png");

    advancements.button(`Adventure  -  ${adventureColour}${adventurePct}%%`, "textures/icons/category/adventure.png");

    advancements.button(`Husbandry  -  ${husbandryColour}${husbandryPct}%%`, "textures/icons/category/husbandry.png");

    advancements.button(`Achievements  -  ${achievementColour}${achievementPct}%%`, "textures/icons/category/achievements.png");

    if (event.source.hasTag('aly:dungeons_enabled')) {
      advancements.button(`§vAlylica's Dungeons§r  -  ${dungeonsColour}${dungeonsPct}%%`, "textures/icons/category/subpacks/dungeons.png");
      buttonRoutes.push("Dungeons")
    }

    if (event.source.hasTag('aly:dragons_enabled')) {
      advancements.button(`§uAlylica's Dragons§r  -  ${dragonsColour}${dragonsPct}%%`, "textures/icons/category/subpacks/dragons.png");
      buttonRoutes.push("Dragons")
    }

    advancements.show(event.source).then(r => {

      if (r.canceled) return;

      let response = r.selection;
      switch (buttonRoutes[response]) {
        case "Minecraft":
          open_category_minecraft(event.source, minecraftCount, minecraftMax, minecraftPct)
          break;

        case "Nether":
          open_category_nether(event.source, netherCount, netherMax, netherPct)
          break;

        case "End":
          open_category_end(event.source, endCount, endMax, endPct)
          break;
        case "Adventure":
          open_category_adventure(event.source, adventureCount, adventureMax, adventurePct)
          break;

        case "Husbandry":
          open_category_husbandry(event.source, husbandryCount, husbandryMax, husbandryPct)
          break;

        case "Achievements":
          open_category_achievements(event.source, achievementCount, achievementMax, achievementPct)
          break;

        case "Dungeons":
          open_category_dungeons(event.source, dungeonsCount, dungeonsMax, dungeonsPct)
          break;

        case "Dragons":
          open_category_dragons(event.source, dragonsCount, dragonsMax, dragonsPct)
          break;

        default:
          return;
      }
    }).catch(e => {
      console.error(e, e.stack);
    });
  };
});