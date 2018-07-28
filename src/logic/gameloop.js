// main game loop. plan on splitting much of this up into seperate modules or methods, but for now it just runs the combat loop when the user clicks the fight button
import combat from "./combat";
import charGen from "./charactergen";
import dom from "../interface/dom";
import classes from "./classes";
var game = {
    player: {},
    enemy: {},
    classDisplay: function(){
        classes.forEach(function(e){
            dom.classButton(e.name);
        });
        this.classSelect();
    },

    classSelect: function(characterClass){
        this.init(characterClass);
        // dom.classSelected();
    },

    init: function(characterClass){
        // when the function runs, both a new player character and a new enemy spawn with random weapons and HP

        this.player = charGen.generateHero("player", characterClass, 1);
        this.enemy = charGen.generateEnemy("bad guy", 3);
        // REMOVE //
        console.log(this.player);
        console.log(this.enemy);
        //REMOVE//
        // hud and fightconsole are updated with the new character info 
        dom.updateConsole("Youve spawned with " + this.player.HP + " hit points armed with a " + this.player.weapon.name);
        dom.updateConsole("In front of you stands a " + this.enemy.name + " with a " + this.enemy.weapon.name)
        dom.updateHUD();

        // runs a combat loop every time the player clicks fight
        document.getElementById("fight").addEventListener("click", function(event){
            combat.fight(game.player,game.enemy);
            
            // need to consolidate this if statement with the if statement in the combat loop. It doesn't make sense to have two  if statements that check for the same thing in two files
            if(game.player.alive === false){
                dom.updateConsole(game.player.name + " has died")
                dom.updateConsole("-----------------------------------------------------------------------")
                game.init();
            }else if (game.enemy.alive === false){
                game.enemy = charGen.generateEnemy("bad guy", 3)
                console.log(game.enemy);
                dom.updateConsole("a new bad guy appears");
                dom.updateConsole("In front of you stands a " + game.enemy.name + " with a " + game.enemy.weapon.name);
                dom.updateConsole("-----------------------------------------------------------------------")
            }
        
        });

    }

}

//game initializes
export default game;
