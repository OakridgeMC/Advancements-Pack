tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[Two Birds, One Arrow]"}]}
tag @s add TwoBirds
xp 65
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_chal Two Birds, One Arrow|textures/icons/advancement/two_birds_one_arrow