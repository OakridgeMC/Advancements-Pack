tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Remote Getaway]"}]}
tag @s add RemoteGateway
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add EndCount dummy
scoreboard players add @s EndCount 1
scriptevent adv:toast_adv Remote Getaway|textures/icons/advancement/remote_gateway