tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[Subspace Bubble]"}]}
tag @s add SubspaceBubble
xp 100
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add NetherCount dummy
scoreboard players add @s NetherCount 1
scriptevent adv:toast_chal Subspace Bubble|textures/icons/advancement/subspace_bubble