tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Goodnight, Gramps]"}]}
tag @s add GoodnightGramps
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv Goodnight, Gramps|textures/icons/advancement/subpacks/goodnight_gramps