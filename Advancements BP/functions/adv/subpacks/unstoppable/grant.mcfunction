tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Unstoppable]"}]}
tag @s add Unstoppable
scoreboard objectives add DragonsCount dummy
scoreboard players add @s DragonsCount 1
scriptevent adv:toast_adv Unstoppable|textures/icons/advancement/subpacks/unstoppable