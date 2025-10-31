tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Firefighter]"}]}
tag @s add Firefighter
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv Firefighter|textures/icons/advancement/subpacks/firefighter