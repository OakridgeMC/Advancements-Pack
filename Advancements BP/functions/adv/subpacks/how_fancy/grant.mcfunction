tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[How Fancy]"}]}
tag @s add HowFancy
scoreboard objectives add DragonsCount dummy
scoreboard players add @s DragonsCount 1
scriptevent adv:toast_adv How Fancy|textures/icons/advancement/subpacks/how_fancy