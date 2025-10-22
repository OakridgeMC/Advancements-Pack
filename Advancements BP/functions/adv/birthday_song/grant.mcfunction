tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Birthday Song]"}]}
tag @s add BirthdaySong
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Birthday Song|textures/icons/advancement/birthday_song