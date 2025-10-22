tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Lighten Up]"}]}
tag @s add LightenUp
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Lighten Up|textures/icons/advancement/lighten_up