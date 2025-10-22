tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Fishy Business]"}]}
tag @s add FishyBusiness
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Fishy Business|textures/icons/advancement/fishy_business