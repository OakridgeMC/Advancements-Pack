tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[This Boat Has Legs]"}]}
tag @s add BoatLegs
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add NetherCount dummy
scoreboard players add @s NetherCount 1
scriptevent adv:toast_adv This Boat Has Legs|textures/icons/advancement/this_boat_has_legs