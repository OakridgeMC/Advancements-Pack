tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Tree Feller]"}]}
tag @s add TreeFeller
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv Tree Feller|textures/icons/advancement/subpacks/tree_feller