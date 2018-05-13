   var combat = {
     attack: function(attacker, defender){
            var roll = dice.throwD20() + attacker.toAttack;
            console.log(attacker.name + " rolled " + roll +" to hit" );
            if(roll >= defender.AC){
                var damage = attacker.weapon.damage;
                console.log(attacker.name + " has hit " + defender.name + " for " + damage+ " damage");
                defender.takeHit(damage);
            } else {
                console.log(attacker.name + " missed");
            };
            console.log(defender.name + " has " + defender.HP + " HP left");
        },

        fight: function(player,enemy){
            this.attack(player,enemy);
            if(enemy.alive === true){
                this.attack(enemy,player);
            } else {
                var xpgained = 50 + (2 * enemy.HP);
                player.exp += xpgained;
                console.log("player earned "  + xpgained + " exp")
                enemy = new Character("bad guy", false, 12, 13, {});
            };
        }
    };