tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has completed the challenge §5[A Complete Catalogue]"}]}
tag @s add CompleteCatalogue
xp 50
playsound ui.challenge_complete @s
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_chal A Complete Catalogue|textures/icons/advancement/a_complete_catalogue