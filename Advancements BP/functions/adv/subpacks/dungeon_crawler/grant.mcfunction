tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[Dungeon Crawler]"}]}
tag @s add DungeonCrawler
scoreboard objectives add DungeonsCount dummy
scoreboard players add @s DungeonsCount 1
scriptevent adv:toast_adv Dungeon Crawler|textures/icons/advancement/subpacks/dungeon_crawler