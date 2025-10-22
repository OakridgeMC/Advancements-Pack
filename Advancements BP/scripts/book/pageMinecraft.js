import {
    ActionFormData
} from "@minecraft/server-ui";


function open_category_minecraft(player, count, max, pct) {
    let minecraft = new ActionFormData();

    minecraft.title("Minecraft");
    minecraft.body(`The heart and story of the game.\n§eComplete :§b ${count}§e/§b${max}\n§6[${pct}%%]`);
    if (player.hasTag('StoneAge')) {
        minecraft.button("§aStone Age", "textures/icons/advancement/stone_age.png");
    } else {
        minecraft.button("Stone Age", "textures/icons/advancement/incomplete/stone_age.png");
    }

    if (player.hasTag('GettingUpgrade')) {
        minecraft.button("§aGetting an Upgrade", "textures/icons/advancement/getting_an_upgrade.png");
    } else {
        minecraft.button("Getting an Upgrade", "textures/icons/advancement/incomplete/getting_an_upgrade.png");
    }

    if (player.hasTag('AcquireHardware')) {
        minecraft.button("§aAcquire Hardware", "textures/icons/advancement/acquire_hardware.png");
    } else {
        minecraft.button("Acquire Hardware", "textures/icons/advancement/incomplete/acquire_hardware.png");
    }
    if (player.hasTag('SuitUp')) {
        minecraft.button("§aSuit Up", "textures/icons/advancement/suit_up.png");
    } else {
        minecraft.button("Suit Up", "textures/icons/advancement/incomplete/suit_up.png");
    }

    if (player.hasTag('HotStuff')) {
        minecraft.button("§aHot Stuff", "textures/icons/advancement/hot_stuff.png");
    } else {
        minecraft.button("Hot Stuff", "textures/icons/advancement/incomplete/hot_stuff.png");
    }
    if (player.hasTag('IronPick')) {
        minecraft.button("§aIsn't it Iron Pick", "textures/icons/advancement/isnt_it_iron_pick.png");
    } else {
        minecraft.button("Isn't it Iron Pick", "textures/icons/advancement/incomplete/isnt_it_iron_pick.png");
    }
    if (player.hasTag('NotToday')) {
        minecraft.button("§aNot Today, Thank You", "textures/icons/advancement/not_today_thank_you.png");
    } else {
        minecraft.button("Not Today, Thank You", "textures/icons/advancement/incomplete/not_today_thank_you.png");
    }
    if (player.hasTag('IceBucket')) {
        minecraft.button("§aIce Bucket Challenge", "textures/icons/advancement/ice_bucket_challenge.png");
    } else {
        minecraft.button("Ice Bucket Challenge", "textures/icons/advancement/incomplete/ice_bucket_challenge.png");
    }
    if (player.hasTag('Diamonds')) {
        minecraft.button("§aDiamonds!", "textures/icons/advancement/diamonds.png");
    } else {
        minecraft.button("Diamonds!", "textures/icons/advancement/incomplete/diamonds.png");
    }
    if (player.hasTag('EnterNether')) {
        minecraft.button("§aWe Need to Go Deeper", "textures/icons/advancement/we_need_to_go_deeper.png");
    } else {
        minecraft.button("We Need to Go Deeper", "textures/icons/advancement/incomplete/we_need_to_go_deeper.png");
    }
    if (player.hasTag('CoverDiamonds')) {
        minecraft.button("§aCover Me with Diamonds", "textures/icons/advancement/cover_me_with_diamonds.png");
    } else {
        minecraft.button("Cover Me with Diamonds", "textures/icons/advancement/incomplete/cover_me_with_diamonds.png");
    }
    if (player.hasTag('Enchanter')) {
        minecraft.button("§aEnchanter", "textures/icons/advancement/enchanter.png");
    } else {
        minecraft.button("Enchanter", "textures/icons/advancement/incomplete/enchanter.png");
    }

    if (player.hasTag('ZombieDoctor')) {
        minecraft.button("§eZombie Doctor", "textures/icons/advancement/zombie_doctor.png");
    } else {
        minecraft.button("Zombie Doctor", "textures/icons/advancement/incomplete/zombie_doctor.png");
    }
    if (player.hasTag('EyeSpy')) {
        minecraft.button("§aEye Spy", "textures/icons/advancement/eye_spy.png");
    } else {
        minecraft.button("Eye Spy", "textures/icons/advancement/incomplete/eye_spy.png");
    }
    if (player.hasTag('TheEnd')) {
        minecraft.button("§aThe End?", "textures/icons/advancement/the_end.png");
    } else {
        minecraft.button("The End?", "textures/icons/advancement/incomplete/the_end.png");
    }

    minecraft.show(player).then(r => {
        if (r.canceled) return;

        let response = r.selection;
        switch (response) {
            case 0:
                let stoneAge = new ActionFormData();
                stoneAge.title("Stone Age");
                stoneAge.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Mine Stone with your new Pickaxe\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                stoneAge.button("Close");
                stoneAge.show(player).then(r => {
                    if (r.canceled) return;

                    let stoneAge_response = r.selection;
                    switch (stoneAge_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 1:
                let gettingUpgrade = new ActionFormData();
                gettingUpgrade.title("Getting an Upgrade");
                gettingUpgrade.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Construct a better Pickaxe\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                gettingUpgrade.button("Close");
                gettingUpgrade.show(player).then(r => {
                    if (r.canceled) return;

                    let gettingUpgrade_response = r.selection;
                    switch (gettingUpgrade_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 2:
                let acquireHardware = new ActionFormData();
                acquireHardware.title("Acquire Hardware");
                acquireHardware.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Smelt an Iron Ingot\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                acquireHardware.button("Close");
                acquireHardware.show(player).then(r => {
                    if (r.canceled) return;

                    let acquireHardware_response = r.selection;
                    switch (acquireHardware_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 3:
                let suitUp = new ActionFormData();
                suitUp.title("Suit Up");
                suitUp.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Protect Yourself with a piece of iron armour\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                suitUp.button("Close");
                suitUp.show(player).then(r => {
                    if (r.canceled) return;

                    let suitUp_response = r.selection;
                    switch (suitUp_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 4:
                let hotStuff = new ActionFormData();
                hotStuff.title("Hot Stuff");
                hotStuff.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Fill a Bucket with lava\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                hotStuff.button("Close");
                hotStuff.show(player).then(r => {
                    if (r.canceled) return;

                    let hotStuff_response = r.selection;
                    switch (hotStuff_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 5:
                let ironPick = new ActionFormData();
                ironPick.title("Isn't it Iron Pick");
                ironPick.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Upgrade your Pickaxe\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                ironPick.button("Close");
                ironPick.show(player).then(r => {
                    if (r.canceled) return;

                    let ironPick_response = r.selection;
                    switch (ironPick_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 6:
                let notToday = new ActionFormData();
                notToday.title("Not Today, Thank You");
                notToday.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Try out your new Shield\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                notToday.button("Close");
                notToday.show(player).then(r => {
                    if (r.canceled) return;

                    let notToday_response = r.selection;
                    switch (notToday_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 7:
                let iceBucket = new ActionFormData();
                iceBucket.title("Ice Bucket Challenge");
                iceBucket.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Obtain a block of Obsidian\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                iceBucket.button("Close");
                iceBucket.show(player).then(r => {
                    if (r.canceled) return;

                    let iceBucket_response = r.selection;
                    switch (iceBucket_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 8:
                let diamonds = new ActionFormData();
                diamonds.title("Diamonds!");
                diamonds.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Acquire Diamonds\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                diamonds.button("Close");
                diamonds.show(player).then(r => {
                    if (r.canceled) return;

                    let diamonds_response = r.selection;
                    switch (diamonds_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 9:
                let goDeeper = new ActionFormData();
                goDeeper.title("We Need to Go Deeper");
                goDeeper.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Build, light and enter a Nether Portal\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                goDeeper.button("Close");
                goDeeper.show(player).then(r => {
                    if (r.canceled) return;

                    let goDeeper_response = r.selection;
                    switch (goDeeper_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 10:
                let coverDiamonds = new ActionFormData();
                coverDiamonds.title("Cover Me with Diamonds");
                coverDiamonds.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Diamond armour saves lives\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                coverDiamonds.button("Close");
                coverDiamonds.show(player).then(r => {
                    if (r.canceled) return;

                    let coverDiamonds_response = r.selection;
                    switch (coverDiamonds_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 11:
                let enchanter = new ActionFormData();
                enchanter.title("Enchanter");
                enchanter.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Obtain an Enchanting Table\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                enchanter.button("Close");
                enchanter.show(player).then(r => {
                    if (r.canceled) return;

                    let enchanter_response = r.selection;
                    switch (enchanter_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 12:
                let zombieDoctor = new ActionFormData();
                zombieDoctor.title("Zombie Doctor");
                zombieDoctor.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Weaken and then cure a Zombie Villager\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n");
                zombieDoctor.button("Close");
                zombieDoctor.show(player).then(r => {
                    if (r.canceled) return;

                    let zombieDoctor_response = r.selection;
                    switch (zombieDoctor_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 13:
                let eyeSpy = new ActionFormData();
                eyeSpy.title("Eye Spy");
                eyeSpy.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Follow an Eye of Ender\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                eyeSpy.button("Close");
                eyeSpy.show(player).then(r => {
                    if (r.canceled) return;

                    let eyeSpy_response = r.selection;
                    switch (eyeSpy_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 14:
                let theEnd = new ActionFormData();
                theEnd.title("The End?");
                theEnd.body("§7 Category\n§r Minecraft\n\n§7 Description\n§r Enter the End Portal\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                theEnd.button("Close");
                theEnd.show(player).then(r => {
                    if (r.canceled) return;

                    let theEnd_response = r.selection;
                    switch (theEnd_response) {
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
    }).catch(e => {
        console.error(e, e.stack);
    });
}

export { open_category_minecraft }
