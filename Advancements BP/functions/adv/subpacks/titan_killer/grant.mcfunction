tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Titan Killer]"}]}
tag @s add TitanKiller
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv Titan Killer|textures/icons/advancement/subpacks/titan_killer