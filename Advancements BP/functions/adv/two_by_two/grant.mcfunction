tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[Two by Two]"}]}
tag @s add TwoTwo
xp 100
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_chal Two by Two|textures/icons/advancement/two_by_two