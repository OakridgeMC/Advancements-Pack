tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Pure of Heart]"}]}
tag @s add PureHeart
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_adv Pure of Heart|textures/icons/advancement/pure_of_heart