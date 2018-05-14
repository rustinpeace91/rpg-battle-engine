//is used to generate the stats of characters
//should include a way of selecting weapons, stats, HP and Health
//differentiate betwen NPCs and Players
//differentiate between enemies of different difficulty levels


var charGen = {
    generateHero: function(name, profession, level){
        var selector = parseInt((Math.random() * armory.list.length));
        var HP = 10;
        var hero = new CharSheet(name, true, 10);
        hero.profession = profession;
        switch(profession){
            case "swordsman" :
                hero.armor = armor.leather;
                hero.weapon = armory.weapon.longsword;
                hero.HP += dice.throwD6();
                hero.equip();
                break;
            case "pikeman":
                hero.armor = armor.leather;
                hero.weapon = armory.weapon.spear;
                console.log(hero.HP);
                hero.HP += dice.throwD6();
                hero.equip();
                break;
            case "brawler":
                hero.HP += dice.throwD10();
                break;
            case "peasent with a stick":
                hero.HP += dice.throwD6();
                hero.weapon = armory.weapon.club;
                hero.equip();
                break;
            case "random":
                hero.HP +=dice.throwD6();
                hero.AC += hero.AC + dice.throwD4();
                hero.weapon = armory.weapon[armory.list[selector]];
                hero.equip();
            default:
                console.log("not valid profession");
                console.log(profession);
                break;

        }
        return hero;
        
    },
    generateEnemy: function(name, difficulty){
        var selector = parseInt((Math.random() * armory.list.length));
        var HP = dice.multiroll("throwD6", difficulty);
        var enemy = new CharSheet("bad guy", false, HP);
        enemy.weapon = armory.weapon[armory.list[selector]];
        return enemy;

    }
};

