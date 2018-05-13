   var combat = {
     attack: function(attacker, defender){
            var roll = dice.throwD20() + attacker.toAttack;
            //console.log(attacker.name + " rolled " + roll +" to hit" );
            if(roll >= defender.AC){
                var damage = attacker.weapon.damage();
                console.log(attacker.name + " has hit " + defender.name + " for " + damage+ " damage");
                defender.takeHit(damage);
            } else {
                console.log(attacker.name + " missed");
            };

        },

        fight: function(player,enemy){
            this.attack(player,enemy);
            if(enemy.alive === true){
                this.attack(enemy,player);

            } else {
                var xpgained = 50 + (2 * enemy.HP);
                player.exp += xpgained;
                console.log("player earned "  + xpgained + " exp and has a total of " + player.exp + " exp")
            };
            if(player.alive === true && enemy.alive === true){
                console.log(player.name + " has " + player.HP + " HP left");
                console.log(enemy.name + " has " + enemy.HP + " HP left");
            }
            console.log("-----------------------------------------------------------------------")
        }
    };