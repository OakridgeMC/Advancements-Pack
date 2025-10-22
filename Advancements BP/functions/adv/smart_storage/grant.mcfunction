tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Smart Storage]"}]}
tag @s add SmartStorage
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_adv Smart Storage|textures/icons/advancement/smart_storage