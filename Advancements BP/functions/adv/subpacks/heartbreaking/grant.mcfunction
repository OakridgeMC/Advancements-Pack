tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Heartbreaking]"}]}
tag @s add Heartbreaking
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv Heartbreaking|textures/icons/advancement/subpacks/heartbreaking