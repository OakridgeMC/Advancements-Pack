tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[That's Bad For Your Bones!]"}]}
tag @s add BadBones
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_adv That's Bad For Your Bones!|textures/icons/advancement/bad_bones