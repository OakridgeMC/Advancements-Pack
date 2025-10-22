tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Spooky Scary Skeleton]"}]}
tag @s add SpookySkeleton
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add NetherCount dummy
scoreboard players add @s NetherCount 1
scriptevent adv:toast_adv Spooky Scary Skeleton|textures/icons/advancement/spooky_scary_skeleton