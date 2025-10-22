tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[The Parrots and the Bats]"}]}
tag @s add ParrotsBats
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv The Parrots and the Bats|textures/icons/advancement/the_parrots_and_the_bats