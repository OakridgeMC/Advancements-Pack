tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Run for Your Life!!!]"}]}
tag @s add RunLife
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_adv Run for Your Life!!!|textures/icons/advancement/run_for_your_life