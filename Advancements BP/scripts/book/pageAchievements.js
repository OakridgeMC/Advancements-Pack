import {
    ActionFormData
} from "@minecraft/server-ui";


function open_category_achievements(player, count, max, pct) {

    let achievements = new ActionFormData();

    achievements.title("Achievements");
    achievements.body(`Bonus Missions - Can you beat them all?\n§eComplete :§b ${count}§e/§b${max}\n§6[${pct}%%]`);
    if (player.hasTag('MagicHappens')) {
        achievements.button("§dWhere the Magic Happens", "textures/icons/advancement/where_the_magic_happens.png");
    } else {
        achievements.button("Where the Magic Happens", "textures/icons/advancement/incomplete/where_the_magic_happens.png");
    }

    if (player.hasTag('RunLife')) {
        achievements.button("§aRun for Your Life!!!", "textures/icons/advancement/run_for_your_life.png");
    } else {
        achievements.button("Run for Your Life!!!", "textures/icons/advancement/incomplete/run_for_your_life.png");
    }
    if (player.hasTag('BackCame')) {
        achievements.button("§dBack from Whence You Came!", "textures/icons/advancement/back_from_whence_you_came.png");
    } else {
        achievements.button("Back from Whence You Came!", "textures/icons/advancement/incomplete/back_from_whence_you_came.png");
    }

    if (player.hasTag('WildWorld')) {
        achievements.button("§eA Wild World", "textures/icons/advancement/a_wild_world.png");
    } else {
        achievements.button("A Wild World", "textures/icons/advancement/incomplete/a_wild_world.png");
    }

    if (player.hasTag('FruitLoom')) {
        achievements.button("§eFruit on the Loom", "textures/icons/advancement/fruit_on_the_loom.png");
    } else {
        achievements.button("Fruit on the Loom", "textures/icons/advancement/incomplete/fruit_on_the_loom.png");
    }

    if (player.hasTag('DeepEnd')) {
        achievements.button("§aThe Deep End", "textures/icons/advancement/the_deep_end.png");
    } else {
        achievements.button("The Deep End", "textures/icons/advancement/incomplete/the_deep_end.png");
    }

    if (player.hasTag('RecordBreaker')) {
        achievements.button("§aRecord Breaker", "textures/icons/advancement/record_breaker.png");
    } else {
        achievements.button("Record Breaker", "textures/icons/advancement/incomplete/record_breaker.png");
    }

    if (player.hasTag('GardenAwakens')) {
        achievements.button("§aThe Garden Awakens..", "textures/icons/advancement/the_garden_awakens.png");
    } else {
        achievements.button("The Garden Awakens..", "textures/icons/advancement/incomplete/the_garden_awakens.png");
    }
    if (player.hasTag('ItTree')) {
        achievements.button("§aIs It a... Tree?", "textures/icons/advancement/is_it_a_tree.png");
    } else {
        achievements.button("Is It a... Tree?", "textures/icons/advancement/incomplete/is_it_a_tree.png");
    }
    if (player.hasTag('Timber')) {
        achievements.button("§aTimber!!!", "textures/icons/advancement/timber.png");
    } else {
        achievements.button("Timber!!!", "textures/icons/advancement/incomplete/timber.png");
    }
    if (player.hasTag('PureHeart')) {
        achievements.button("§aPure of Heart", "textures/icons/advancement/pure_of_heart.png");
    } else {
        achievements.button("Pure of Heart", "textures/icons/advancement/incomplete/pure_of_heart.png");
    }

    if (player.hasTag('SpeakTrees')) {
        achievements.button("§dI Speak for the Trees", "textures/icons/advancement/i_speak_for_the_trees.png");
    } else {
        achievements.button("I Speak for the Trees", "textures/icons/advancement/incomplete/i_speak_for_the_trees.png");
    }
    if (player.hasTag('HowWeather')) {
        achievements.button("§aHow's the Weather up There?", "textures/icons/advancement/hows_the_weather_up_there.png");
    } else {
        achievements.button("How's the Weather up There?", "textures/icons/advancement/incomplete/hows_the_weather_up_there.png");
    }
    if (player.hasTag('SmartStorage')) {
        achievements.button("§aSmart Storage", "textures/icons/advancement/smart_storage.png");
    } else {
        achievements.button("Smart Storage", "textures/icons/advancement/incomplete/smart_storage.png");
    }

    if (player.hasTag('NoMan')) {
        achievements.button("§eNo Man Left Behind", "textures/icons/advancement/no_man_left_behind.png");
    } else {
        achievements.button("No Man Left Behind", "textures/icons/advancement/incomplete/no_man_left_behind.png");
    }
    achievements.show(player).then(r => {
        if (r.canceled) return;

        let response = r.selection;
        switch (response) {
            case 0:
                let magicHappens = new ActionFormData();
                magicHappens.title("Where the Magic Happens");
                magicHappens.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Obtain the fabled Book of Advancements\n\n§e Reward\n§r 50 Experience\n\n§e Type\n§d Challenge\n\n");
                magicHappens.button("Close");
                magicHappens.show(player).then(r => {
                    if (r.canceled) return;

                    let magicHappens_response = r.selection;
                    switch (magicHappens_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 1:
                let runLife = new ActionFormData();
                runLife.title("Run for Your Life!!!");
                runLife.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Awaken the Warden... and then RUN!\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                runLife.button("Close");
                runLife.show(player).then(r => {
                    if (r.canceled) return;

                    let runLife_response = r.selection;
                    switch (runLife_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 2:
                let backCame = new ActionFormData();
                backCame.title("Back from Whence You Came!");
                backCame.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Defeat the Warden\n\n§e Reward\n§r 250 Experience\n\n§e Type\n§d Challenge\n\n");
                backCame.button("Close");
                backCame.show(player).then(r => {
                    if (r.canceled) return;

                    let backCame_response = r.selection;
                    switch (backCame_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 3:
                let wildWorld = new ActionFormData();
                wildWorld.title("A Wild World");
                wildWorld.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Hold all unique saplings at once\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n");
                wildWorld.button("Close");
                wildWorld.show(player).then(r => {
                    if (r.canceled) return;

                    let wildWorld_response = r.selection;
                    switch (wildWorld_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 4:
                let fruitLoom = new ActionFormData();
                fruitLoom.title("Fruit on the Loom");
                fruitLoom.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Create the \'Thing\' Banner Pattern using an Enchanted Apple\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n");
                fruitLoom.button("Close");
                fruitLoom.show(player).then(r => {
                    if (r.canceled) return;

                    let fruitLoom_response = r.selection;
                    switch (fruitLoom_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 5:
                let deepEnd = new ActionFormData();
                deepEnd.title("The Deep End");
                deepEnd.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Defeat an Elder Guardian\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                deepEnd.button("Close");
                deepEnd.show(player).then(r => {
                    if (r.canceled) return;

                    let deepEnd_response = r.selection;
                    switch (deepEnd_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 6:
                let recordBreaker = new ActionFormData();
                recordBreaker.title("Record Breaker");
                recordBreaker.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Take a listen to Disc 11\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                recordBreaker.button("Close");
                recordBreaker.show(player).then(r => {
                    if (r.canceled) return;

                    let recordBreaker_response = r.selection;
                    switch (recordBreaker_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 7:
                let gardenAwakens = new ActionFormData();
                gardenAwakens.title("The Garden Awakens..");
                gardenAwakens.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Enter a Pale Garden and beware what lurks inside\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                gardenAwakens.button("Close");
                gardenAwakens.show(player).then(r => {
                    if (r.canceled) return;

                    let gardenAwakens_response = r.selection;
                    switch (gardenAwakens_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 8:
                let itTree = new ActionFormData();
                itTree.title("Is It a... Tree?");
                itTree.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Look at a Creaking through a Spyglass... and maybe dont look away after\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                itTree.button("Close");
                itTree.show(player).then(r => {
                    if (r.canceled) return;

                    let itTree_response = r.selection;
                    switch (itTree_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 9:
                let timber = new ActionFormData();
                timber.title("Timber!!!");
                timber.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Destroy a natural Creaking Heart\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                timber.button("Close");
                timber.show(player).then(r => {
                    if (r.canceled) return;

                    let timber_response = r.selection;
                    switch (timber_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 10:
                let pureHeart = new ActionFormData();
                pureHeart.title("Pure of Heart");
                pureHeart.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Collect the resin of a Creaking Heart\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                pureHeart.button("Close");
                pureHeart.show(player).then(r => {
                    if (r.canceled) return;

                    let pureHeart_response = r.selection;
                    switch (pureHeart_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 11:
                let speakTrees = new ActionFormData();
                speakTrees.title("I Speak for the Trees");
                speakTrees.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Obtain a Creaking Heart\n\n§e Reward\n§r 50 Experience\n\n§e Type\n§d Challenge\n\n");
                speakTrees.button("Close");
                speakTrees.show(player).then(r => {
                    if (r.canceled) return;

                    let speakTrees_response = r.selection;
                    switch (speakTrees_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 12:
                let howWeather = new ActionFormData();
                howWeather.title("How's the Weather up There?");
                howWeather.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Take a Happy Ghast up into the clouds to heal it\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                howWeather.button("Close");
                howWeather.show(player).then(r => {
                    if (r.canceled) return;

                    let howWeather_response = r.selection;
                    switch (howWeather_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 13:
                let smartStorage = new ActionFormData();
                smartStorage.title("Smart Storage");
                smartStorage.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Have a Copper Golem help organise a chest.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                smartStorage.button("Close");
                smartStorage.show(player).then(r => {
                    if (r.canceled) return;

                    let smartStorage_r = r.selection;
                    switch (smartStorage_r) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 14:
                let noMan = new ActionFormData();
                noMan.title("No Man Left Behind");
                noMan.body("§7 Category\n§r Achievements\n\n§7 Description\n§r Revive a Copper Golem that had became a statue\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n");
                noMan.button("Close");
                noMan.show(player).then(r => {
                    if (r.canceled) return;

                    let noMan_r = r.selection;
                    switch (noMan_r) {
                        default:
                            return;
                    }
                }).catch(e => {
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

export { open_category_achievements }
