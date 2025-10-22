tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[The Power of Books]"}]}
tag @s add PowerBooks
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv The Power of Books|textures/icons/advancement/the_power_of_books