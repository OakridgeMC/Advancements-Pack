tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Good as New]"}]}
tag @s add GoodNew
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Good as New|textures/icons/advancement/good_as_new