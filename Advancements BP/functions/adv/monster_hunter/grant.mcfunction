tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Monster Hunter]"}]}
tag @s add MonsterHunter
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Monster Hunter|textures/icons/advancement/monster_hunter