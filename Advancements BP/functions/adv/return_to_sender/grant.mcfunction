tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[Return to Sender]"}]}
tag @s add ReturnSender
xp 50
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add NetherCount dummy
scoreboard players add @s NetherCount 1
scriptevent adv:toast_chal Return to Sender|textures/icons/advancement/return_to_sender