import {
    ActionFormData
} from "@minecraft/server-ui";


function open_category_nether(player, count, max, pct) {
    let nether = new ActionFormData();

    nether.title("Nether");
    nether.body(`Bring summer clothes.\n§eComplete :§b ${count}§e/§b${max}\n§6[${pct}%%]`);
    if (player.hasTag('ReturnSender')) {
        nether.button("§dReturn to Sender", "textures/icons/advancement/return_to_sender.png");
    } else {
        nether.button("Return to Sender", "textures/icons/advancement/incomplete/return_to_sender.png");
    }
    if (player.hasTag('HiddenDepths')) {
        nether.button("§aHidden in the Depths", "textures/icons/advancement/hidden_in_the_depths.png");
    } else {
        nether.button("Hidden in the Depths", "textures/icons/advancement/incomplete/hidden_in_the_depths.png");
    }
    if (player.hasTag('CuttingOnions')) {
        nether.button("§aWho is Cutting Onions?", "textures/icons/advancement/who_is_cutting_onions.png");
    } else {
        nether.button("Who is Cutting Onions?", "textures/icons/advancement/incomplete/who_is_cutting_onions.png");
    }
    if (player.hasTag('OhShiny')) {
        nether.button("§aOh Shiny", "textures/icons/advancement/oh_shiny.png");
    } else {
        nether.button("Oh Shiny", "textures/icons/advancement/incomplete/oh_shiny.png");
    }
    if (player.hasTag('BoatLegs')) {
        nether.button("§aThis Boat Has Legs", "textures/icons/advancement/this_boat_has_legs.png");
    } else {
        nether.button("This Boat Has Legs", "textures/icons/advancement/incomplete/this_boat_has_legs.png");
    }
    if (player.hasTag('UneasyAlliance')) {
        nether.button("§dUneasy Alliance", "textures/icons/advancement/uneasy_alliance.png");
    } else {
        nether.button("Uneasy Alliance", "textures/icons/advancement/incomplete/uneasy_alliance.png");
    }
    if (player.hasTag('WarPigs')) {
        nether.button("§aWar Pigs", "textures/icons/advancement/war_pigs.png");
    } else {
        nether.button("War Pigs", "textures/icons/advancement/incomplete/war_pigs.png");
    }
    if (player.hasTag('SubspaceBubble')) {
        nether.button("§dSubspace Bubble", "textures/icons/advancement/subspace_bubble.png");
    } else {
        nether.button("Subspace Bubble", "textures/icons/advancement/incomplete/subspace_bubble.png");
    }
    if (player.hasTag('CoverDebris')) {
        nether.button("§dCover Me in Debris", "textures/icons/advancement/cover_me_in_debris.png");
    } else {
        nether.button("Cover Me in Debris", "textures/icons/advancement/incomplete/cover_me_in_debris.png");
    }
    if (player.hasTag('SpookySkeleton')) {
        nether.button("§aSpooky Scary Skeleton", "textures/icons/advancement/spooky_scary_skeleton.png");
    } else {
        nether.button("Spooky Scary Skeleton", "textures/icons/advancement/incomplete/spooky_scary_skeleton.png");
    }
    if (player.hasTag('IntoFire')) {
        nether.button("§aInto Fire", "textures/icons/advancement/into_fire.png");
    } else {
        nether.button("Into Fire", "textures/icons/advancement/incomplete/into_fire.png");
    }
    if (player.hasTag('NotNine')) {
        nether.button("§aNot Quite \"Nine\" Lives", "textures/icons/advancement/not_quite_nine_lives.png");
    } else {
        nether.button("Not Quite \"Nine\" Lives", "textures/icons/advancement/incomplete/not_quite_nine_lives.png");
    }
    if (player.hasTag('LikeHome')) {
        nether.button("§aFeels Like Home", "textures/icons/advancement/feels_like_home.png");
    } else {
        nether.button("Feels Like Home", "textures/icons/advancement/incomplete/feels_like_home.png");
    }
    if (player.hasTag('HotTourist')) {
        nether.button("§dHot Tourist Destinations", "textures/icons/advancement/hot_tourist_destinations.png");
    } else {
        nether.button("Hot Tourist Destinations", "textures/icons/advancement/incomplete/hot_tourist_destinations.png");
    }
    if (player.hasTag('WitheringHeights')) {
        nether.button("§aWithering Heights", "textures/icons/advancement/withering_heights.png");
    } else {
        nether.button("Withering Heights", "textures/icons/advancement/incomplete/withering_heights.png");
    }
    if (player.hasTag('LocalBrewery')) {
        nether.button("§aLocal Brewery", "textures/icons/advancement/local_brewery.png");
    } else {
        nether.button("Local Brewery", "textures/icons/advancement/incomplete/local_brewery.png");
    }
    if (player.hasTag('BringBeacon')) {
        nether.button("§aBring Home the Beacon", "textures/icons/advancement/bring_home_the_beacon.png");
    } else {
        nether.button("Bring Home the Beacon", "textures/icons/advancement/incomplete/bring_home_the_beacon.png");
    }
    if (player.hasTag('FuriousCocktail')) {
        nether.button("§dA Furious Cocktail", "textures/icons/advancement/a_furious_cocktail.png");
    } else {
        nether.button("A Furious Cocktail", "textures/icons/advancement/incomplete/a_furious_cocktail.png");
    }
    if (player.hasTag('HowHere')) {
        nether.button("§dHow Did We Get Here?", "textures/icons/advancement/how_did_we_get_here.png");
    } else {
        nether.button("How Did We Get Here?", "textures/icons/advancement/incomplete/how_did_we_get_here.png");
    }

    nether.show(player).then(r => {
        if (r.canceled) return;

        let response = r.selection;
        switch (response) {
            case 0:
                let returnSender = new ActionFormData();
                returnSender.title("Return to Sender");
                returnSender.body("§7 Category\n§r Nether\n\n§7 Description\n§r Destroy a Ghast with a fireball\n\n§e Reward\n§r 50 experience\n\n§e Type\n§d Challenge\n\n");
                returnSender.button("Close");
                returnSender.show(player).then(r => {
                    if (r.canceled) return;

                    let returnSender_response = r.selection;
                    switch (returnSender_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 1:
                let hiddenDepths = new ActionFormData();
                hiddenDepths.title("Hidden in the Depths");
                hiddenDepths.body("§7 Category\n§r Nether\n\n§7 Description\n§r Obtain Ancient Debris\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                hiddenDepths.button("Close");
                hiddenDepths.show(player).then(r => {
                    if (r.canceled) return;

                    let hiddenDepths_response = r.selection;
                    switch (hiddenDepths_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 2:
                let cuttingOnions = new ActionFormData();
                cuttingOnions.title("Who is Cutting Onions?");
                cuttingOnions.body("§7 Category\n§r Nether\n\n§7 Description\n§r Obtain Crying Obsidian\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                cuttingOnions.button("Close");
                cuttingOnions.show(player).then(r => {
                    if (r.canceled) return;

                    let cuttingOnions_response = r.selection;
                    switch (cuttingOnions_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 3:
                let ohShiny = new ActionFormData();
                ohShiny.title("Oh Shiny");
                ohShiny.body("§7 Category\n§r Nether\n\n§7 Description\n§r Distract Piglins with Gold\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                ohShiny.button("Close");
                ohShiny.show(player).then(r => {
                    if (r.canceled) return;

                    let ohShiny_response = r.selection;
                    switch (ohShiny_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 4:
                let boatLegs = new ActionFormData();
                boatLegs.title("This Boat Has Legs");
                boatLegs.body("§7 Category\n§r Nether\n\n§7 Description\n§r Ride a Strider with a Warped Fungus on a Stick\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                boatLegs.button("Close");
                boatLegs.show(player).then(r => {
                    if (r.canceled) return;

                    let boatLegs_response = r.selection;
                    switch (boatLegs_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 5:
                let uneasyAlliance = new ActionFormData();
                uneasyAlliance.title("Uneasy Alliance");
                uneasyAlliance.body("§7 Category\n§r Nether\n\n§7 Description\n§r Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it\n\n§e Reward\n§r 100 experience\n\n§e Type\n§d Challenge\n\n");
                uneasyAlliance.button("Close");
                uneasyAlliance.show(player).then(r => {
                    if (r.canceled) return;

                    let uneasyAlliance_response = r.selection;
                    switch (uneasyAlliance_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 6:
                let warPigs = new ActionFormData();
                warPigs.title("War Pigs");
                warPigs.body("§7 Category\n§r Nether\n\n§7 Description\n§r Retrieve a Netherite Upgrade Smithing Template from a Bastion Remnant\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                warPigs.button("Close");
                warPigs.show(player).then(r => {
                    if (r.canceled) return;

                    let warPigs_response = r.selection;
                    switch (warPigs_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 7:
                let subspaceBubble = new ActionFormData();
                subspaceBubble.title("Subspace Bubble");
                subspaceBubble.body("§7 Category\n§r Nether\n\n§7 Description\n§r Use the Nether to travel 7 km in the Overworld\n\n§e Reward\n§r 100 experience\n\n§e Type\n§d Challenge\n\n");
                subspaceBubble.button("Close");
                subspaceBubble.show(player).then(r => {
                    if (r.canceled) return;

                    let subspaceBubble_response = r.selection;
                    switch (subspaceBubble_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 8:
                let coverDebris = new ActionFormData();
                coverDebris.title("Cover Me in Debris");
                coverDebris.body("§7 Category\n§r Nether\n\n§7 Description\n§r Get a full suit of Netherite Armour\n\n§e Reward\n§r 100 experience\n\n§e Type\n§d Challenge\n\n");
                coverDebris.button("Close");
                coverDebris.show(player).then(r => {
                    if (r.canceled) return;

                    let coverDebris_response = r.selection;
                    switch (coverDebris_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 9:
                let spookySkeleton = new ActionFormData();
                spookySkeleton.title("Spooky Scary Skeleton");
                spookySkeleton.body("§7 Category\n§r Nether\n\n§7 Description\n§r Obtain a Wither Skeleton's skull\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                spookySkeleton.button("Close");
                spookySkeleton.show(player).then(r => {
                    if (r.canceled) return;

                    let spookySkeleton_response = r.selection;
                    switch (spookySkeleton_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 10:
                let intoFire = new ActionFormData();
                intoFire.title("Into Fire");
                intoFire.body("§7 Category\n§r Nether\n\n§7 Description\n§r Relieve a Blaze of its rod\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                intoFire.button("Close");
                intoFire.show(player).then(r => {
                    if (r.canceled) return;

                    let intoFire_response = r.selection;
                    switch (intoFire_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 11:
                let notNine = new ActionFormData();
                notNine.title("Not Quite \"Nine\" Lives");
                notNine.body("§7 Category\n§r Nether\n\n§7 Description\n§r Construct a Respawn Anchor\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                notNine.button("Close");
                notNine.show(player).then(r => {
                    if (r.canceled) return;

                    let notNine_response = r.selection;
                    switch (notNine_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 12:
                let likeHome = new ActionFormData();
                likeHome.title("Feels like Home");
                likeHome.body("§7 Category\n§r Nether\n\n§7 Description\n§r Take a Strider for a ride on lava in the Overworld\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                likeHome.button("Close");
                likeHome.show(player).then(r => {
                    if (r.canceled) return;

                    let likeHome_response = r.selection;
                    switch (likeHome_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 13:
                let hotTourist = new ActionFormData();
                hotTourist.title("Hot Tourist Destinations");
                hotTourist.body("§7 Category\n§r Nether\n\n§7 Description\n§r Explore all Nether Biomes\n\n§e Reward\n§r 500 experience\n\n§e Type\n§d Challenge\n\n");
                hotTourist.button("Close");
                hotTourist.show(player).then(r => {
                    if (r.canceled) return;

                    let hotTourist_response = r.selection;
                    switch (hotTourist_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 14:
                let witheringHeights = new ActionFormData();
                witheringHeights.title("Withering Heights");
                witheringHeights.body("§7 Category\n§r Nether\n\n§7 Description\n§r Summon the Wither\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                witheringHeights.button("Close");
                witheringHeights.show(player).then(r => {
                    if (r.canceled) return;

                    let witheringHeights_response = r.selection;
                    switch (witheringHeights_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 15:
                let localBrewery = new ActionFormData();
                localBrewery.title("Local Brewery");
                localBrewery.body("§7 Category\n§r Nether\n\n§7 Description\n§r Obtain a Brewing Stand\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                localBrewery.button("Close");
                localBrewery.show(player).then(r => {
                    if (r.canceled) return;

                    let localBrewery_response = r.selection;
                    switch (localBrewery_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 16:
                let bringBeacon = new ActionFormData();
                bringBeacon.title("Bring Home the Beacon");
                bringBeacon.body("§7 Category\n§r Nether\n\n§7 Description\n§r Construct a Beacon\n\n§e Reward\n§r None\n\n§e Type\n§a Advancement\n\n");
                bringBeacon.button("Close");
                bringBeacon.show(player).then(r => {
                    if (r.canceled) return;

                    let bringBeacon_response = r.selection;
                    switch (bringBeacon_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 17:
                let furiousCocktail = new ActionFormData();
                furiousCocktail.title("A Furious Cocktail");
                furiousCocktail.body("§7 Category\n§r Nether\n\n§7 Description\n§r Have every potion effect applied at the same time\n\n§e Reward\n§r 100 experience\n\n§e Type\n§d Challenge\n\n");
                furiousCocktail.button("Close");
                furiousCocktail.show(player).then(r => {
                    if (r.canceled) return;

                    let furiousCocktail_response = r.selection;
                    switch (furiousCocktail_response) {
                        default:
                            return;
                    }
                }).catch(e => {
                    console.error(e, e.stack);
                });
                break;

            case 18:
                let howHere = new ActionFormData();

                if (player.hasTag('HowHere')) {
                    howHere.title("How Did We Get Here?");
                    howHere.body("§7 Category\n§r Nether\n\n§7 Description\n§r Have every effect applied at the same time\n\n§e Reward\n§r 1000 experience\n\n§e Type\n§d Challenge\n\n");
                    howHere.button("Close");
                } else {
                    howHere.title("???");
                    howHere.body("§7 Category\n§r Nether\n\n§7 Description\n§r This advancement is a secret, its info is only revealed after completion.\n");
                    howHere.button("Close");
                }

                howHere.show(player).then(r => {
                    if (r.canceled) return;

                    let howHere_response = r.selection;
                    switch (howHere_response) {
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

export { open_category_nether }
