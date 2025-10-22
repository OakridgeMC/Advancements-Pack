tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[Sniper Duel]"}]}
tag @s add SniperDuel
xp 50
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 1
scriptevent adv:toast_chal Sniper Duel|textures/icons/advancement/sniper_duel