var weapon = {
    longsword: {
        name: "longsword",
        type: "slashing",
        weight: 5,
        toAttack: 0,
        range: 1,
        damage: dice.throwD8() 

    },

    club: {
        name: "club",
        type: "crushing",
        weight:10,
        toAttack:0,
        range:1,
        damage: dice.throwD4() + 2
    },

    spear: {
        name: "spear",
        type:"piercing",
        weight:4,
        toAttack: 1,
        range: 2,
        damage: dice.throwD6()
    }
};
