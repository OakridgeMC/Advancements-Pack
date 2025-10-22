tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Hot Stuff]"}]}
tag @s add HotStuff
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add MinecraftCount dummy
scoreboard players add @s MinecraftCount 1
scriptevent adv:toast_adv Hot Stuff|textures/icons/advancement/hot_stuff