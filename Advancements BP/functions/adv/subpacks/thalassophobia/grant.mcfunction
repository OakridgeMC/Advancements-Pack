tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Thalassophobia]"}]}
tag @s add Thalassophobia
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv Thalassophobia|textures/icons/advancement/subpacks/thalassophobia