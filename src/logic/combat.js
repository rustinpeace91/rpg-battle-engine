// combat loop: handles both a single attack and a single round of combat between two combatants
import charGen from "./charactergen";
import dom from "../interface/dom";
import dice from "./dice";

var combat = {
        attack: function(attacker, defender){
            var roll = dice.throwD20() + attacker.toAttack;
            // dom.updateConsole(attacker.name + " rolled " + roll +" to hit" );
            if(roll >= defender.AC){
                // damage is calculated via a wepaon method wihich rolls the dice.
                var damage = attacker.weapon.damage();
                dom.updateConsole(attacker.name + " has hit " + defender.name + " for " + damage+ " damage");
                // damage is dealt in the character object using the "takeHit" method
                defender.takeHit(damage);
            } else {
                dom.updateConsole(attacker.name + " missed");
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
                dom.updateConsole(enemy.name + " has died")
                var xpgained = 50 + (2 * enemy.HP);
                player.exp += xpgained;
                dom.updateConsole("player earned "  + xpgained + " exp and has a total of " + player.exp + " exp")
            };
            // if both player and enemy are alive, their HP is displayed to the console.
            if(player.alive === true && enemy.alive === true){
                dom.updateConsole(player.name + " has " + player.HP + " HP left");
                dom.updateConsole(enemy.name + " has " + enemy.HP + " HP left");
            }
            dom.updateConsole("-----------------------------------------------------------------------");
            dom.updateHUD();
        },


    

    };

export default combat;
