tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Ol' Betsy]"}]}
tag @s add OlBetsy
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Ol' Betsy|textures/icons/advancement/ol_betsy