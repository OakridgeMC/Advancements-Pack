import {
    ActionFormData
} from "@minecraft/server-ui";


function open_category_dungeons(player, count, max, pct) {
    let dungeons = new ActionFormData();

    dungeons.title("Alylica's Dungeons");
    dungeons.body(`Bosses, Structures and Weapons galore!\n§eComplete :§b ${count}§e/§b${max}\n§6[${pct}%%]`);
    if (player.hasTag('DungeonCrawler')) {
        dungeons.button("§aDungeon Crawler", "textures/icons/advancement/subpacks/dungeon_crawler.png");
    } else {
        dungeons.button("Dungeon Crawler", "textures/icons/advancement/subpacks/incomplete/dungeon_crawler.png");
    }
    if (player.hasTag('GoodnightGramps')) {
        dungeons.button("§aGoodnight, Gramps", "textures/icons/advancement/subpacks/goodnight_gramps.png");
    } else {
        dungeons.button("Goodnight, Gramps", "textures/icons/advancement/subpacks/incomplete/goodnight_gramps.png");
    }
    if (player.hasTag('FungalFeud')) {
        dungeons.button("§aFungal Feud", "textures/icons/advancement/subpacks/fungal_feud.png");
    } else {
        dungeons.button("Fungal Feud", "textures/icons/advancement/subpacks/incomplete/fungal_feud.png");
    }
    if (player.hasTag('LetGo')) {
        dungeons.button("§aLet it Go!", "textures/icons/advancement/subpacks/let_it_go.png");
    } else {
        dungeons.button("Let it Go!", "textures/icons/advancement/subpacks/incomplete/let_it_go.png");
    }
    if (player.hasTag('YouCooked')) {
        dungeons.button("§aYou Cooked", "textures/icons/advancement/subpacks/you_cooked.png");
    } else {
        dungeons.button("You Cooked", "textures/icons/advancement/subpacks/incomplete/you_cooked.png");
    }
    if (player.hasTag('TreeFeller')) {
        dungeons.button("§aTree Feller", "textures/icons/advancement/subpacks/tree_feller.png");
    } else {
        dungeons.button("Tree Feller", "textures/icons/advancement/subpacks/incomplete/tree_feller.png");
    }
    if (player.hasTag('TitanKiller')) {
        dungeons.button("§aTitan Killer", "textures/icons/advancement/subpacks/titan_killer.png");
    } else {
        dungeons.button("Titan Killer", "textures/icons/advancement/subpacks/incomplete/titan_killer.png");
    }
    if (player.hasTag('Thalassophobia')) {
        dungeons.button("§aThalassophobia", "textures/icons/advancement/subpacks/thalassophobia.png");
    } else {
        dungeons.button("Thalassophobia", "textures/icons/advancement/subpacks/incomplete/thalassophobia.png");
    }
    if (player.hasTag('Firefighter')) {
        dungeons.button("§aFirefighter", "textures/icons/advancement/subpacks/firefighter.png");
    } else {
        dungeons.button("Firefighter", "textures/icons/advancement/subpacks/incomplete/firefighter.png");
    }
    if (player.hasTag('ForEye')) {
        dungeons.button("§aEye for an Eye", "textures/icons/advancement/subpacks/eye_for_an_eye.png");
    } else {
        dungeons.button("Eye for an Eye", "textures/icons/advancement/subpacks/incomplete/eye_for_an_eye.png");
    }
    if (player.hasTag('Heartbreaking')) {
        dungeons.button("§aHeartbreaking", "textures/icons/advancement/subpacks/heartbreaking.png");
    } else {
        dungeons.button("Heartbreaking", "textures/icons/advancement/subpacks/incomplete/heartbreaking.png");
    }

    dungeons.show(player).then(r => {
        if (r.canceled) return;

        let response = r.selection;
        switch (response) {
            case 0:
                let dungeonCrawler = new ActionFormData();
                dungeonCrawler.title("Dungeon Crawler");
                dungeonCrawler.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Defeat the Redstone Monstrosity within the underground forge.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                dungeonCrawler.button("Close");
                dungeonCrawler.show(player).then(r => {
                    if (r.canceled) return;

                    let dungeonCrawler_response = r.selection;
                    switch (dungeonCrawler_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 1:
                let goodnightGramps = new ActionFormData();
                goodnightGramps.title("Goodnight, Gramps");
                goodnightGramps.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Slay the Nameless One that resides within a desert tomb.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                goodnightGramps.button("Close");
                goodnightGramps.show(player).then(r => {
                    if (r.canceled) return;

                    let goodnightGramps_response = r.selection;
                    switch (goodnightGramps_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 2:
                let fungalFeud = new ActionFormData();
                fungalFeud.title("Fungal Feud");
                fungalFeud.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Travel to a Mushroom Fields biome and defeat the Mooshroom Monstrosity.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                fungalFeud.button("Close");
                fungalFeud.show(player).then(r => {
                    if (r.canceled) return;

                    let fungalFeud_response = r.selection;
                    switch (fungalFeud_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 3:
                let letGo = new ActionFormData();
                letGo.title("Let it Go!");
                letGo.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Climb up the lone, snowy fortress and defeat the Wretched Wraith.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                letGo.button("Close");
                letGo.show(player).then(r => {
                    if (r.canceled) return;

                    let letGo_response = r.selection;
                    switch (letGo_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 4:
                let youCooked = new ActionFormData();
                youCooked.title("You Cooked");
                youCooked.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Destroy the Corrupted Cauldron that rests within the swamp.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                youCooked.button("Close");
                youCooked.show(player).then(r => {
                    if (r.canceled) return;

                    let youCooked_response = r.selection;
                    switch (youCooked_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 5:
                let treeFeller = new ActionFormData();
                treeFeller.title("Tree Feller");
                treeFeller.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Slay the Jungle Abomination that dwells in the Overgrown Temple.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                treeFeller.button("Close");
                treeFeller.show(player).then(r => {
                    if (r.canceled) return;

                    let treeFeller_response = r.selection;
                    switch (treeFeller_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 6:
                let titanKiller = new ActionFormData();
                titanKiller.title("Titan Killer");
                titanKiller.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Defeat the Tempest Golem atop the mountain sanctum.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                titanKiller.button("Close");
                titanKiller.show(player).then(r => {
                    if (r.canceled) return;

                    let titanKiller_response = r.selection;
                    switch (titanKiller_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 7:
                let thalassophobia = new ActionFormData();
                thalassophobia.title("Thalassophobia");
                thalassophobia.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Slay the Ancient Guardian of the Abyssal Ocean Monument.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                thalassophobia.button("Close");
                thalassophobia.show(player).then(r => {
                    if (r.canceled) return;

                    let thalassophobia_response = r.selection;
                    switch (thalassophobia_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 8:
                let firefighter = new ActionFormData();
                firefighter.title("Firefighter");
                firefighter.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Head to the Nether to take on the Hovering Inferno.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                firefighter.button("Close");
                firefighter.show(player).then(r => {
                    if (r.canceled) return;

                    let firefighter_response = r.selection;
                    switch (firefighter_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 9:
                let forEye = new ActionFormData();
                forEye.title("Eye for an Eye");
                forEye.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Uncover and defeat one of the Enchanted Endersent.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                forEye.button("Close");
                forEye.show(player).then(r => {
                    if (r.canceled) return;

                    let forEye_response = r.selection;
                    switch (forEye_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 10:
                let heartbreaking = new ActionFormData();
                heartbreaking.title("Heartbreaking");
                heartbreaking.body("§7 Category\n§r Alylica's Dungeons\n\n§7 Description\n§r Slay the Vengeful Heart of Ender, good luck, you will need it.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                heartbreaking.button("Close");
                heartbreaking.show(player).then(r => {
                    if (r.canceled) return;

                    let heartbreaking_response = r.selection;
                    switch (heartbreaking_response) {
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

export { open_category_dungeons }
