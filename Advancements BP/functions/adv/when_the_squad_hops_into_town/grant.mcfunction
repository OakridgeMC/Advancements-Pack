tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[When the Squad Hops into Town]"}]}
tag @s add SquadHops
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv When the Squad Hops into Town|textures/icons/advancement/when_the_squad_hops_into_town