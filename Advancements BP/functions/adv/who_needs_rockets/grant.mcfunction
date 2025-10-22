tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Who Needs Rockets?]"}]}
tag @s add NeedsRockets
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Who Needs Rockets?|textures/icons/advancement/who_needs_rockets