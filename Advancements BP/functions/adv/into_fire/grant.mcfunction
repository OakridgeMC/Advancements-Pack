tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Into Fire]"}]}
tag @s add IntoFire
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add NetherCount dummy
scoreboard players add @s NetherCount 1
scriptevent adv:toast_adv Into Fire|textures/icons/advancement/into_fire