tag @s remove OhShiny
scoreboard objectives add AdvancementCount dummy
scoreboard players remove @s[scores={AdvancementCount=1..}] AdvancementCount 1
scoreboard objectives add NetherCount dummy
scoreboard players remove @s[scores={NetherCount=1..}] NetherCount 1