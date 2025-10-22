import {
    world,
    system
} from "@minecraft/server";

world.afterEvents.dataDrivenEntityTrigger.subscribe((event) => {
    const entity = event.entity
    const id = event.eventId
    if (id !== "minecraft:transport_items.start_place_succeed") return;

    const nearestPlayer = entity.dimension.getPlayers({ excludeTags: ["SmartStorage"], excludeGameModes: ["Spectator"], closest: 1, maxDistance: 16, location: entity.location })
    for (const player of nearestPlayer) {
        player.runCommand('function adv/smart_storage/grant')
    }

})