tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Whatever Floats Your Goat!]"}]}
tag @s add FloatGoat
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Whatever Floats Your Goat!|textures/icons/advancement/whatever_floats_your_goat