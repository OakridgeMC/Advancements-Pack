tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[You've Got a Friend in Me]"}]}
tag @s add FriendMe
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add HusbandryCount dummy
scoreboard players add @s HusbandryCount 1
scriptevent adv:toast_adv You've Got a Friend in Me|textures/icons/advancement/youve_got_a_friend_in_me