tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[With Our Powers Combined!]"}]}
tag @s add PowersCombined
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_chal With Our Powers Combined|textures/icons/advancement/with_our_powers_combined