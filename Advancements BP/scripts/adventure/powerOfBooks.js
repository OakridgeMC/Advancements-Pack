import {
    world,
    system
} from "@minecraft/server";


world.afterEvents.playerPlaceBlock.subscribe((event) => {
    const block = event.block;
    const player = event.player;
    const direction = block.permutation.getState('minecraft:cardinal_direction');

    if (!block || !player) {
        return;
    }

    if (block.typeId !== 'minecraft:unpowered_comparator') return;
    if (player.hasTag('PowerBooks')) return;

    var lookAt = block;
    if (direction == "north") {
        lookAt = block.north()
    } else if (direction == "south") {
        lookAt = block.south()
    } else if (direction == "east") {
        lookAt = block.east()
    } else if (direction == "west") {
        lookAt = block.west()
    } else {
        return;
    }

    if (lookAt.typeId == "minecraft:chiseled_bookshelf") {
        player.runCommand('function adv/the_power_of_books/grant')
    }
})

world.afterEvents.playerPlaceBlock.subscribe((event) => {
    const block = event.block;
    const player = event.player;
    if (!block || !player) {
        return;
    }

    if (block.typeId !== 'minecraft:chiseled_bookshelf') return;
    if (player.hasTag('PowerBooks')) return;

    const east = block.east()
    const west = block.west()
    const north = block.north()
    const south = block.south()
    if (east.typeId == "minecraft:powered_comparator" || east.typeId == "minecraft:unpowered_comparator") {
        let direction = east.permutation.getState('minecraft:cardinal_direction');
        if (direction == "west") {
            player.runCommand('function adv/the_power_of_books/grant')
            return;
        }
    } else if (west.typeId == "minecraft:powered_comparator" || west.typeId == "minecraft:unpowered_comparator") {
        let direction = west.permutation.getState('minecraft:cardinal_direction');
        if (direction == "east") {
            player.runCommand('function adv/the_power_of_books/grant')
            return;
        }
    } else if (north.typeId == "minecraft:powered_comparator" || north.typeId == "minecraft:unpowered_comparator") {
        let direction = north.permutation.getState('minecraft:cardinal_direction');
        if (direction == "south") {
            player.runCommand('function adv/the_power_of_books/grant')
            return;
        }
    } else if (south.typeId == "minecraft:powered_comparator" || south.typeId == "minecraft:unpowered_comparator") {
        let direction = south.permutation.getState('minecraft:cardinal_direction');
        if (direction == "north") {
            player.runCommand('function adv/the_power_of_books/grant')
            return;
        }
    }
})
