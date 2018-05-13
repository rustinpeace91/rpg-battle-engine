var Character = function(name, main, AC, HP, stats){
    this.name = name;
    this.main = main;
    this.AC = AC;
    this.HP = HP;
    this.stats = stats;
    this.toAttack = 0;
    this.weapon = weapon.unarmed;
    this.exp = 0;
    this.level = 1;
    this.lastlevel = 1;
    this.nextLevel = this.lastLevel + (this.level * 1000);
    this.alive = true;

    this.gainexp = function(gained){
        this.exp += gained;
        
    };

    this.levelup = function(){

    };

    this.takeHit = function(damage){
        this.HP -= damage;
        if(this.HP < 0){
            this.alive = false;
            console.log(this.name + " has died");
        }
    }

};


var NPC = function(name, AC, HP){
    this.name = name;
    this.AC = AC;
    this.HP = HP;
    this.toAttack = 0;
    this.weapon = weapon.unarmed;
    this.alive = true;
    this.takeHit = function(damage){
        this.HP -= damage;
        if(this.HP < 0){
            this.alive = false;
            console.log(this.name + " has died");
            
        }
    }


}



//--------------------------------TESTING--------------------------//










//name, main, AC, HP, stats, weapon, armor