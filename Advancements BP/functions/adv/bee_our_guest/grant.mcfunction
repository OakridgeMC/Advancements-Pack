tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Bee Our Guest]"}]}
tag @s add BeeGuest
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Bee Our Guest|textures/icons/advancement/bee_our_guest