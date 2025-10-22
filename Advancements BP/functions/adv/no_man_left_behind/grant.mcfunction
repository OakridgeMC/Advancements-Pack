tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has reached the goal §a[No Man Left Behind]"}]}
tag @s add NoMan
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_goal No Man Left Behind|textures/icons/advancement/no_man_left_behind