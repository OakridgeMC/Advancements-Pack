tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Country Lode, Take Me Home]"}]}
tag @s add CountryLode
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Country Lode, Take Me Home|textures/icons/advancement/country_lode_take_me_home