tag @s remove Diamonds
scoreboard objectives add AdvancementCount dummy
scoreboard players remove @s[scores={AdvancementCount=1..}] AdvancementCount 1
scoreboard objectives add MinecraftCount dummy
scoreboard players remove @s[scores={MinecraftCount=1..}] MinecraftCount 1