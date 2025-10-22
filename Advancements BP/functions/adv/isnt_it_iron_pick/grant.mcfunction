tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Isn't it Iron Pick]"}]}
tag @s add IronPick
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add MinecraftCount dummy
scoreboard players add @s MinecraftCount 1
scriptevent adv:toast_adv Isn't it Iron Pick|textures/icons/advancement/isnt_it_iron_pick