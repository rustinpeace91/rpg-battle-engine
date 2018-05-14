   var combat = {
        attack: function(attacker, defender){
            var roll = dice.throwD20() + attacker.toAttack;
            //dom.updateConsole(attacker.name + " rolled " + roll +" to hit" );
            if(roll >= defender.AC){
                var damage = attacker.weapon.damage();
                dom.updateConsole(attacker.name + " has hit " + defender.name + " for " + damage+ " damage");
                defender.takeHit(damage);
            } else {
                dom.updateConsole(attacker.name + " missed");
            };

        },

        fight: function(player,enemy){
            this.attack(player,enemy);
            if(enemy.alive === true){
                this.attack(enemy,player);

            } else {
                dom.updateConsole(enemy.name + " has died")
                var xpgained = 50 + (2 * enemy.HP);
                player.exp += xpgained;
                dom.updateConsole("player earned "  + xpgained + " exp and has a total of " + player.exp + " exp")
            };
            if(player.alive === true && enemy.alive === true){
                dom.updateConsole(player.name + " has " + player.HP + " HP left");
                dom.updateConsole(enemy.name + " has " + enemy.HP + " HP left");
            }
            dom.updateConsole("-----------------------------------------------------------------------")
        },


    

    };

