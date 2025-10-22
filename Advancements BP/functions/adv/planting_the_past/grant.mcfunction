tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Planting the Past]"}]}
tag @s add PlantingPast
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Planting the Plast|textures/icons/advancement/planting_the_past