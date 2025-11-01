import { ActionFormData } from "@minecraft/server-ui";

function open_category_adventure(player, count, max, pct) {
  let adventure = new ActionFormData();

  adventure.title("Adventure");
  adventure.body(
    `Adventure, exploration and combat.\n§eComplete :§b ${count}§e/§b${max}\n§6[${pct}%%]`
  );

  if (player.hasTag("MonsterHunter")) {
    adventure.button(
      "§aMonster Hunter",
      "textures/icons/advancement/monster_hunter.png"
    );
  } else {
    adventure.button(
      "Monster Hunter",
      "textures/icons/advancement/incomplete/monster_hunter.png"
    );
  }
  if (player.hasTag("TakeAim")) {
    adventure.button("§aTake Aim", "textures/icons/advancement/take_aim.png");
  } else {
    adventure.button(
      "Take Aim",
      "textures/icons/advancement/incomplete/take_aim.png"
    );
  }
  if (player.hasTag("SniperDuel")) {
    adventure.button(
      "§dSniper Duel",
      "textures/icons/advancement/sniper_duel.png"
    );
  } else {
    adventure.button(
      "Sniper Duel",
      "textures/icons/advancement/incomplete/sniper_duel.png"
    );
  }
  if (player.hasTag("ThrowawayJoke")) {
    adventure.button(
      "§aA Throwaway Joke",
      "textures/icons/advancement/a_throwaway_joke.png"
    );
  } else {
    adventure.button(
      "A Throwaway Joke",
      "textures/icons/advancement/incomplete/a_throwaway_joke.png"
    );
  }
  if (player.hasTag("VeryFrightening")) {
    adventure.button(
      "§aVery Very Frightening",
      "textures/icons/advancement/very_very_frightening.png"
    );
  } else {
    adventure.button(
      "Very Very Frightening",
      "textures/icons/advancement/incomplete/very_very_frightening.png"
    );
  }
  if (player.hasTag("MonstersHunted")) {
    adventure.button(
      "§dMonsters Hunted",
      "textures/icons/advancement/monsters_hunted.png"
    );
  } else {
    adventure.button(
      "Monsters Hunted",
      "textures/icons/advancement/incomplete/monsters_hunted.png"
    );
  }
  if (player.hasTag("Postmortal")) {
    adventure.button(
      "§ePostmortal",
      "textures/icons/advancement/postmortal.png"
    );
  } else {
    adventure.button(
      "Postmortal",
      "textures/icons/advancement/incomplete/postmortal.png"
    );
  }
  if (player.hasTag("StickySituation")) {
    adventure.button(
      "§aSticky Situation",
      "textures/icons/advancement/sticky_situation.png"
    );
  } else {
    adventure.button(
      "Sticky Situation",
      "textures/icons/advancement/incomplete/sticky_situation.png"
    );
  }
  if (player.hasTag("CraftLook")) {
    adventure.button(
      "§aCrafting a New Look",
      "textures/icons/advancement/crafting_a_new_look.png"
    );
  } else {
    adventure.button(
      "Crafting a New Look",
      "textures/icons/advancement/incomplete/crafting_a_new_look.png"
    );
  }
  if (player.hasTag("SmithingStyle")) {
    adventure.button(
      "§dSmithing with Style",
      "textures/icons/advancement/smithing_with_style.png"
    );
  } else {
    adventure.button(
      "Smithing with Style",
      "textures/icons/advancement/incomplete/smithing_with_style.png"
    );
  }
  if (player.hasTag("OlBetsy")) {
    adventure.button("§aOl' Betsy", "textures/icons/advancement/ol_betsy.png");
  } else {
    adventure.button(
      "Ol' Betsy",
      "textures/icons/advancement/incomplete/ol_betsy.png"
    );
  }
  if (player.hasTag("TwoBirds")) {
    adventure.button(
      "§dTwo Birds, One Arrow",
      "textures/icons/advancement/two_birds_one_arrow.png"
    );
  } else {
    adventure.button(
      "Two Birds, One Arrow",
      "textures/icons/advancement/incomplete/two_birds_one_arrow.png"
    );
  }
  if (player.hasTag("WhoPillager")) {
    adventure.button(
      "§aWho's the Pillager Now?",
      "textures/icons/advancement/whos_the_pillager_now.png"
    );
  } else {
    adventure.button(
      "Who's the Pillager Now",
      "textures/icons/advancement/incomplete/whos_the_pillager_now.png"
    );
  }
  if (player.hasTag("CavesCliffs")) {
    adventure.button(
      "§aCaves & Cliffs",
      "textures/icons/advancement/caves_and_cliffs.png"
    );
  } else {
    adventure.button(
      "Caves & Cliffs",
      "textures/icons/advancement/incomplete/caves_and_cliffs.png"
    );
  }
  if (player.hasTag("RespectingRemnants")) {
    adventure.button(
      "§aRespecting the Remnants",
      "textures/icons/advancement/respecting_the_remnants.png"
    );
  } else {
    adventure.button(
      "Respecting the Remnants",
      "textures/icons/advancement/incomplete/respecting_the_remnants.png"
    );
  }
  if (player.hasTag("CarefulRestoration")) {
    adventure.button(
      "§aCareful Restoration",
      "textures/icons/advancement/careful_restoration.png"
    );
  } else {
    adventure.button(
      "Careful Restoration",
      "textures/icons/advancement/incomplete/careful_restoration.png"
    );
  }
  if (player.hasTag("PowerBooks")) {
    adventure.button(
      "§aThe Power of Books",
      "textures/icons/advancement/the_power_of_books.png"
    );
  } else {
    adventure.button(
      "The Power of Books",
      "textures/icons/advancement/incomplete/the_power_of_books.png"
    );
  }
  if (player.hasTag("Bullseye")) {
    adventure.button("§aBullseye", "textures/icons/advancement/bullseye.png");
  } else {
    adventure.button(
      "Bullseye",
      "textures/icons/advancement/incomplete/bullseye.png"
    );
  }
  if (player.hasTag("Sneak100")) {
    adventure.button("§aSneak 100", "textures/icons/advancement/sneak_100.png");
  } else {
    adventure.button(
      "Sneak 100",
      "textures/icons/advancement/incomplete/sneak_100.png"
    );
  }
  if (player.hasTag("ItSpreads")) {
    adventure.button(
      "§dIt Spreads",
      "textures/icons/advancement/it_spreads.png"
    );
  } else {
    adventure.button(
      "It Spreads",
      "textures/icons/advancement/incomplete/it_spreads.png"
    );
  }
  if (player.hasTag("SweetDreams")) {
    adventure.button(
      "§aSweet Dreams",
      "textures/icons/advancement/sweet_dreams.png"
    );
  } else {
    adventure.button(
      "Sweet Dreams",
      "textures/icons/advancement/incomplete/sweet_dreams.png"
    );
  }
  if (player.hasTag("AdventuringTime")) {
    adventure.button(
      "§dAdventuring Time",
      "textures/icons/advancement/adventuring_time.png"
    );
  } else {
    adventure.button(
      "Adventuring Time",
      "textures/icons/advancement/incomplete/adventuring_time.png"
    );
  }
  if (player.hasTag("LightRabbit")) {
    adventure.button(
      "§aLight as a Rabbit",
      "textures/icons/advancement/light_as_a_rabbit.png"
    );
  } else {
    adventure.button(
      "Light as a Rabbit",
      "textures/icons/advancement/incomplete/light_as_a_rabbit.png"
    );
  }
  if (player.hasTag("ItScute")) {
    adventure.button(
      "§aIsn't it Scute?",
      "textures/icons/advancement/isnt_it_scute.png"
    );
  } else {
    adventure.button(
      "Isn't it Scute?",
      "textures/icons/advancement/incomplete/isnt_it_scute.png"
    );
  }
  if (player.hasTag("HiredHelp")) {
    adventure.button(
      "§eHired Help",
      "textures/icons/advancement/hired_help.png"
    );
  } else {
    adventure.button(
      "Hired Help",
      "textures/icons/advancement/incomplete/hired_help.png"
    );
  }
  if (player.hasTag("VoluntaryExile")) {
    adventure.button(
      "§aVoluntary Exile",
      "textures/icons/advancement/voluntary_exile.png"
    );
  } else {
    adventure.button(
      "Voluntary Exile",
      "textures/icons/advancement/incomplete/voluntary_exile.png"
    );
  }
  if (player.hasTag("HeroVillage")) {
    adventure.button(
      "§dHero of the Village",
      "textures/icons/advancement/hero_of_the_village.png"
    );
  } else {
    adventure.button(
      "Hero of the Village",
      "textures/icons/advancement/incomplete/hero_of_the_village.png"
    );
  }
  if (player.hasTag("ItBird")) {
    adventure.button(
      "§aIs It a Bird?",
      "textures/icons/advancement/is_it_a_bird.png"
    );
  } else {
    adventure.button(
      "Is It a Bird?",
      "textures/icons/advancement/incomplete/is_it_a_bird.png"
    );
  }
  if (player.hasTag("ItBalloon")) {
    adventure.button(
      "§aIs It a Balloon?",
      "textures/icons/advancement/is_it_a_balloon.png"
    );
  } else {
    adventure.button(
      "Is It a Balloon?",
      "textures/icons/advancement/incomplete/is_it_a_balloon.png"
    );
  }
  if (player.hasTag("ItPlane")) {
    adventure.button(
      "§aIs It a Plane?",
      "textures/icons/advancement/is_it_a_plane.png"
    );
  } else {
    adventure.button(
      "Is It a Plane?",
      "textures/icons/advancement/incomplete/is_it_a_plane.png"
    );
  }
  if (player.hasTag("CountryLode")) {
    adventure.button(
      "§aCountry Lode, Take Me Home",
      "textures/icons/advancement/country_lode_take_me_home.png"
    );
  } else {
    adventure.button(
      "Country Lode, Take Me Home",
      "textures/icons/advancement/incomplete/country_lode_take_me_home.png"
    );
  }
  if (player.hasTag("LightenUp")) {
    adventure.button(
      "§aLighten Up",
      "textures/icons/advancement/lighten_up.png"
    );
  } else {
    adventure.button(
      "Lighten Up",
      "textures/icons/advancement/incomplete/lighten_up.png"
    );
  }
  if (player.hasTag("LockKey")) {
    adventure.button(
      "§aUnder Lock and Key",
      "textures/icons/advancement/under_lock_and_key.png"
    );
  } else {
    adventure.button(
      "Under Lock and Key",
      "textures/icons/advancement/incomplete/under_lock_and_key.png"
    );
  }
  if (player.hasTag("Revaulting")) {
    adventure.button(
      "§eRevaulting",
      "textures/icons/advancement/revaulting.png"
    );
  } else {
    adventure.button(
      "Revaulting",
      "textures/icons/advancement/incomplete/revaulting.png"
    );
  }
  if (player.hasTag("NeedsRockets")) {
    adventure.button(
      "§aWho Needs Rockets?",
      "textures/icons/advancement/who_needs_rockets.png"
    );
  } else {
    adventure.button(
      "Who Needs Rockets?",
      "textures/icons/advancement/incomplete/who_needs_rockets.png"
    );
  }
  if (player.hasTag("Blowback")) {
    adventure.button("§dBlowback", "textures/icons/advancement/blowback.png");
  } else {
    adventure.button(
      "Blowback",
      "textures/icons/advancement/incomplete/blowback.png"
    );
  }
  if (player.hasTag("OverOverkill")) {
    adventure.button(
      "§dOver-Overkill",
      "textures/icons/advancement/over_overkill.png"
    );
  } else {
    adventure.button(
      "Over-Overkill",
      "textures/icons/advancement/incomplete/over_overkill.png"
    );
  }
  if (player.hasTag("HeartTransplanter")) {
    adventure.button(
      "§aHeart Transplanter",
      "textures/icons/advancement/heart_transplanter.png"
    );
  } else {
    adventure.button(
      "Heart Transplanter",
      "textures/icons/advancement/incomplete/heart_transplanter.png"
    );
  }

  adventure
    .show(player)
    .then((r) => {
      if (r.canceled) return;

      let response = r.selection;
      switch (response) {
        case 0:
          let monsterHunter = new ActionFormData();
          monsterHunter.title("Monster Hunter");
          monsterHunter.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Kill any Hostile Monster\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          monsterHunter.button("Close");
          monsterHunter
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let monsterHunter_response = r.selection;
              switch (monsterHunter_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 1:
          let takeAim = new ActionFormData();
          takeAim.title("Take Aim");
          takeAim.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Shoot something with an Arrow\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          takeAim.button("Close");
          takeAim
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let takeAim_response = r.selection;
              switch (takeAim_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 2:
          let sniperDuel = new ActionFormData();
          sniperDuel.title("Sniper Duel");
          sniperDuel.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Kill a Skeleton from at least 50 meters away\n\n§e Reward\n§r 50 experience\n\n§e Type\n§d Challenge\n\n"
          );
          sniperDuel.button("Close");
          sniperDuel
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let sniperDuel_response = r.selection;
              switch (sniperDuel_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 3:
          let throwawayJoke = new ActionFormData();
          throwawayJoke.title("A Throwaway Joke");
          throwawayJoke.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Throw a Trident at something. Note: Throwing away your only weapon is not a good idea.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          throwawayJoke.button("Close");
          throwawayJoke
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let throwawayJoke_response = r.selection;
              switch (throwawayJoke_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 4:
          let veryFrightening = new ActionFormData();
          veryFrightening.title("Very Very Frightening");
          veryFrightening.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Strike a Villager with lightning\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          veryFrightening.button("Close");
          veryFrightening
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let veryFrightening_response = r.selection;
              switch (veryFrightening_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 5:
          let monstersHunted = new ActionFormData();
          monstersHunted.title("Monsters Hunted");
          monstersHunted.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Kill one of every hostile monster\n\n§e Reward\n§r 100 experience\n\n§e Type\n§d Challenge\n\n"
          );
          monstersHunted.button("Close");
          monstersHunted
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let monstersHunted_response = r.selection;
              switch (monstersHunted_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 6:
          let postmortal = new ActionFormData();
          postmortal.title("Postmortal");
          postmortal.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Use a Totem of Undying to cheat death\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n"
          );
          postmortal.button("Close");
          postmortal
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let postmortal_response = r.selection;
              switch (postmortal_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 7:
          let stickySituation = new ActionFormData();
          stickySituation.title("Sticky Situation");
          stickySituation.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Jump into a Honey Block to break your fall\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          stickySituation.button("Close");
          stickySituation
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let stickySituation_response = r.selection;
              switch (stickySituation_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 8:
          let craftLook = new ActionFormData();
          craftLook.title("Crafting a New Look");
          craftLook.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Obtain an Armour Trim Smithing Template\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          craftLook.button("Close");
          craftLook
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let craftLook_response = r.selection;
              switch (craftLook_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 9:
          let smithingStyle = new ActionFormData();
          smithingStyle.title("Smithing with Style");
          smithingStyle.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Carry these smithing templates at once : Spire, Snout, Rib, Ward, Silence, Vex, Tide, Wayfinder\n\n§e Reward\n§r 150 experience\n\n§e Type\n§d Challenge\n\n"
          );
          smithingStyle.button("Close");
          smithingStyle
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let smithingStyle_response = r.selection;
              switch (smithingStyle_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 10:
          let olBetsy = new ActionFormData();
          olBetsy.title("Ol' Betsy");
          olBetsy.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Use a Crossbow\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          olBetsy.button("Close");
          olBetsy
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let olBetsy_response = r.selection;
              switch (olBetsy_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 11:
          let twoBirds = new ActionFormData();
          twoBirds.title("Two Birds, One Arrow");
          twoBirds.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Kill two Phantoms with a piercing Arrow\n\n§e Reward\n§r 65 experience\n\n§e Type\n§d Challenge\n\n"
          );
          twoBirds.button("Close");
          twoBirds
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let twoBirds_response = r.selection;
              switch (twoBirds_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 12:
          let whoPillager = new ActionFormData();
          whoPillager.title("Who's the Pillager Now?");
          whoPillager.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Give a Pillager a taste of their own medicine\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          whoPillager.button("Close");
          whoPillager
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let whoPillager_response = r.selection;
              switch (whoPillager_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 13:
          let cavesCliffs = new ActionFormData();
          cavesCliffs.title("Caves & Cliffs");
          cavesCliffs.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Free fall from the top of the world (build limit) to the bottom of the world and survive\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          cavesCliffs.button("Close");
          cavesCliffs
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let cavesCliffs_response = r.selection;
              switch (cavesCliffs_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 14:
          let respectingRemnants = new ActionFormData();
          respectingRemnants.title("Respecting the Remnants");
          respectingRemnants.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Use your brush to uncover a Pottery Sherd\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          respectingRemnants.button("Close");
          respectingRemnants
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let respectingRemnants_response = r.selection;
              switch (respectingRemnants_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 15:
          let carefulRestoration = new ActionFormData();
          carefulRestoration.title("Careful Restoration");
          carefulRestoration.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Construct a Decorated Pot\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          carefulRestoration.button("Close");
          carefulRestoration
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let carefulRestoration_response = r.selection;
              switch (carefulRestoration_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 16:
          let powerBooks = new ActionFormData();
          powerBooks.title("The Power of Books");
          powerBooks.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Read the power signal of a Chiseled Bookshelf using a Comparator\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          powerBooks.button("Close");
          powerBooks
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let powerBooks_response = r.selection;
              switch (powerBooks_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 17:
          let bullseye = new ActionFormData();
          bullseye.title("Bullseye");
          bullseye.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Hit the bullseye of a Target block from at least 30 meters away\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          bullseye.button("Close");
          bullseye
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let bullseye_response = r.selection;
              switch (bullseye_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 18:
          let sneak100 = new ActionFormData();
          sneak100.title("Sneak 100");
          sneak100.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Sneak past a warden to prevent it sensing you\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          sneak100.button("Close");
          sneak100
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let sneak100_response = r.selection;
              switch (sneak100_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 19:
          let itSpreads = new ActionFormData();
          itSpreads.title("It Spreads");
          itSpreads.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Kill a mob near a Sculk Catalyst\n\n§e Reward\n§r None\n\n§e Type\n§d Challenge\n\n"
          );
          itSpreads.button("Close");
          itSpreads
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let itSpreads_response = r.selection;
              switch (itSpreads_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 20:
          let sweetDreams = new ActionFormData();
          sweetDreams.title("Sweet Dreams");
          sweetDreams.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Sleep in a Bed to change your respawn point\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          sweetDreams.button("Close");
          sweetDreams
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let sweetDreams_response = r.selection;
              switch (sweetDreams_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 21:
          let adventuringTime = new ActionFormData();
          adventuringTime.title("Adventuring Time");
          adventuringTime.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Discover every biome\n\n§e Reward\n§r 500 experience\n\n§e Type\n§d Challenge\n\n"
          );
          adventuringTime.button("Close");
          adventuringTime
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let adventuringTime_response = r.selection;
              switch (adventuringTime_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 22:
          let lightRabbit = new ActionFormData();
          lightRabbit.title("Light as a Rabbit");
          lightRabbit.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Walk on Powder Snow... without sinking in it\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          lightRabbit.button("Close");
          lightRabbit
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let lightRabbit_response = r.selection;
              switch (lightRabbit_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 23:
          let itScute = new ActionFormData();
          itScute.title("Isn't it Scute");
          itScute.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Get Armadillo Scutes from an Armadillo using a Brush\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          itScute.button("Close");
          itScute
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let itScute_response = r.selection;
              switch (itScute_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 24:
          let hiredHelp = new ActionFormData();
          hiredHelp.title("Hired Help");
          hiredHelp.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Summon an Iron Golem to help defend a village\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n"
          );
          hiredHelp.button("Close");
          hiredHelp
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let hiredHelp_response = r.selection;
              switch (hiredHelp_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 25:
          let voluntaryExile = new ActionFormData();

          if (player.hasTag("VoluntaryExile")) {
            voluntaryExile.title("Voluntary Exile");
            voluntaryExile.body(
              "§7 Category\n§r Adventure\n\n§7 Description\n§r Kill a raid captain. Maybe consider staying away from villages for the time being...\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            voluntaryExile.button("Close");
          } else {
            voluntaryExile.title("???");
            voluntaryExile.body(
              "§7 Category\n§r Adventure\n\n§7 Description\n§r This advancement is a secret, its info is only revealed after completion.\n"
            );
            voluntaryExile.button("Close");
          }

          voluntaryExile
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let voluntaryExile_response = r.selection;
              switch (voluntaryExile_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 26:
          let VillageHero = new ActionFormData();

          if (player.hasTag("HeroVillage")) {
            VillageHero.title("Hero of the Village");
            VillageHero.body(
              "§7 Category\n§r Adventure\n\n§7 Description\n§r Defend a Village from a raid \n\n§e Reward\n§r 100 experience\n\n§e Type\n§d Challenge\n\n"
            );
            VillageHero.button("Close");
          } else {
            VillageHero.title("???");
            VillageHero.body(
              "§7 Category\n§r Adventure\n\n§7 Description\n§r This advancement is a secret, its info is only revealed after completion.\n"
            );
            VillageHero.button("Close");
          }

          VillageHero.show(player)
            .then((r) => {
              if (r.canceled) return;

              let VillageHero_response = r.selection;
              switch (VillageHero_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 27:
          let itBird = new ActionFormData();
          itBird.title("Is It a Bird");
          itBird.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Look at a Parrot through a Spyglass\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          itBird.button("Close");
          itBird
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let itBird_response = r.selection;
              switch (itBird_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 28:
          let itBalloon = new ActionFormData();
          itBalloon.title("Is It a Balloon");
          itBalloon.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Look at a Ghast through a Spyglass\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          itBalloon.button("Close");
          itBalloon
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let itBalloon_response = r.selection;
              switch (itBalloon_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 29:
          let itPlane = new ActionFormData();
          itPlane.title("Is It a Plane");
          itPlane.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Look at the Ender Dragon through a Spyglass\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          itPlane.button("Close");
          itPlane
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let itPlane_response = r.selection;
              switch (itPlane_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 30:
          let countryLode = new ActionFormData();
          countryLode.title("Country Lode, Take Me Home");
          countryLode.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Use a Compass on a Lodestone\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          countryLode.button("Close");
          countryLode
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let countryLode_response = r.selection;
              switch (countryLode_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 31:
          let lightenUp = new ActionFormData();
          lightenUp.title("Lighten Up");
          lightenUp.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Scrape a Copper Bulb with an Axe to make it brighter\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          lightenUp.button("Close");
          lightenUp
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let lightenUp_response = r.selection;
              switch (lightenUp_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 32:
          let lockKey = new ActionFormData();
          lockKey.title("Under Lock and Key");
          lockKey.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Use a Trial Key on a Vault\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          lockKey.button("Close");
          lockKey
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let lockKey_response = r.selection;
              switch (lockKey_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 33:
          let revaulting = new ActionFormData();
          revaulting.title("Revaulting");
          revaulting.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Use an Ominous Trial Key on an Ominous Vault\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n"
          );
          revaulting.button("Close");
          revaulting
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let revaulting_response = r.selection;
              switch (revaulting_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 34:
          let needsRockets = new ActionFormData();
          needsRockets.title("Who Needs Rockets?");
          needsRockets.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Use a Wind Charge\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          needsRockets.button("Close");
          needsRockets
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let needsRockets_response = r.selection;
              switch (needsRockets_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 35:
          let blowback = new ActionFormData();
          blowback.title("Blowback");
          blowback.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Kill a Breeze with a deflected Breeze-shot Wind Charge\n\n§e Reward\n§r 40 experience\n\n§e Type\n§d Challenge\n\n"
          );
          blowback.button("Close");
          blowback
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let blowback_response = r.selection;
              switch (blowback_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 36:
          let overOverkill = new ActionFormData();
          overOverkill.title("Over-Overkill");
          overOverkill.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Deal atleast 50 hearts of damage in a single hit using the Mace\n\n§e Reward\n§r 50 experience\n\n§e Type\n§d Challenge\n\n"
          );
          overOverkill.button("Close");
          overOverkill
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let overOverkill_response = r.selection;
              switch (overOverkill_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        case 37:
          let heartTransplanter = new ActionFormData();
          heartTransplanter.title("Heart Transplanter");
          heartTransplanter.body(
            "§7 Category\n§r Adventure\n\n§7 Description\n§r Place a Creaking Heart with the correct alignment between two Pale Oak Log blocks\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
          );
          heartTransplanter.button("Close");
          heartTransplanter
            .show(player)
            .then((r) => {
              if (r.canceled) return;

              let heartTransplanter_response = r.selection;
              switch (heartTransplanter_response) {
                default:
                  return;
              }
            })
            .catch((e) => {
              console.error(e, e.stack);
            });
          break;
        default:
          return;
      }
      // end of switch
    })
    .catch((e) => {
      console.error(e, e.stack);
    });
}

export { open_category_adventure };
