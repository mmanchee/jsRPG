# _RPG_

#### _TDD and Class Exercise for Epicodus, September 2nd, 2020_

#### By _**Mike Manchee and Alma Frankenstein**_

## Description

An RPG (Role Playing Game) to enjoy. 

<!-- Brain storming for RPG
Choose your own adventure
Time travelers - two waring families. compete to change history to their benefit. 
Inherited time travel ability
User can to build a character with family (bonuses to stats), class (bonuses to stats and skills), stats,  skills, and name.
User can store items in inventory
User gains stat and skill points with exp through completing tasks.
Family - Montagues and Capulets
Classes - Strong Man, Thief, Strategist, Scientist, Survivalist
Skills - Lock pick, forestry, intuition, persuasion, hide, fight, power gain, science
Stats - Strength, Intellect, Charm, Wisdom, Power
class Game {char: {}, Exp: , previous: [] ,pages: []}
class Player {Name: , Family: ,class: ,skills: {}, stats {}}
class Skills {lockPick: , forestry: , intuition: , persuasion: , hide: , fight: , powerGain: , science: }
class Stats {Strength: , Intellect: , Charm: , Wisdom: , Power: }
class Pages {page: ,text: , items: {text: , item: }, next: } // as you grab items they are removed
$("#story").append
<div id="story">
  text Here
  

  text here 2  
  choice
</div>
-->
### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|  1. Create a constructor Game | Input | let game |
|  2. Create a constructor Player, Skills, Stats | Input | let player |
|  3. addSS function, adds Skills and Stats to player | Stats and Skills | player.skills |
|  4. addPlayer function, adds player to game | player | game.player |
|  5. Create a Pages Object | Input | let page |
|  6. Choice Arrays, how each choice has a can be accomplished | options | choiceArray |
|  7. Choice Function, determine which options are available | choiceArray | storyOptions |
|  8. GrabItem Function, grab item and repeat previous choice | grab choice | go back to previous |
|  9. Exp function, add exp to game | choice made | exp gained |
|  10. Levelup function, determines if exp is high enough to get more skill or stat points | exp is high enough | skill or stat point |
|  11. PowerLevel function, changes power level as game progresses | choice made | power changes |
|  12. character Page, buttons to add skills or stats | character | add |


## Setup/Installation Requirements

* Download files from GitHub repository
* Place all files in a single directory 
* Open index.html in browser of choice
* Have for with ...

## Known Bugs


## Support and contact details


## Technologies Used

* Tested with Jest
* Full WebPack install
* HTML
* CSS
  * Bootstrap
* JavaScript
  * JQuery

### Other Links
[GitHub](https://github.com/mmanchee)

### License

Copyright (c) 2020 **_{Mike Manchee and Alma Frankenstein}_**
Licensed under MIT