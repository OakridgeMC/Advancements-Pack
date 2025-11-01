tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[A Whim Away]"}]}
tag @s add WhimAway
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_adv A Whim Away|textures/icons/advancement/whim_away