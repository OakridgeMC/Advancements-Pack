import {
    ActionFormData
} from "@minecraft/server-ui";


function open_category_end(player, count, max, pct) {
    let end = new ActionFormData();

    end.title("The End");
    end.body(`Or the beginning?\n§eComplete :§b ${count}§e/§b${max}\n§6[${pct}%%]`);
    if (player.hasTag('FreeEnd')) {
        end.button("§aFree the End", "textures/icons/advancement/free_the_end.png");
    } else {
        end.button("Free the End", "textures/icons/advancement/incomplete/free_the_end.png");
    }
    if (player.hasTag('NextGeneration')) {
        end.button("§eThe Next Generation", "textures/icons/advancement/the_next_generation.png");
    } else {
        end.button("The Next Generation", "textures/icons/advancement/incomplete/the_next_generation.png");
    }
    if (player.hasTag('RemoteGateway')) {
        end.button("§aRemote Getaway", "textures/icons/advancement/remote_gateway.png");
    } else {
        end.button("Remote Getaway", "textures/icons/advancement/incomplete/remote_gateway.png");
    }
    if (player.hasTag('EndAgain')) {
        end.button("§eThe End... Again...", "textures/icons/advancement/the_end_again.png");
    } else {
        end.button("The End... Again...", "textures/icons/advancement/incomplete/the_end_again.png");
    }
    if (player.hasTag('NeedMint')) {
        end.button("§eYou Need a Mint", "textures/icons/advancement/you_need_a_mint.png");
    } else {
        end.button("You Need a Mint", "textures/icons/advancement/incomplete/you_need_a_mint.png");
    }
    if (player.hasTag('SkyLimit')) {
        end.button("§eSky's the Limit", "textures/icons/advancement/skys_the_limit.png");
    } else {
        end.button("Sky's the Limit", "textures/icons/advancement/incomplete/skys_the_limit.png");
    }
    if (player.hasTag('GreatView')) {
        end.button("§dGreat View From Up Here", "textures/icons/advancement/great_view_from_up_here.png");
    } else {
        end.button("Great View From Up Here", "textures/icons/advancement/incomplete/great_view_from_up_here.png");
    }


    end.show(player).then(r => {
        if (r.canceled) return;

        let response = r.selection;
        switch (response) {
            case 0:
                let freeEnd = new ActionFormData();
                freeEnd.title("Free the End");
                freeEnd.body("§7 Category\n§r The End\n\n§7 Description\n§r Good luck\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                freeEnd.button("Close");
                freeEnd.show(player).then(r => {
                    if (r.canceled) return;

                    let freeEnd_response = r.selection;
                    switch (freeEnd_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 1:
                let nextGeneration = new ActionFormData();
                nextGeneration.title("The Next Generation");
                nextGeneration.body("§7 Category\n§r The End\n\n§7 Description\n§r Hold the Dragon Egg\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n");
                nextGeneration.button("Close");
                nextGeneration.show(player).then(r => {
                    if (r.canceled) return;

                    let nextGeneration_response = r.selection;
                    switch (nextGeneration_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 2:
                let remoteGateway = new ActionFormData();
                remoteGateway.title("Remote Getaway");
                remoteGateway.body("§7 Category\n§r The End\n\n§7 Description\n§r Escape the Island\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                remoteGateway.button("Close");
                remoteGateway.show(player).then(r => {
                    if (r.canceled) return;

                    let remoteGateway_response = r.selection;
                    switch (remoteGateway_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 3:
                let endAgain = new ActionFormData();
                endAgain.title("The End... Again...");
                endAgain.body("§7 Category\n§r The End\n\n§7 Description\n§r Respawn the Ender Dragon\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n");
                endAgain.button("Close");
                endAgain.show(player).then(r => {
                    if (r.canceled) return;

                    let endAgain_response = r.selection;
                    switch (endAgain_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 4:
                let needMint = new ActionFormData();
                needMint.title("You Need a Mint");
                needMint.body("§7 Category\n§r The End\n\n§7 Description\n§r Collect Dragon's Breath in a Glass Bottle\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n");
                needMint.button("Close");
                needMint.show(player).then(r => {
                    if (r.canceled) return;

                    let needMint_response = r.selection;
                    switch (needMint_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 5:
                let skyLimit = new ActionFormData();
                skyLimit.title("Sky's the Limit");
                skyLimit.body("§7 Category\n§r The End\n\n§7 Description\n§r Find Elytra\n\n§e Reward\n§r None\n\n§e Type\n§e Goal\n\n");
                skyLimit.button("Close");
                skyLimit.show(player).then(r => {
                    if (r.canceled) return;

                    let skyLimit_response = r.selection;
                    switch (skyLimit_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;
            case 6:
                let greatView = new ActionFormData();
                greatView.title("Great View From Up Here");
                greatView.body("§7 Category\n§r The End\n\n§7 Description\n§r Levitate up 50 blocks from the attacks of a Shulker\n\n§e Reward\n§r 50 experience\n\n§e Type\n§d Challenge\n\n");
                greatView.button("Close");
                greatView.show(player).then(r => {
                    if (r.canceled) return;

                    let greatView_response = r.selection;
                    switch (greatView_response) {
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

export { open_category_end }
