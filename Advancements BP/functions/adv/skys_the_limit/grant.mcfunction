tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has reached the goal §a[Sky's the Limit]"}]}
tag @s add SkyLimit
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add EndCount dummy
scoreboard players add @s EndCount 1
scriptevent adv:toast_goal Sky's the Limit|textures/icons/advancement/skys_the_limit