tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has reached the goal §a[The End... Again...]"}]}
tag @s add EndAgain
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add EndCount dummy
scoreboard players add @s EndCount 1
scriptevent adv:toast_goal The End... Again...|textures/icons/advancement/the_end_again