tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Crafting a New Look]"}]}
tag @s add CraftLook
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Crafting a New Look|textures/icons/advancement/crafting_a_new_look