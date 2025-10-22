tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Is It a Bird?]"}]}
tag @s add ItBird
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Is It a Bird?|textures/icons/advancement/is_it_a_bird