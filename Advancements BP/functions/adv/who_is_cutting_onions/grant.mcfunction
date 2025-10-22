tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Who is Cutting Onions?]"}]}
tag @s add CuttingOnions
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add NetherCount dummy
scoreboard players add @s NetherCount 1
scriptevent adv:toast_adv Who is Cutting Onions?|textures/icons/advancement/who_is_cutting_onions