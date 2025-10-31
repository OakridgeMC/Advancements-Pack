import {
    world,
    system
} from "@minecraft/server";

const specialEggs = [
    "dragons:dragon_egg_common",
    "dragons:dragon_egg_night",
    "dragons:dragon_egg_enchanted",
    "dragons:dragon_egg_quake",
    "dragons:dragon_egg_deadly"
]

system.runInterval(() => {
    for (const player of world.getPlayers({ tags: ["aly:dragons_enabled"] })) {
        let inv = player.getComponent("minecraft:inventory").container;
        for (let i = 0; i < inv.size; i++) {
            const item = inv.getItem(i)
            if (!item) continue;
            if (item.typeId == "dragons:dragonsbane" && !player.hasTag("InspiredDesign")) {
                player.runCommand("function adv/subpacks/inspired_design/grant")
            }
            if (item.typeId == "dragons:dragon_saddle" && !player.hasTag("HowTrain")) {
                player.runCommand("function adv/subpacks/how_to_train_your_dragon/grant")
            }
            if (specialEggs.includes(item.typeId) && !player.hasTag("HowFancy")) {
                player.runCommand("function adv/subpacks/how_fancy/grant")
            }
        }


    }
});