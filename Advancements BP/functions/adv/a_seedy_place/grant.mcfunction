tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[A Seedy Place]"}]}
tag @s add SeedyPlace
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv A Seedy Place|textures/icons/advancement/a_seedy_place