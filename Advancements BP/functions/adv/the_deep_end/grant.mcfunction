tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[The Deep End]"}]}
tag @s add DeepEnd
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_adv The Deep End|textures/icons/advancement/the_deep_end