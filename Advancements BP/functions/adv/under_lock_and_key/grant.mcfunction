tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Under Lock and Key]"}]}
tag @s add LockKey
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_adv Under Lock and Key|textures/icons/advancement/under_lock_and_key