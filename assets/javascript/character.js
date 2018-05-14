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

    this.gainexp = function(gained){
        this.exp += gained;
        
    };

    this.equip = function(gained){
        this.AC = this.baseAC +this.armor.toAC;
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