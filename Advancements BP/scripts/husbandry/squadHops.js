import {
  world,
  system
} from "@minecraft/server";

world.afterEvents.playerInteractWithEntity.subscribe((event) => {
  const entity = event.target;
  const player = event.player;
  const item = event.beforeItemStack;;
  if (!entity || !player || !item) {
    return;
  }
  if (entity.typeId !== 'minecraft:frog' || item.typeId !== 'minecraft:lead') return;
  let leashable = entity.getComponent('minecraft:leashable')
  if (leashable.isLeashed) {
    let variant = entity.getComponent("minecraft:variant").value
    let holder = leashable.leashHolder
    if (!holder.hasTag(`Leashed_Frog_${variant}`)) {
      holder.addTag(`Leashed_Frog_${variant}`)
      if (holder.hasTag("Leashed_Frog_0") && holder.hasTag("Leashed_Frog_1") && holder.hasTag("Leashed_Frog_2")) {
        holder.runCommand('function adv/when_the_squad_hops_into_town/grant')
      }
    }
  }
})

