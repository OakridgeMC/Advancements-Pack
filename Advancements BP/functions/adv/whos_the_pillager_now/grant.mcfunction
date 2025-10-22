tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Who's the Pillager Now?]"}]}
tag @s add WhoPillager
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Who's the Pillager Now?|textures/icons/advancement/whos_the_pillager_now