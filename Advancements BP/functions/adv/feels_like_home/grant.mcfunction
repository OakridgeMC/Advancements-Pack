tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Feels Like Home]"}]}
tag @s add LikeHome
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add NetherCount dummy
scoreboard players add @s NetherCount 1
scriptevent adv:toast_adv Feels Like Home|textures/icons/advancement/feels_like_home