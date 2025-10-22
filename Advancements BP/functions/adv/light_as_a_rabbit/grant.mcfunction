tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Light as a Rabbit]"}]}
tag @s add LightRabbit
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Light as a Rabbit|textures/icons/advancement/light_as_a_rabbit