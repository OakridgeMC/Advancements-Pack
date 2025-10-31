tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Side Effects May Vary]"}]}
tag @s add MayVary
scoreboard objectives add DragonsCount dummy
scoreboard players add @s DragonsCount 1
scriptevent adv:toast_adv Side Effects May Vary|textures/icons/advancement/subpacks/side_effects_may_vary