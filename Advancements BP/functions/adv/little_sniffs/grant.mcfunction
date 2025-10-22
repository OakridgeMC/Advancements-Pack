tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Little Sniffs]"}]}
tag @s add LittleSniffs
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Little Sniffs|textures/icons/advancement/little_sniffs