import {
    ActionFormData
} from "@minecraft/server-ui";


function open_category_dragons(player, count, max, pct) {
    let dragons = new ActionFormData();

    dragons.title("Alylica's Dragons");
    dragons.body(`Uncover Dragon Eggs, raise them, tame them and then soar across your world!\n§eComplete :§b ${count}§e/§b${max}\n§6[${pct}%%]`);
    if (player.hasTag('WayLife')) {
        dragons.button("§aThe Way of Life", "textures/icons/advancement/subpacks/the_way_of_life.png");
    } else {
        dragons.button("The Way of Life", "textures/icons/advancement/subpacks/incomplete/the_way_of_life.png");
    }
    if (player.hasTag('HowTrain')) {
        dragons.button("§aHow to Train Your Dragon", "textures/icons/advancement/subpacks/how_to_train_your_dragon.png");
    } else {
        dragons.button("How to Train Your Dragon", "textures/icons/advancement/subpacks/incomplete/how_to_train_your_dragon.png");
    }
    if (player.hasTag('HowFancy')) {
        dragons.button("§aHow Fancy", "textures/icons/advancement/subpacks/how_fancy.png");
    } else {
        dragons.button("How Fancy", "textures/icons/advancement/subpacks/incomplete/how_fancy.png");
    }
    if (player.hasTag('InspiredDesign')) {
        dragons.button("§aInspired Design", "textures/icons/advancement/subpacks/inspired_design.png");
    } else {
        dragons.button("Inspired Design", "textures/icons/advancement/subpacks/incomplete/inspired_design.png");
    }
    if (player.hasTag('MayVary')) {
        dragons.button("§aSide Effects May Vary", "textures/icons/advancement/subpacks/side_effects_may_vary.png");
    } else {
        dragons.button("Side Effects May Vary", "textures/icons/advancement/subpacks/incomplete/side_effects_may_vary.png");
    }
    if (player.hasTag('DangerousCompany')) {
        dragons.button("§aDangerous Company", "textures/icons/advancement/subpacks/dangerous_company.png");
    } else {
        dragons.button("Dangerous Company", "textures/icons/advancement/subpacks/incomplete/dangerous_company.png");
    }
    if (player.hasTag('Unstoppable')) {
        dragons.button("§aUnstoppable", "textures/icons/advancement/subpacks/unstoppable.png");
    } else {
        dragons.button("Unstoppable", "textures/icons/advancement/subpacks/incomplete/unstoppable.png");
    }

    dragons.show(player).then(r => {
        if (r.canceled) return;

        let response = r.selection;
        switch (response) {
            case 0:
                let wayLife = new ActionFormData();
                wayLife.title("The Way of Life");
                wayLife.body("§7 Category\n§r Alylica's Dragons\n\n§7 Description\n§r Find a Dragon Egg and begin to hatch it.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                wayLife.button("Close");
                wayLife.show(player).then(r => {
                    if (r.canceled) return;

                    let wayLife_r = r.selection;
                    switch (wayLife_r) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 1:
                let howTrain = new ActionFormData();
                howTrain.title("How to Train Your Dragon");
                howTrain.body("§7 Category\n§r Alylica's Dragons\n\n§7 Description\n§r Craft a Dragon Saddle.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                howTrain.button("Close");
                howTrain.show(player).then(r => {
                    if (r.canceled) return;

                    let howTrain_r = r.selection;
                    switch (howTrain_r) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 2:
                let howFancy = new ActionFormData();
                howFancy.title("Fungal Feud");
                howFancy.body("§7 Category\n§r Alylica's Dragons\n\n§7 Description\n§r Obtain a rare Dragon Egg species from the Dragonborn Trader.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                howFancy.button("Close");
                howFancy.show(player).then(r => {
                    if (r.canceled) return;

                    let howFancy_r = r.selection;
                    switch (howFancy_r) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 3:
                let inspiredDesign = new ActionFormData();
                inspiredDesign.title("Inspired Design");
                inspiredDesign.body("§7 Category\n§r Alylica's Dragons\n\n§7 Description\n§r Obtain a Dragonsbane.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                inspiredDesign.button("Close");
                inspiredDesign.show(player).then(r => {
                    if (r.canceled) return;

                    let inspiredDesign_r = r.selection;
                    switch (inspiredDesign_r) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 4:
                let mayVary = new ActionFormData();
                mayVary.title("Side Effects May Vary");
                mayVary.body("§7 Category\n§r Alylica's Dragons\n\n§7 Description\n§r Equip a full set of Dragon Scale Armour, and try not to let it get to your head...\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                mayVary.button("Close");
                mayVary.show(player).then(r => {
                    if (r.canceled) return;

                    let mayVary_r = r.selection;
                    switch (mayVary_r) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 5:
                let dangerousCompany = new ActionFormData();
                dangerousCompany.title("Dangerous Company");
                dangerousCompany.body("§7 Category\n§r Alylica's Dragons\n\n§7 Description\n§r Find and defeat the Lethal Dragon at the bottom of the Dragon Bastion.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                dangerousCompany.button("Close");
                dangerousCompany.show(player).then(r => {
                    if (r.canceled) return;

                    let dangerousCompany_r = r.selection;
                    switch (dangerousCompany_r) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 6:
                let unstoppable = new ActionFormData();
                unstoppable.title("Unstoppable");
                unstoppable.body("§7 Category\n§r Alylica's Dragons\n\n§7 Description\n§r Craft and equip a full set of Lethal Dragon Scale Armour.\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                unstoppable.button("Close");
                unstoppable.show(player).then(r => {
                    if (r.canceled) return;

                    let unstoppable_r = r.selection;
                    switch (unstoppable_r) {
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

export { open_category_dragons }
