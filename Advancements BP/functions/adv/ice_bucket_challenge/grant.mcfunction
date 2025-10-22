tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Ice Bucket Challenge]"}]}
tag @s add IceBucket
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add MinecraftCount dummy
scoreboard players add @s MinecraftCount 1
scriptevent adv:toast_adv Ice Bucket Challenge|textures/icons/advancement/ice_bucket_challenge