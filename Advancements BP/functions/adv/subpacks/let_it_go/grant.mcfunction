tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Let it Go!]"}]}
tag @s add LetGo
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv Let it Go!|textures/icons/advancement/subpacks/let_it_go