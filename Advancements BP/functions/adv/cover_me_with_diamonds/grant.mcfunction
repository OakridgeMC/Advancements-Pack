tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Cover Me with Diamonds]"}]}
tag @s add CoverDiamonds
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add MinecraftCount dummy
scoreboard players add @s MinecraftCount 1
scriptevent adv:toast_adv Cover Me with Diamonds|textures/icons/advancement/cover_me_with_diamonds