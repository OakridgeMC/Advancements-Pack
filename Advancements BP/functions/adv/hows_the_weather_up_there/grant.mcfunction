tellraw @a {"rawtext":[{"selector":"@s"},{"text":" has made the advancement §a[How's the Weather up There?]"}]}
tag @s add HowWeather
scoreboard objectives add AdvancementCount dummy
scoreboard players add @s AdvancementCount 1
scoreboard objectives add AchievementCount dummy
scoreboard players add @s AchievementCount 1
scriptevent adv:toast_adv How's the Weather up There?|textures/icons/advancement/hows_the_weather_up_there