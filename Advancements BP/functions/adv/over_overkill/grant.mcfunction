tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[Over-Overkill]"}]}
tag @s add OverOverkill
xp 50
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_chal Over-Overkill|textures/icons/advancement/over_overkill