tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Stay Hydrated!]"}]}
tag @s add StayHydrated
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Stay Hydrated!|textures/icons/advancement/stay_hydrated