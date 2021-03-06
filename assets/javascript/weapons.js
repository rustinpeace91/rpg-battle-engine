import dice from "dice";

var armory = {
     // weapons list array, used to select random weapons
     list: [],
     
     // weapon objects and their properties
     weapon : {
        unarmed: {
            name: "unarmed",
            type: "punching",
            weight: 0,
            toAttack: 0,
            range: 1,
            // damage is calculated by a roll of the dice
            damage: function(){
                return parseInt(dice.throwD4() / 2)
            }
        },
        longsword: {
            name: "longsword",
            type: "slashing",
            weight: 5,
            toAttack: 0,
            range: 1,
            damage: function() {
            return dice.throwD8()
            }

        },

        club: {
            name: "club",
            type: "crushing",
            weight:10,
            toAttack:0,
            range:1,
            damage: function(){
            return dice.throwD4() + 2
            }
        },

        spear: {
            name: "spear",
            type:"piercing",
            weight:4,
            toAttack: 1,
            range: 2,
            damage: function(){
                return dice.throwD6()
            }  
        },

        battleaxe: {
            name:"battleaxe",
            type:"cushing",
            weight:5,
            toAttack:0,
            range:1,
            damage: function(){
                return (dice.multiroll("throwD4", 2));
            }
        }
    },

    // populates the weapon list 
    generateList: function(){
        for(var key in this.weapon){
           this.list.push(this.weapon[key].name);
        }
    }
};

// runs generate list right when the file is called (will be depreciated later for a cleaner solution )

module.exports = armory;