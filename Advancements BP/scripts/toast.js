import { system } from "@minecraft/server";

function sendNotification(player, message, image, playSound) {
  if (playSound === undefined || playSound) player.playSound("random.toast_recipe_unlocking_in");
  player.sendMessage(`toast.${message}${message.length < 200 ? "$".repeat(200 - message.length) : ""}${image}${image.length < 200 ? "$".repeat(200 - image.length) : ""}`)
  if (playSound === undefined || playSound) {
    system.runTimeout(() => {
      if (player && player.isValid)
        player.playSound("random.toast_recipe_unlocking_out");
    }, 108);
  }
}

system.afterEvents.scriptEventReceive.subscribe((event) => {
  const id = event.id;
  const entity = event.sourceEntity;
  const message = event.message.split("|");
  const icon = message[1];

  if (entity.hasTag("adv:toasts_off")) return;

  if (id === 'adv:toast_adv') {
    const title = `§eAdvancement Made!\n§r${message[0]}`
    sendNotification(entity, title, icon, true)
  }
  if (id === 'adv:toast_goal') {
    const title = `§eGoal Reached!\n§r${message[0]}`
    sendNotification(entity, title, icon, true)
  }
  if (id === 'adv:toast_chal') {
    const title = `§dChallenge Complete!\n§r${message[0]}`
    sendNotification(entity, title, icon, true)
  }
});