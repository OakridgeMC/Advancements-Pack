tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[It Spreads]"}]}
tag @s add ItSpreads
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_chal It Spreads|textures/icons/advancement/it_spreads