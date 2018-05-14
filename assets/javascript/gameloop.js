var game = {
    player: {},
    enemy: {},
    init: function(){
        this.player = charGen.generateHero("player", "random", 1);
        this.enemy = charGen.generateEnemy("bad guy", 3);
        console.log(this.player);
        console.log(this.enemy);

        dom.updateConsole("Youve spawned with " + this.player.HP + " hit points armed with a " + this.player.weapon.name);
        dom.updateConsole("In front of you stands a " + this.enemy.name + " with a " + this.enemy.weapon.name)
        

        document.getElementById("fight").addEventListener("click", function(event){

            combat.fight(game.player,game.enemy);
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

game.init();