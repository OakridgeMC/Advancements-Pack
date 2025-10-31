tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[How to Train Your Dragon]"}]}
tag @s add HowTrain
scoreboard objectives add DragonsCount dummy
scoreboard players add @s DragonsCount 1
scriptevent adv:toast_adv How to Train Your Dragon|textures/icons/advancement/subpacks/how_to_train_your_dragon