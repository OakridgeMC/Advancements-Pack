tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has reached the goal §a[The Next Generation]"}]}
tag @s add NextGeneration
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add EndCount dummy
scoreboard players add @s EndCount 1
scriptevent adv:toast_goal The Next Generation|textures/icons/advancement/the_next_generation