import {
    world,
    EntityInitializationCause,
    BlockVolume
} from "@minecraft/server";


world.afterEvents.entitySpawn.subscribe(event => {
    const cause = event.cause
    const entity = event.entity

    if (entity.typeId !== "minecraft:item") return;
    if (cause !== EntityInitializationCause.Spawned) return;

    const nearestValidAllay = entity.dimension.getEntities({ location: entity.location, maxDistance: 1, type: "minecraft:allay", closest: 1 })
    if (nearestValidAllay.length == 0) {
        return;
    }
    const allay = nearestValidAllay[0]
    allay.runCommand("tag @s[type=allay,hasitem={item=cake,location=slot.weapon.mainhand}] add holding_cake")
    if (!allay.hasTag("holding_cake")) return;
    allay.removeTag("holding_cake")

    const corner1 = { x: allay.location.x - 8, y: allay.location.y - 4, z: allay.location.z - 8 }
    const corner2 = { x: allay.location.x + 8, y: allay.location.y + 4, z: allay.location.z + 8 }
    const dim = allay.dimension
    const volume = allay.dimension.getBlocks((new BlockVolume(corner1, corner2)), {})
    for (const location of volume.getBlockLocationIterator()) {
        const block = dim.getBlock(location)
        if (block.typeId === "minecraft:noteblock") {
            const nearbyPlayers = dim.getPlayers({ location: allay.location, maxDistance: 16, excludeTags: ["BirthdaySong"] })
            for (const player of nearbyPlayers) {
                player.runCommand('function adv/birthday_song/grant')
            }
            return;
        }
    }
})
