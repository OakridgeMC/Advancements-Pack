import {
  world,
  system,
  CommandPermissionLevel,
  CustomCommandStatus,
} from "@minecraft/server";

system.beforeEvents.startup.subscribe((event) => {
  const registry = event.customCommandRegistry;
  const toast_settings = {
    name: "adv:toasts",
    description: "Toggle the UI toasts from Alylica's Advancements.",
    cheatsRequired: false,
    permissionLevel: 0,
  };
  registry.registerCommand(toast_settings, (source) => {
    const sourceEntity = source.sourceEntity;
    system.run(() => {
      if (sourceEntity.hasTag("adv:toasts_off")) {
        sourceEntity.removeTag("adv:toasts_off");
        sourceEntity.sendMessage("Enabled toasts");
      } else {
        sourceEntity.addTag("adv:toasts_off");
        sourceEntity.sendMessage("Disabled toasts");
      }
    });
  });
  registry.registerCommand(
    {
      name: "adv:whim",
      description: "Give an achievement to another player at your whim.",
      permissionLevel: CommandPermissionLevel.Any,
      cheatsRequired: false,
      mandatoryParameters: [
        {
          name: "adv:WhimPlayer",
          type: "PlayerSelector",
        },
      ],
    },
    (origin, WhimPlayer) => {
      if (origin.sourceEntity.name == WhimPlayer[0].name) {
        return {
          status: CustomCommandStatus.Failure,
          message: "You cannot grant this to yourself.",
        };
      }
      if (WhimPlayer[0].hasTag("WhimAway")) {
        return {
          status: CustomCommandStatus.Failure,
          message: "That player already has the advancement!",
        };
      }
      system.run(() => {
        world.sendMessage(
          `${origin.sourceEntity.name} has granted §aA Whim Away§r to ${WhimPlayer[0].name}!`
        );
        WhimPlayer[0].runCommand("function adv/whim_away/grant");
      });
      return {
        status: CustomCommandStatus.Success,
        message: `Advancement granted to ${WhimPlayer[0].name}.`,
      };
    }
  );
});
