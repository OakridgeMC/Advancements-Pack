tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Heart Transplanter]"}]}
tag @s add HeartTransplanter
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Heart Transplanter|textures/icons/advancement/heart_transplanter