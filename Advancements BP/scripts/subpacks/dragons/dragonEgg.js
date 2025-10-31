import {
    world,
    system
} from "@minecraft/server";

const dragonEggs = [
    "dragons:dragon_egg_hatchable",
    "dragons:dragon_egg_void",
    "dragons:dragon_egg_forest",
    "dragons:dragon_egg_fire",
    "dragons:dragon_egg_tide",
    "dragons:dragon_egg_snow",
    "dragons:dragon_egg_sky",
    "dragons:dragon_egg_echo",
    "dragons:dragon_egg_mycelium",
    "dragons:dragon_egg_nether",
    "dragons:dragon_egg_ghost",
    "dragons:dragon_egg_common",
    "dragons:dragon_egg_enchanted",
    "dragons:dragon_egg_night",
    "dragons:dragon_egg_quake",
    "dragons:dragon_egg_deadly",
    "dragons:dragon_egg_bamboo"
]

world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
    const block = event.block
    const player = event.player
    if (!event.isFirstEvent) return
    if (dragonEggs.includes(block.typeId)) {
        if (player.hasTag("WayLife")) return;
        system.run(() => {
            player.runCommand('function adv/subpacks/the_way_of_life/grant');
        })


    }
})