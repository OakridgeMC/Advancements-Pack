tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Very Very Frightening]"}]}
tag @s add VeryFrightening
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Very Very Frightening|textures/icons/advancement/very_very_frightening