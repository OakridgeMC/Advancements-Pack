tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has reached the goal §a[A Wild Word]"}]}
tag @s add WildWorld
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_goal A Wild World|textures/icons/advancement/a_wild_world