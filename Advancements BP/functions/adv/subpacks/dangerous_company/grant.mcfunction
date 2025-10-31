tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Dangerous Company]"}]}
tag @s add DangerousCompany
scoreboard objectives add DragonsCount dummy
scoreboard players add @s DragonsCount 1
scriptevent adv:toast_adv Dangerous Company|textures/icons/advancement/subpacks/dangerous_company