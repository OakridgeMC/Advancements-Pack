tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Oh Shiny]"}]}
tag @s add OhShiny
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add NetherCount dummy
scoreboard players add @s NetherCount 1
scriptevent adv:toast_adv Oh Shiny|textures/icons/advancement/oh_shiny