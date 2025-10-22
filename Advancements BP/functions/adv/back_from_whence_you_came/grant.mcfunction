tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[Back from Whence You Came!]"}]}
tag @s add BackCame
xp 250
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_chal Back from Whence You Came!|textures/icons/advancement/back_from_whence_you_came