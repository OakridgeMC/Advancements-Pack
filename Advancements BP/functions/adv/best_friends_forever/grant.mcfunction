tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Best Friends Forever]"}]}
tag @s add BestFriends
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv Best Friends Forever|textures/icons/advancement/best_friends_forever