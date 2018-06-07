/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice__ = __webpack_require__(1);


var armory = {
     // weapons list array, used to select random weapons
     list: [],
     
     // weapon objects and their properties
     weapon : {
        unarmed: {
            name: "unarmed",
            type: "punching",
            weight: 0,
            toAttack: 0,
            range: 1,
            // damage is calculated by a roll of the dice
            damage: function(){
                return parseInt(__WEBPACK_IMPORTED_MODULE_0__dice__["a" /* default */].throwD4() / 2)
            }
        },
        longsword: {
            name: "longsword",
            type: "slashing",
            weight: 5,
            toAttack: 0,
            range: 1,
            damage: function() {
            return __WEBPACK_IMPORTED_MODULE_0__dice__["a" /* default */].throwD8()
            }

        },

        club: {
            name: "club",
            type: "crushing",
            weight:10,
            toAttack:0,
            range:1,
            damage: function(){
            return __WEBPACK_IMPORTED_MODULE_0__dice__["a" /* default */].throwD4() + 2
            }
        },

        spear: {
            name: "spear",
            type:"piercing",
            weight:4,
            toAttack: 1,
            range: 2,
            damage: function(){
                return __WEBPACK_IMPORTED_MODULE_0__dice__["a" /* default */].throwD6()
            }  
        },

        battleaxe: {
            name:"battleaxe",
            type:"cushing",
            weight:5,
            toAttack:0,
            range:1,
            damage: function(){
                return (__WEBPACK_IMPORTED_MODULE_0__dice__["a" /* default */].multiroll("throwD4", 2));
            }
        }
    },

    // populates the weapon list 
    generateList: function(){
        for(var key in this.weapon){
           this.list.push(this.weapon[key].name);
        }
    }
};

// runs generate list right when the file is called (will be depreciated later for a cleaner solution )

/* harmony default export */ __webpack_exports__["a"] = (armory);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The Dice object. handles all the dice rolling needed for the D20 System. Returns random rolls between numbers
// also has a multiroll method, for rolling multiple dice. 


var dice = {
    throwD4: function () {
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 4) + 1;
        var final = Math.floor(improvedNum);
        return final;
    },

    throwD6: function() {
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 6) + 1;
        var final = Math.floor(improvedNum);
        return final;
    },

    throwD8: function(){
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 8) + 1;
        var final = Math.floor(improvedNum);
        return final;
    },

    throwD12: function(){
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 12) + 1;
        var final = Math.floor(improvedNum);
        return final;
    },

    throwD10: function() {
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 10) + 1;
        var final = Math.floor(improvedNum);
        return final;
    },

    throwD20: function() {
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 20) + 1;
        var final = Math.floor(improvedNum);
        return final;
    },
    multiroll(dieType, quantity) {
        var total = 0;
        for(var i = 0; i < quantity; i++){
            total += dice[dieType]();
        }
        return total;
    }
};


/* harmony default export */ __webpack_exports__["a"] = (dice);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__weapons__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameloop__ = __webpack_require__(3);


__WEBPACK_IMPORTED_MODULE_0__weapons__["a" /* default */].generateList();
__WEBPACK_IMPORTED_MODULE_1__gameloop__["a" /* default */].init();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combat__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charactergen__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom__ = __webpack_require__(7);
// main game loop. plan on splitting much of this up into seperate modules or methods, but for now it just runs the combat loop when the user clicks the fight button



var game = {
    player: {},
    enemy: {},
    init: function(){
        // when the function runs, both a new player character and a new enemy spawn with random weapons and HP
        this.player = __WEBPACK_IMPORTED_MODULE_1__charactergen__["a" /* default */].generateHero("player", "random", 1);
        this.enemy = __WEBPACK_IMPORTED_MODULE_1__charactergen__["a" /* default */].generateEnemy("bad guy", 3);
        // REMOVE //
        console.log(this.player);
        console.log(this.enemy);
        //REMOVE//
        // hud and fightconsole are updated with the new character info 
        __WEBPACK_IMPORTED_MODULE_2__dom__["a" /* default */].updateConsole("Youve spawned with " + this.player.HP + " hit points armed with a " + this.player.weapon.name);
        __WEBPACK_IMPORTED_MODULE_2__dom__["a" /* default */].updateConsole("In front of you stands a " + this.enemy.name + " with a " + this.enemy.weapon.name)
        __WEBPACK_IMPORTED_MODULE_2__dom__["a" /* default */].updateHUD();

        // runs a combat loop every time the player clicks fight
        document.getElementById("fight").addEventListener("click", function(event){
            __WEBPACK_IMPORTED_MODULE_0__combat__["a" /* default */].fight(game.player,game.enemy);
            
            // need to consolidate this if statement with the if statement in the combat loop. It doesn't make sense to have two  if statements that check for the same thing in two files
            if(game.player.alive === false){
                __WEBPACK_IMPORTED_MODULE_2__dom__["a" /* default */].updateConsole(game.player.name + " has died")
                __WEBPACK_IMPORTED_MODULE_2__dom__["a" /* default */].updateConsole("-----------------------------------------------------------------------")
                game.init();
            }else if (game.enemy.alive === false){
                game.enemy = __WEBPACK_IMPORTED_MODULE_1__charactergen__["a" /* default */].generateEnemy("bad guy", 3)
                console.log(game.enemy);
                __WEBPACK_IMPORTED_MODULE_2__dom__["a" /* default */].updateConsole("a new bad guy appears");
                __WEBPACK_IMPORTED_MODULE_2__dom__["a" /* default */].updateConsole("In front of you stands a " + game.enemy.name + " with a " + game.enemy.weapon.name);
                __WEBPACK_IMPORTED_MODULE_2__dom__["a" /* default */].updateConsole("-----------------------------------------------------------------------")
            }
        
        });

    }

}

//game initializes
/* harmony default export */ __webpack_exports__["a"] = (game);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charactergen__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dice__ = __webpack_require__(1);
// combat loop: handles both a single attack and a single round of combat between two combatants




var combat = {
        attack: function(attacker, defender){
            var roll = __WEBPACK_IMPORTED_MODULE_2__dice__["a" /* default */].throwD20() + attacker.toAttack;
            // dom.updateConsole(attacker.name + " rolled " + roll +" to hit" );
            if(roll >= defender.AC){
                // damage is calculated via a wepaon method wihich rolls the dice.
                var damage = attacker.weapon.damage();
                __WEBPACK_IMPORTED_MODULE_1__dom__["a" /* default */].updateConsole(attacker.name + " has hit " + defender.name + " for " + damage+ " damage");
                // damage is dealt in the character object using the "takeHit" method
                defender.takeHit(damage);
            } else {
                __WEBPACK_IMPORTED_MODULE_1__dom__["a" /* default */].updateConsole(attacker.name + " missed");
            };

        },

        fight: function(player,enemy){
            // player attacks first (no initiative system yet)
            this.attack(player,enemy);
            if(enemy.alive === true){
            // if the enemy is still alive, enemy attacks player
                this.attack(enemy,player);
            } else {
            // if enemy is dead, player gains experience points
                __WEBPACK_IMPORTED_MODULE_1__dom__["a" /* default */].updateConsole(enemy.name + " has died")
                var xpgained = 50 + (2 * enemy.HP);
                player.exp += xpgained;
                __WEBPACK_IMPORTED_MODULE_1__dom__["a" /* default */].updateConsole("player earned "  + xpgained + " exp and has a total of " + player.exp + " exp")
            };
            // if both player and enemy are alive, their HP is displayed to the console.
            if(player.alive === true && enemy.alive === true){
                __WEBPACK_IMPORTED_MODULE_1__dom__["a" /* default */].updateConsole(player.name + " has " + player.HP + " HP left");
                __WEBPACK_IMPORTED_MODULE_1__dom__["a" /* default */].updateConsole(enemy.name + " has " + enemy.HP + " HP left");
            }
            __WEBPACK_IMPORTED_MODULE_1__dom__["a" /* default */].updateConsole("-----------------------------------------------------------------------");
            __WEBPACK_IMPORTED_MODULE_1__dom__["a" /* default */].updateHUD();
        },


    

    };

/* harmony default export */ __webpack_exports__["a"] = (combat);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weapons__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__armor__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dice__ = __webpack_require__(1);
//is used to generate the stats of characters
//should include a way of selecting weapons, stats, HP and Health
//differentiate betwen NPCs and Players


// differentiate between enemies of different difficulty levels

//NOTE: LOOK INTO ES6 CLASSES AND FUNCTIONS. IT WILL HELP A LOT WITH THIS





var charGen = {
    generateHero: function(name, profession, level){
        var selector = parseInt((Math.random() * __WEBPACK_IMPORTED_MODULE_1__weapons__["a" /* default */].list.length));
        var HP = 10;
        // creates hero object
        var hero = new __WEBPACK_IMPORTED_MODULE_0__character__["a" /* default */](name, true, 10);
        // PROFESSION (class) SYSTEM
        hero.profession = profession;
        switch(profession){
            case "swordsman" :
                hero.armor = __WEBPACK_IMPORTED_MODULE_2__armor__["a" /* default */].leather;
                hero.weapon = __WEBPACK_IMPORTED_MODULE_1__weapons__["a" /* default */].weapon.longsword;
                hero.HP += __WEBPACK_IMPORTED_MODULE_3__dice__["a" /* default */].throwD6();
                hero.restat();
                break;
            case "pikeman":
                hero.armor = __WEBPACK_IMPORTED_MODULE_2__armor__["a" /* default */].leather;
                hero.weapon = __WEBPACK_IMPORTED_MODULE_1__weapons__["a" /* default */].weapon.spear;
                console.log(hero.HP);
                hero.HP += __WEBPACK_IMPORTED_MODULE_3__dice__["a" /* default */].throwD6();
                hero.restat();
                break;
            case "brawler":
                hero.HP += __WEBPACK_IMPORTED_MODULE_3__dice__["a" /* default */].throwD10();
                break;
            case "peasent with a stick":
                hero.HP += __WEBPACK_IMPORTED_MODULE_3__dice__["a" /* default */].throwD6();
                hero.weapon = __WEBPACK_IMPORTED_MODULE_1__weapons__["a" /* default */].weapon.club;
                hero.restat();
                break;
            case "random":
                hero.HP +=__WEBPACK_IMPORTED_MODULE_3__dice__["a" /* default */].throwD6();
                hero.AC += hero.AC + __WEBPACK_IMPORTED_MODULE_3__dice__["a" /* default */].throwD4();
                hero.weapon = __WEBPACK_IMPORTED_MODULE_1__weapons__["a" /* default */].weapon[__WEBPACK_IMPORTED_MODULE_1__weapons__["a" /* default */].list[selector]];
                hero.restat();
            default:
                console.log("not valid profession");
                console.log(profession);
                break;

        }
        return hero;
        
    },

    // enemy creation method
    generateEnemy: function(name, difficulty){
        // randomly selects a weapon
        var selector = parseInt((Math.random() * __WEBPACK_IMPORTED_MODULE_1__weapons__["a" /* default */].list.length));
        // HP = d6 rolled the amount of times of the difficulty number
        var HP = __WEBPACK_IMPORTED_MODULE_3__dice__["a" /* default */].multiroll("throwD6", difficulty);
        var enemy = new __WEBPACK_IMPORTED_MODULE_0__character__["a" /* default */]("bad guy", false, HP);
        enemy.weapon = __WEBPACK_IMPORTED_MODULE_1__weapons__["a" /* default */].weapon[__WEBPACK_IMPORTED_MODULE_1__weapons__["a" /* default */].list[selector]];
        return enemy;

    }
};

/* harmony default export */ __webpack_exports__["a"] = (charGen);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__weapons__ = __webpack_require__(0);


var armor = {
    unarmored: {
        name: "unarmored",
        toAC: 0
    },
    leather: {
        name: "leather",
        toAC: 1
    },

    chain: {
        name: "chain",
        toAC: 2
    },

    plate: {
        name: "plate",
        toAC: 3,
    }
}

/* harmony default export */ __webpack_exports__["a"] = (armor);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combat__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameloop__ = __webpack_require__(3);
// instead of relying on JQuery for DOM updates I decided to write my own DOM update object. The reason for this is because this game is running these modules entirely on the front end.
// I thought it would be best to minimalize the amount of code required to run the app. Instead of a library of front end objects and methods, a single file with a few methods does the trick just fine
// Might rename this to DUO (document update object)



var dom = {
    updateConsole: function(input) {
        var node = document.createElement("P");
        var textNode = document.createTextNode(input);
        node.appendChild(textNode);
        console.log(node);
        document.getElementById("fight-console").appendChild(node);  
        document.getElementById("fight-console").scrollTo(0, document.getElementById("fight-console").scrollHeight);

    },
    updateHUD: function(){
        document.getElementById("player-name").innerHTML = __WEBPACK_IMPORTED_MODULE_1__gameloop__["a" /* default */].player.name;
        document.getElementById("player-profession").innerHTML = __WEBPACK_IMPORTED_MODULE_1__gameloop__["a" /* default */].player.profession;
        document.getElementById("player-defense-rating").innerHTML = __WEBPACK_IMPORTED_MODULE_1__gameloop__["a" /* default */].player.AC;
        document.getElementById("player-hp").innerHTML = __WEBPACK_IMPORTED_MODULE_1__gameloop__["a" /* default */].player.HP;
        document.getElementById("player-armor").innerHTML = __WEBPACK_IMPORTED_MODULE_1__gameloop__["a" /* default */].player.armor.name;
        document.getElementById("player-weapon").innerHTML = __WEBPACK_IMPORTED_MODULE_1__gameloop__["a" /* default */].player.weapon.name;
        document.getElementById("player-accuracy-bonus").innerHTML = __WEBPACK_IMPORTED_MODULE_1__gameloop__["a" /* default */].player.toAttack;
        document.getElementById("player-xp").innerHTML = __WEBPACK_IMPORTED_MODULE_1__gameloop__["a" /* default */].player.exp;
        document.getElementById("player-level").innerHTML = __WEBPACK_IMPORTED_MODULE_1__gameloop__["a" /* default */].player.level;

    }
}

/* harmony default export */ __webpack_exports__["a"] = (dom);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(2);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__armor__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weapons__ = __webpack_require__(0);
//the character constructor of the game.  Includes all the necessary stats that each character has



var CharSheet = function(name, main, HP){
    this.name = name;
    this.main = main;
    //DEFENSIVE INFORMATION//
    this.alive = true;
    this.baseAC = 10;
    this.HP = HP;
    this.armor = __WEBPACK_IMPORTED_MODULE_0__armor__["a" /* default */].unarmored;
    this.AC = this.baseAC + this.armor.toAC;
    //OFFENSIVE INFORMATION
    this.weapon = __WEBPACK_IMPORTED_MODULE_1__weapons__["a" /* default */].weapon.unarmed;
    this.toAttack = this.weapon.toAttack;
    //ABILITIES//
        //not developed yet;
        //this.stats = {};
    //LEVEL PROGRESSION//
    this.exp = 0;
    this.level = 1;
    this.lastlevel = 1;
    this.nextLevel = this.lastLevel + (this.level * 1000);

    //gained exp is added
    this.gainexp = function(gained){
        this.exp += gained;
        
    };
    //all stats that are derived from other stats are recalculated
    this.restat = function(gained){
        this.AC = this.baseAC +this.armor.toAC;
        this.toAttack = this.weapon.toAttack;
    }

    this.levelup = function(){
 
    };
    this.takeHit = function(damage){
        this.HP -= damage;
        if(this.HP <= 0){
            this.alive = false;
            console.log(this.name + " has died");
        }
    };


};



/* harmony default export */ __webpack_exports__["a"] = (CharSheet);


//--------------------------------TESTING--------------------------//










//name, main, AC, HP, stats, weapon, armor

/***/ })
/******/ ]);