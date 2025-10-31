tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Eye for an Eye]"}]}
tag @s add ForEye
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv Eye for an Eye|textures/icons/advancement/subpacks/eye_for_an_eye