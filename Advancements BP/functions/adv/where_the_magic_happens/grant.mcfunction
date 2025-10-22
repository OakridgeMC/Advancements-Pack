tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[Where the Magic Happens]"}]}
tag @s add MagicHappens
xp 50
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_chal Where the Magic Happens|textures/icons/advancement/where_the_magic_happens
scoreboard objectives add MinecraftCount dummy
scoreboard players add @s MinecraftCount 0
scoreboard objectives add NetherCount dummy
scoreboard players add @s NetherCount 0
scoreboard objectives add EndCount dummy
scoreboard players add @s EndCount 0
scoreboard objectives add AdventureCount dummy
scoreboard players add @s AdventureCount 0
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 0