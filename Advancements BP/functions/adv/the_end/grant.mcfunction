tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[The End?]"}]}
tag @s add TheEnd
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add MinecraftCount dummy
scoreboard players add @s MinecraftCount 1
scriptevent adv:toast_adv The End?|textures/icons/advancement/the_end