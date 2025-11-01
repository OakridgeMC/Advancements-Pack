tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Low Rider]"}]}
tag @s add LowRider
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_adv Low Rider|textures/icons/advancement/low_rider