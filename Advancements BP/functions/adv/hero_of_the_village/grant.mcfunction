tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[Hero of the Village]"}]}
tag @s add HeroVillage
xp 100
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_chal Hero of the Village|textures/icons/advancement/hero_of_the_village