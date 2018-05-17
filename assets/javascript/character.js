//the character constructor of the game.  Includes all the necessary stats that each character has

var CharSheet = function(name, main, HP){
    this.name = name;
    this.main = main;
    //DEFENSIVE INFORMATION//
    this.alive = true;
    this.baseAC = 10;
    this.HP = HP;
    this.armor = armor.unarmored;
    this.AC = this.baseAC + this.armor.toAC;
    //OFFENSIVE INFORMATION
    this.weapon = armory.weapon.unarmed;
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






//--------------------------------TESTING--------------------------//










//name, main, AC, HP, stats, weapon, armor