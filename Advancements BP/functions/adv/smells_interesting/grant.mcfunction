tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Smells Interesting]"}]}
tag @s add SmellsInteresting
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Smells Interesting|textures/icons/advancement/smells_interesting