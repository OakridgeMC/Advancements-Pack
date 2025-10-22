tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[Great View From Up Here]"}]}
tag @s add GreatView
xp 50
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add EndCount dummy
scoreboard players add @s EndCount 1
scriptevent adv:toast_chal Great View From Up Here|textures/icons/advancement/great_view_from_up_here