tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Inspired Design]"}]}
tag @s add InspiredDesign
scoreboard objectives add DragonsCount dummy
scoreboard players add @s DragonsCount 1
scriptevent adv:toast_adv Inspired Design|textures/icons/advancement/subpacks/inspired_design