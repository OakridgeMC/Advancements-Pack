tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Acquire Hardware]"}]}
tag @s add AcquireHardware
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add MinecraftCount dummy
scoreboard players add @s MinecraftCount 1
scriptevent adv:toast_adv Acquire Hardware|textures/icons/advancement/acquire_hardware