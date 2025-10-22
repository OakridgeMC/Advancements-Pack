import {
    world,
    system
} from "@minecraft/server";

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    const riding = player.getComponent('minecraft:riding');
    if(riding) {
    const mount = riding.entityRidingOn;
    if (!player.hasTag('HowWeather') && mount.typeId === "minecraft:happy_ghast" && (mount.location.y > 187) && (mount.location.y < 196)) {
      player.runCommand('function adv/hows_the_weather_up_there/grant')
    }
    }
  }
});