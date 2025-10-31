tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[The Way of Life]"}]}
tag @s add WayLife
scoreboard objectives add DragonsCount dummy
scoreboard players add @s DragonsCount 1
scriptevent adv:toast_adv The Way of Life|textures/icons/advancement/subpacks/the_way_of_life