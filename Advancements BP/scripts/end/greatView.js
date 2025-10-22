import {
    world,
    system
} from "@minecraft/server";


world.afterEvents.effectAdd.subscribe((event) => {
    const player = event.entity;
    const effect = event.effect;
    if (effect.displayName == "Levitation") {
        world.scoreboard.getObjective("levitation_start").setScore(player, player.location.y)
    }
});

system.runInterval(() => {
    for (const player of world.getPlayers({ excludeTags: ["GreatView"], scoreOptions: [{ objective: 'levitation_start', minScore: -64 }] })) {
        if (player.getEffect("levitation")) {
            const height_needed = world.scoreboard.getObjective("levitation_start").getScore(player) + 50
            if (player.location.y >= height_needed) {
                player.runCommand('function adv/great_view_from_up_here/grant')
            }
        } else {
            world.scoreboard.getObjective("levitation_start").removeParticipant(player)
        }
    }
})