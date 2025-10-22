import {
  world
} from "@minecraft/server";

world.afterEvents.targetBlockHit.subscribe((event) => {
  const block = event.block
  const source = event.source;
  const power = event.redstonePower

  const owner = source.getComponent("minecraft:projectile").owner;

  const x1 = block.location.x;
  const z1 = block.location.z;

  const x2 = owner.location.x;
  const z2 = owner.location.z;

  const d = Math.hypot(x2 - x1, z2 - z1);
  if (owner.hasTag('debug')) owner.sendMessage(`${d} blocks away from target (must be 30 for adv), hit strength ${power}/15`);

  if (d < 30) return;
  if (power >= 14 && !owner.hasTag("Bullseye")) {
    owner.runCommand('function adv/bullseye/grant')
  }
})