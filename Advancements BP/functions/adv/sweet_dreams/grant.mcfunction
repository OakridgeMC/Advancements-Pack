tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Sweet Dreams]"}]}
tag @s add SweetDreams
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Sweet Dreams|textures/icons/advancement/sweet_dreams