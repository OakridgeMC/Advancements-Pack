tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Voluntary Exile]"}]}
tag @s add VoluntaryExile
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Voluntary Exile|textures/icons/advancement/voluntary_exile