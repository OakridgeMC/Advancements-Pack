tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Careful Restoration]"}]}
tag @s add CarefulRestoration
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Careful Restoration|textures/icons/advancement/careful_restoration