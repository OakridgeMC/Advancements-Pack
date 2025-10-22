import {
    world,
    system
} from "@minecraft/server";

// no clue how this works either

const entityHurt = world.afterEvents.entityHurt;

entityHurt.subscribe(hurtA => {
    if (hurtA.damage > 0 || hurtA.damageSource.cause !== 'none') return;

    const evId = entityHurt.subscribe(hurtB => {
        const dmgSrc = hurtB.damageSource;
        if (dmgSrc.cause == 'none') return;
        entityHurt.unsubscribe(evId);

        //code
        if (hurtA.hurtEntity.hasTag('Postmortal')) { return; }
        hurtA.hurtEntity.runCommand('function adv/postmortal/grant')
        hurtA.hurtEntity.addTag('Postmortal')

    }, { entities: [hurtA.hurtEntity] });

}, { entityTypes: ['minecraft:player'] });