# DUNGEON.js: A browser based dungeon crawler 

## Live demo: https://rustinpeace91.github.io/rpg-battle-engine/
## Introduction
Right now this game is simply a turn based combat engine. The user is randomly supplied a weapon and a random number of hitpoints, and can fight multiple enemies who are also randomly generated. The player has health points, a defensive rating (based on armor) and does a certain amount of damage based on the weapon they are carrying. The game engine is heavily based on the D20 System. My main inspiration for this game was the [Pathfinder Rulebook:](https://www.d20pfsrd.com/wp-content/uploads/sites/12/2017/01/PFRPG_SRD.pdf)

All assets of the game were taken from [Junior General:](http://www.juniorgeneral.org/)

## Under the hood: 
each attack is determined by a roll of a virtual 20 sided die, and compared to a Defense Rating (or AC in Pathfinder terms),  if the roll is higher than the defense rating, then the attack is a hit. Certain skills and weapons can add a bonus to the attack roll, increasing accuracy. 

If the attack hits, then adamge is determined by a roll of the dice based on the weapon carried. 

If you defeat an enemy. You gain experience points. If you die, you respawn with a new enemy. 

here are the weapons I have so far:

### Weapons Table:
| Weapon Name  | Damage Roll |  Accuracy Bonus | 
| ------------- | ------------- | ------------- |
| Unarmed | (1D4) / 2  |  0 |  
| Longsword |  1D8 |  0 |   
| Club  | 1D4 + 2  |  0 |   
| Spear | 1D6  |  1 |  0 |
| Battle Axe | 2D4  |  0 |  



### Armor Table:

Armor is not currently available to the player, but it is written in the source code

| Armor Name | Defensive Bonus |
| ---------- | ------------- |
| Leather Armor | 1 |
| Chainmail Armor | 2 |
| Plate Armor |  3 |

### Future Plans:

I hope to eventually turn this into a full fledged dungeon crawling game.  It will be similar to a [RogueLike](https://en.wikipedia.org/wiki/Roguelike) in that upon character death you will have to respawn. I do not plan on making this a full stack app for now so saving your game will probably not be permitted. It will be a short and challenging dungeon crawling experience where you're goal will be to advance as far as possible without dying (which is inevitible). You will pick a profession at the beginning game, which determines your abilities and starting equipment Unlike traditional roguelikes I plan on implimenting a first person view, building upon the same HUD setup I have right now. There will be a HUD on the side, and a console on the bottom.

!(rpg-battle-engine)[https://i.imgur.com/PdqLrd7.png]
