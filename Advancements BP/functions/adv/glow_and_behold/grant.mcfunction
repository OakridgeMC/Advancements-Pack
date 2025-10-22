tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Glow and Behold!]"}]}
tag @s add GlowBehold
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Glow and Behold!|textures/icons/advancement/glow_and_behold