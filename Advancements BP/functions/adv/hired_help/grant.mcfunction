tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has reached the goal §a[Hired Help]"}]}
tag @s add HiredHelp
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_goal Hired Help|textures/icons/advancement/hired_help