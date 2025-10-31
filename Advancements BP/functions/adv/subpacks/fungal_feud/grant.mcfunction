tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Fungal Feud]"}]}
tag @s add FungalFeud
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv Fungal Feud|textures/icons/advancement/subpacks/fungal_feud