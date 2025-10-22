import { world, system } from "@minecraft/server";



system.beforeEvents.startup.subscribe(event => {
    const registry = event.customCommandRegistry;
    const toast_settings = {
        name: "adv:toasts",
        description: "Toggle the UI toasts from Alylica's Advancements.",
        cheatsRequired: false,
        permissionLevel: 0
    }
    registry.registerCommand(toast_settings,
        (source) => {
            const sourceEntity = source.sourceEntity;
            system.run(() => {
                if (sourceEntity.hasTag("adv:toasts_off")) {
                    sourceEntity.removeTag("adv:toasts_off")
                    sourceEntity.sendMessage("Enabled toasts")

                } else {
                    sourceEntity.addTag("adv:toasts_off")
                    sourceEntity.sendMessage("Disabled toasts")

                }
            })
        }
    );
});