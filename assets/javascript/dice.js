
var dice = {
    throwD4: function () {
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 4) + 1;
        var final = Math.floor(improvedNum);
        return final;
    },

    throwD6: function() {
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 6) + 1;
        var final = Math.floor(improvedNum);
        return final;
    },

    throwD8: function(){
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 8) + 1;
        var final = Math.floor(improvedNum);
        return final;
    },

    throwD10: function() {
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 10) + 1;
        var final = Math.floor(improvedNum);
        return final;
    },

    throwD20: function() {
        var randomNumber = Math.random();
        var improvedNum = (randomNumber * 20) + 1;
        var final = Math.floor(improvedNum);
        return final;
    }
}

