import {
    world,
    EntityInitializationCause
} from "@minecraft/server";

const weirdBreeds = [
    "minecraft:sniffer",
    "minecraft:turtle",
    "minecraft:frog",
    "minecraft:tadpole"
]

const breedables = [
    "minecraft:armadillo",
    "minecraft:axolotl",
    "minecraft:bee",
    "minecraft:camel",
    "minecraft:cat",
    "minecraft:chicken",
    "minecraft:cow",
    "minecraft:donkey",
    "minecraft:frog",
    "minecraft:fox",
    "minecraft:goat",
    "minecraft:hoglin",
    "minecraft:horse",
    "minecraft:llama",
    "minecraft:mooshroom",
    "minecraft:mule",
    "minecraft:ocelot",
    "minecraft:panda",
    "minecraft:pig",
    "minecraft:rabbit",
    "minecraft:sheep",
    "minecraft:sniffer",
    "minecraft:strider",
    "minecraft:turtle",
    "minecraft:wolf"
]

const breedableTags = [
    "adv:bred_armadillo",
    "adv:bred_axolotl",
    "adv:bred_bee",
    "adv:bred_camel",
    "adv:bred_cat",
    "adv:bred_chicken",
    "adv:bred_cow",
    "adv:bred_donkey",
    "adv:bred_frog",
    "adv:bred_fox",
    "adv:bred_goat",
    "adv:bred_hoglin",
    "adv:bred_horse",
    "adv:bred_llama",
    "adv:bred_mooshroom",
    "adv:bred_mule",
    "adv:bred_ocelot",
    "adv:bred_panda",
    "adv:bred_pig",
    "adv:bred_rabbit",
    "adv:bred_sheep",
    "adv:bred_sniffer",
    "adv:bred_strider",
    "adv:bred_turtle",
    "adv:bred_wolf"
]

function allMet(tagsToCheck, player) {
    const playerTags = player.getTags()
    var count = 0
    for (const tag of playerTags) {
        if (tagsToCheck.includes(tag)) {
            count += 1;
        }
    }
    //world.sendMessage(`${count} / ${tagsToCheck.length}`)
    if (count == tagsToCheck.length) {
        return true;
    } else {
        return false;
    }
}

function bredMob(player, tag, mob) {
    if (breedables.includes(mob.typeId)) {
        player.addTag(tag)
        if (!player.hasTag("ParrotsBats")) {
            player.runCommand("function adv/the_parrots_and_the_bats/grant")
        }
        if (!player.hasTag("TwoTwo")) {
            if (allMet(breedableTags, player) == true) {
                player.runCommand("function adv/two_by_two/grant")
            }
        }
    }
}

world.afterEvents.entitySpawn.subscribe(event => {
    const cause = event.cause
    const entity = event.entity

    if (cause !== EntityInitializationCause.Born) return;
    if (weirdBreeds.includes(entity.typeId)) return;
    var tag = "adv:bred_" + entity.typeId.split(":", 2)[1]

    const nearestValidPlayer = entity.dimension.getPlayers({ location: entity.location, maxDistance: 16, excludeTags: ["TwoTwo"], closest: 1 })
    if (nearestValidPlayer.length == 0) {
        return;
    }

    bredMob(nearestValidPlayer[0], tag, entity)
})

world.afterEvents.dataDrivenEntityTrigger.subscribe(event => {
    const eventId = event.eventId;
    const entity = event.entity

    if ((entity.typeId == "minecraft:frog" && eventId === "become_pregnant") || (entity.typeId == "minecraft:sniffer" && eventId === "on_pregnant") || (entity.typeId == "minecraft:turtle" && eventId === "minecraft:become_pregnant")) {
        var tag = "adv:bred_" + entity.typeId.split(":", 2)[1]

        const nearestValidPlayer = entity.dimension.getPlayers({ location: entity.location, maxDistance: 16, excludeTags: ["TwoTwo"], closest: 1 })
        if (nearestValidPlayer.length == 0) {
            return;
        }

        bredMob(nearestValidPlayer[0], tag, entity)
    }
})