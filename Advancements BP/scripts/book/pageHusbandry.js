import {
    ActionFormData
} from "@minecraft/server-ui";


function open_category_husbandry(player, count, max, pct) {

    let husbandry = new ActionFormData();

    husbandry.title("Husbandry");
    husbandry.body(`The world is full of friends and food.\n§eComplete :§b ${count}§e/§b${max}\n§6[${pct}%%]`);
    if (player.hasTag('BestFriends')) {
        husbandry.button("§aBest Friends Forever", "textures/icons/advancement/best_friends_forever.png");
    } else {
        husbandry.button("Best Friends Forever", "textures/icons/advancement/incomplete/best_friends_forever.png");
    }
    if (player.hasTag('CompleteCatalogue')) {
        husbandry.button("§dA Complete Catalogue", "textures/icons/advancement/a_complete_catalogue.png");
    } else {
        husbandry.button("A Complete Catalogue", "textures/icons/advancement/incomplete/a_complete_catalogue.png");
    }
    if (player.hasTag('WholePack')) {
        husbandry.button("§dThe Whole Pack", "textures/icons/advancement/the_whole_pack.png");
    } else {
        husbandry.button("The Whole Pack", "textures/icons/advancement/incomplete/the_whole_pack.png");
    }
    if (player.hasTag('ParrotsBats')) {
        husbandry.button("§aThe Parrots and the Bats", "textures/icons/advancement/the_parrots_and_the_bats.png");
    } else {
        husbandry.button("The Parrots and the Bats", "textures/icons/advancement/incomplete/the_parrots_and_the_bats.png");
    }
    if (player.hasTag('TwoTwo')) {
        husbandry.button("§dTwo by Two", "textures/icons/advancement/two_by_two.png");
    } else {
        husbandry.button("Two by Two", "textures/icons/advancement/incomplete/two_by_two.png");
    }
    if (player.hasTag('FloatGoat')) {
        husbandry.button("§aWhatever Floats Your Goat!", "textures/icons/advancement/whatever_floats_your_goat.png");
    } else {
        husbandry.button("Whatever Floats Your Goat!", "textures/icons/advancement/incomplete/whatever_floats_your_goat.png");
    }
    if (player.hasTag('BeeGuest')) {
        husbandry.button("§aBee Our Guest", "textures/icons/advancement/bee_our_guest.png");
    } else {
        husbandry.button("Bee Our Guest", "textures/icons/advancement/incomplete/bee_our_guest.png");
    }
    if (player.hasTag('TotalBeelocation')) {
        husbandry.button("§aTotal Beelocation", "textures/icons/advancement/total_beelocation.png");
    } else {
        husbandry.button("Total Beelocation", "textures/icons/advancement/incomplete/total_beelocation.png");
    }
    if (player.hasTag('WaxOn')) {
        husbandry.button("§aWax On", "textures/icons/advancement/wax_on.png");
    } else {
        husbandry.button("Wax On", "textures/icons/advancement/incomplete/wax_on.png");
    }
    if (player.hasTag('WaxOff')) {
        husbandry.button("§aWax Off", "textures/icons/advancement/wax_off.png");
    } else {
        husbandry.button("Wax Off", "textures/icons/advancement/incomplete/wax_off.png");
    }
    if (player.hasTag('GlowBehold')) {
        husbandry.button("§aGlow and Behold!", "textures/icons/advancement/glow_and_behold.png");
    } else {
        husbandry.button("Glow and Behold!", "textures/icons/advancement/incomplete/glow_and_behold.png");
    }
    if (player.hasTag('FishyBusiness')) {
        husbandry.button("§aFishy Business", "textures/icons/advancement/fishy_business.png");
    } else {
        husbandry.button("Fishy Business", "textures/icons/advancement/incomplete/fishy_business.png");
    }
    if (player.hasTag('TacticalFishing')) {
        husbandry.button("§aTactical Fishing", "textures/icons/advancement/tactical_fishing.png");
    } else {
        husbandry.button("Tactical Fishing", "textures/icons/advancement/incomplete/tactical_fishing.png");
    }
    if (player.hasTag('CutestPredator')) {
        husbandry.button("§aThe Cutest Predator", "textures/icons/advancement/the_cutest_predator.png");
    } else {
        husbandry.button("The Cutest Predator", "textures/icons/advancement/incomplete/the_cutest_predator.png");
    }
    if (player.hasTag('PowerFriendship')) {
        husbandry.button("§aThe Healing Power of Friendship!", "textures/icons/advancement/the_healing_power_of_friendship.png");
    } else {
        husbandry.button("The Healing Power of Friendship!", "textures/icons/advancement/incomplete/the_healing_power_of_friendship.png");
    }
    if (player.hasTag('BukkitBukkit')) {
        husbandry.button("§aBukkit Bukkit", "textures/icons/advancement/bukkit_bukkit.png");
    } else {
        husbandry.button("Bukkit Bukkit", "textures/icons/advancement/incomplete/bukkit_bukkit.png");
    }
    if (player.hasTag('SquadHops')) {
        husbandry.button("§aWhen the Squad Hops into Town", "textures/icons/advancement/when_the_squad_hops_into_town.png");
    } else {
        husbandry.button("When the Squad Hops into Town", "textures/icons/advancement/incomplete/when_the_squad_hops_into_town.png");
    }
    if (player.hasTag('PowersCombined')) {
        husbandry.button("§dWith Our Powers Combined", "textures/icons/advancement/with_our_powers_combined.png");
    } else {
        husbandry.button("With Our Powers Combined", "textures/icons/advancement/incomplete/with_our_powers_combined.png");
    }
    if (player.hasTag('GoodNew')) {
        husbandry.button("§aGood as New", "textures/icons/advancement/good_as_new.png");
    } else {
        husbandry.button("Good as New", "textures/icons/advancement/incomplete/good_as_new.png");
    }
    if (player.hasTag('ShearBrilliance')) {
        husbandry.button("§aShear Brilliance", "textures/icons/advancement/shear_brilliance.png");
    } else {
        husbandry.button("Shear Brilliance", "textures/icons/advancement/incomplete/shear_brilliance.png");
    }
    if (player.hasTag('SeedyPlace')) {
        husbandry.button("§aA Seedy Place", "textures/icons/advancement/a_seedy_place.png");
    } else {
        husbandry.button("A Seedy Place", "textures/icons/advancement/incomplete/a_seedy_place.png");
    }
    if (player.hasTag('BalancedDiet')) {
        husbandry.button("§dA Balanced Diet", "textures/icons/advancement/a_balanced_diet.png");
    } else {
        husbandry.button("A Balanced Diet", "textures/icons/advancement/incomplete/a_balanced_diet.png");
    }
    if (player.hasTag('SeriousDedication')) {
        husbandry.button("§dSerious Dedication", "textures/icons/advancement/serious_dedication.png");
    } else {
        husbandry.button("Serious Dedication", "textures/icons/advancement/incomplete/serious_dedication.png");
    }
    if (player.hasTag('StayHydrated')) {
        husbandry.button("§aStay Hydrated", "textures/icons/advancement/stay_hydrated.png");
    } else {
        husbandry.button("Stay Hydrated", "textures/icons/advancement/incomplete/stay_hydrated.png");
    }
    if (player.hasTag('FriendMe')) {
        husbandry.button("§aYou've Got a Friend in Me", "textures/icons/advancement/youve_got_a_friend_in_me.png");
    } else {
        husbandry.button("You've Got a Friend in Me", "textures/icons/advancement/incomplete/youve_got_a_friend_in_me.png");
    }
    if (player.hasTag('BirthdaySong')) {
        husbandry.button("§aBirthday Song", "textures/icons/advancement/birthday_song.png");
    } else {
        husbandry.button("Birthday Song", "textures/icons/advancement/incomplete/birthday_song.png");
    }
    if (player.hasTag('SmellsInteresting')) {
        husbandry.button("§aSmells Interesting", "textures/icons/advancement/smells_interesting.png");
    } else {
        husbandry.button("Smells Interesting", "textures/icons/advancement/incomplete/smells_interesting.png");
    }
    if (player.hasTag('LittleSniffs')) {
        husbandry.button("§aLittle Sniffs", "textures/icons/advancement/little_sniffs.png");
    } else {
        husbandry.button("Little Sniffs", "textures/icons/advancement/incomplete/little_sniffs.png");
    }
    if (player.hasTag('PlantingPast')) {
        husbandry.button("§aPlanting the Past", "textures/icons/advancement/planting_the_past.png");
    } else {
        husbandry.button("Planting the Past", "textures/icons/advancement/incomplete/planting_the_past.png");
    }

    husbandry.show(player).then(r => {
        if (r.canceled) return;

        let response = r.selection;
        switch (response) {
          case 0:
            let bestFriends = new ActionFormData();
            bestFriends.title("Best Friends Forever");
            bestFriends.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Tame an animal\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            bestFriends.button("Close");
            bestFriends
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let bestFriends_response = r.selection;
                switch (bestFriends_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 1:
            let completeCatalogue = new ActionFormData();
            completeCatalogue.title("A Complete Catalogue");
            completeCatalogue.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Tame all Cat variants!\n\n§e Reward\n§r 50 experience\n\n§e Type\n§d Challenge\n\n"
            );
            completeCatalogue.button("Close");
            completeCatalogue
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let completeCatalogue_response = r.selection;
                switch (completeCatalogue_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;
          case 2:
            let wholePack = new ActionFormData();
            wholePack.title("The Whole Pack");
            wholePack.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Tame one of each Wolf variant\n\n§e Reward\n§r 50 experience\n\n§e Type\n§d Challenge\n\n"
            );
            wholePack.button("Close");
            wholePack
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let wholePack_response = r.selection;
                switch (wholePack_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;
          case 3:
            let parrotsBats = new ActionFormData();
            parrotsBats.title("The Parrots and the Bats");
            parrotsBats.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Breed two animals together\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            parrotsBats.button("Close");
            parrotsBats
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let parrotsBats_response = r.selection;
                switch (parrotsBats_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;
          case 4:
            let twoByTwo = new ActionFormData();
            twoByTwo.title("Two by Two");
            twoByTwo.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r 	Breed all the animals!\n\n§e Reward\n§r 100 experience\n\n§e Type\n§d Challenge\n\n"
            );
            twoByTwo.button("Close");
            twoByTwo
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let twoByTwo_response = r.selection;
                switch (twoByTwo_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 5:
            let floatGoat = new ActionFormData();
            floatGoat.title("Whatever Floats Your Goat!");
            floatGoat.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Get in a Boat and float with a Goat\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            floatGoat.button("Close");
            floatGoat
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let floatGoat_response = r.selection;
                switch (floatGoat_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 6:
            let beeGuest = new ActionFormData();
            beeGuest.title("Bee Our Guest");
            beeGuest.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Collect Honey in a bottle\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            beeGuest.button("Close");
            beeGuest
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let beeGuest_response = r.selection;
                switch (beeGuest_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 7:
            let beelocation = new ActionFormData();
            beelocation.title("Total Beelocation");
            beelocation.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Move a Bee Nest using Silk Touch\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            beelocation.button("Close");
            beelocation
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let beelocation_response = r.selection;
                switch (beelocation_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 8:
            let waxOn = new ActionFormData();
            waxOn.title("Wax On");
            waxOn.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Apply Honeycomb to a Copper block!\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            waxOn.button("Close");
            waxOn
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let waxOn_response = r.selection;
                switch (waxOn_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 9:
            let waxOff = new ActionFormData();
            waxOff.title("Wax Off");
            waxOff.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Scrape Wax off a Copper block!\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            waxOff.button("Close");
            waxOff
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let waxOff_response = r.selection;
                switch (waxOff_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 10:
            let glowBehold = new ActionFormData();
            glowBehold.title("Glow and Behold!");
            glowBehold.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Make the text of any kind of sign glow\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            glowBehold.button("Close");
            glowBehold
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let glowBehold_response = r.selection;
                switch (glowBehold_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 11:
            let fishyBusiness = new ActionFormData();
            fishyBusiness.title("Fishy Business");
            fishyBusiness.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Reel in a Fishing Rod\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            fishyBusiness.button("Close");
            fishyBusiness
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let fishyBusiness_response = r.selection;
                switch (fishyBusiness_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 12:
            let tacticalFishing = new ActionFormData();
            tacticalFishing.title("Tactical Fishing");
            tacticalFishing.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Catch a Fish... without a Fishing Rod!\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            tacticalFishing.button("Close");
            tacticalFishing
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let tacticalFishing_response = r.selection;
                switch (tacticalFishing_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 13:
            let cutestPredator = new ActionFormData();
            cutestPredator.title("The Cutest Predator");
            cutestPredator.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Catch an Axolotl in a Bucket\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            cutestPredator.button("Close");
            cutestPredator
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let cutestPredator_response = r.selection;
                switch (cutestPredator_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 14:
            let powerFriendship = new ActionFormData();
            powerFriendship.title("The Healing Power of Friendship!");
            powerFriendship.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Have the Regeneration effect applied from assisting an axolotl in killing a mob.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            powerFriendship.button("Close");
            powerFriendship
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let powerFriendship_response = r.selection;
                switch (powerFriendship_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 15:
            let bukkitBukkit = new ActionFormData();
            bukkitBukkit.title("Bukkit Bukkit");
            bukkitBukkit.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Catch an Tadpole in a Bucket\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            bukkitBukkit.button("Close");
            bukkitBukkit
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let bukkitBukkit_response = r.selection;
                switch (bukkitBukkit_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 16:
            let squadHops = new ActionFormData();
            squadHops.title("When the Squad Hops into Town");
            squadHops.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Get each Frog variant on a Lead\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            squadHops.button("Close");
            squadHops
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let squadHops_response = r.selection;
                switch (squadHops_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 17:
            let powersCombined = new ActionFormData();
            powersCombined.title("With Our Powers Combined!");
            powersCombined.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Have all Froglights in your inventory\n\n§e Reward\n§r None\n\n§e Type\n§d Challenge\n\n"
            );
            powersCombined.button("Close");
            powersCombined
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let powersCombined_response = r.selection;
                switch (powersCombined_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 18:
            let goodNew = new ActionFormData();
            goodNew.title("Good as New");
            goodNew.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Repair a damaged Wolf Armour using Armadillo Scutes\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            goodNew.button("Close");
            goodNew
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let goodNew_response = r.selection;
                switch (goodNew_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 19:
            let shearBrilliance = new ActionFormData();
            shearBrilliance.title("Shear Brilliance");
            shearBrilliance.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Remove Wolf Armour from a Wolf using Shears\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            shearBrilliance.button("Close");
            shearBrilliance
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let shearBrilliance_response = r.selection;
                switch (shearBrilliance_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 20:
            let seedyPlace = new ActionFormData();
            seedyPlace.title("A Seedy Place");
            seedyPlace.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Plant a seed and watch it grow\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            seedyPlace.button("Close");
            seedyPlace
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let seedyPlace_response = r.selection;
                switch (seedyPlace_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 21:
            let balancedDiet = new ActionFormData();
            balancedDiet.title("A Balanced Diet");
            balancedDiet.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Eat everything that is edible (except Cake), even if it's not good for you\n\n§e Reward\n§r 100 Experience\n\n§e Type\n§d Challenge\n\n"
            );
            balancedDiet.button("Close");
            balancedDiet
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let balancedDiet_response = r.selection;
                switch (balancedDiet_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 22:
            let seriousDedication = new ActionFormData();
            seriousDedication.title("Serious Dedication");
            seriousDedication.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Use a Netherite Ingot to upgrade a Hoe, and then reevaluate your life choices\n\n§e Reward\n§r 100 Experience\n\n§e Type\n§d Challenge\n\n"
            );
            seriousDedication.button("Close");
            seriousDedication
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let seriousDedication_response = r.selection;
                switch (seriousDedication_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 23:
            let stayHydrated = new ActionFormData();
            stayHydrated.title("Stay Hydrated!");
            stayHydrated.body(
              "§7 Category\n§r Husbandry\n\n§7 Description\n§r Place a Dried Ghast block into water\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
            );
            stayHydrated.button("Close");
            stayHydrated
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let stayHydrated_response = r.selection;
                switch (stayHydrated_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 24:
            let friendMe = new ActionFormData();

            if (player.hasTag("FriendMe")) {
              friendMe.title("You've Got a Friend in Me");
              friendMe.body(
                "§7 Category\n§r Husbandry\n\n§7 Description\n§r Exchange items with an Allay\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
              );
              friendMe.button("Close");
            } else {
              friendMe.title("???");
              friendMe.body(
                "§7 Category\n§r Husbandry\n\n§7 Description\n§r This advancement is a secret, its info is only revealed after completion.\n"
              );
              friendMe.button("Close");
            }

            friendMe
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let friendMe_response = r.selection;
                switch (friendMe_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;
          case 25:
            let birthdaySong = new ActionFormData();

            if (player.hasTag("BirthdaySong")) {
              birthdaySong.title("Birthday Song");
              birthdaySong.body(
                "§7 Category\n§r Husbandry\n\n§7 Description\n§r Have an Allay drop a Cake at a Note Block\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
              );
              birthdaySong.button("Close");
            } else {
              birthdaySong.title("???");
              birthdaySong.body(
                "§7 Category\n§r Husbandry\n\n§7 Description\n§r This advancement is a secret, its info is only revealed after completion.\n"
              );
              birthdaySong.button("Close");
            }

            birthdaySong
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let birthdaySong_response = r.selection;
                switch (birthdaySong_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 26:
            let smellsInteresting = new ActionFormData();

            if (player.hasTag("SmellsInteresting")) {
              smellsInteresting.title("Smells Interesting");
              smellsInteresting.body(
                "§7 Category\n§r Husbandry\n\n§7 Description\n§r Obtain a Sniffer Egg\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
              );
              smellsInteresting.button("Close");
            } else {
              smellsInteresting.title("???");
              smellsInteresting.body(
                "§7 Category\n§r Husbandry\n\n§7 Description\n§r This advancement is a secret, its info is only revealed after completion.\n"
              );
              smellsInteresting.button("Close");
            }

            smellsInteresting
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let smellsInteresting_response = r.selection;
                switch (smellsInteresting_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 27:
            let littleSniffs = new ActionFormData();

            if (player.hasTag("LittleSniffs")) {
              littleSniffs.title("Little Sniffs");
              littleSniffs.body(
                "§7 Category\n§r Husbandry\n\n§7 Description\n§r Feed a Snifflet\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
              );
              littleSniffs.button("Close");
            } else {
              littleSniffs.title("???");
              littleSniffs.body(
                "§7 Category\n§r Husbandry\n\n§7 Description\n§r This advancement is a secret, its info is only revealed after completion.\n"
              );
              littleSniffs.button("Close");
            }

            littleSniffs
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let littleSniffs_response = r.selection;
                switch (littleSniffs_response) {
                  default:
                    return;
                }
              })
              .catch((e) => {
                console.error(e, e.stack);
              });
            break;

          case 28:
            let plantingPast = new ActionFormData();

            if (player.hasTag("PlantingPast")) {
              plantingPast.title("Planting the Past");
              plantingPast.body(
                "§7 Category\n§r Husbandry\n\n§7 Description\n§r Plant any Sniffer seed\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n"
              );
              plantingPast.button("Close");
            } else {
              plantingPast.title("???");
              plantingPast.body(
                "§7 Category\n§r Husbandry\n\n§7 Description\n§r This advancement is a secret, its info is only revealed after completion.\n"
              );
              plantingPast.button("Close");
            }

            plantingPast
              .show(player)
              .then((r) => {
                if (r.canceled) return;

                let plantingPast_response = r.selection;
                switch (plantingPast_response) {
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
    }).catch(e => {
        console.error(e, e.stack);
    });
}

export { open_category_husbandry }
