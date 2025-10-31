tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[You Cooked]"}]}
tag @s add YouCooked
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv You Cooked|textures/icons/advancement/subpacks/you_cooked