// instead of relying on JQuery for DOM updates I decided to write my own DOM update object. The reason for this is because this game is running these modules entirely on the front end.
// I thought it would be best to minimalize the amount of code required to run the app. Instead of a library of front end objects and methods, a single file with a few methods does the trick just fine
// Might rename this to DUO (document update object)
import combat from "combat";
var dom = {
    updateConsole: function(input) {
        var node = document.createElement("P");
        var textNode = document.createTextNode(input);
        node.appendChild(textNode);
        console.log(node);
        document.getElementById("fight-console").appendChild(node);  
        document.getElementById("fight-console").scrollTo(0, document.getElementById("fight-console").scrollHeight);

    },
    updateHUD: function(){
        document.getElementById("player-name").innerHTML = game.player.name;
        document.getElementById("player-profession").innerHTML = game.player.profession;
        document.getElementById("player-defense-rating").innerHTML = game.player.AC;
        document.getElementById("player-hp").innerHTML = game.player.HP;
        document.getElementById("player-armor").innerHTML = game.player.armor.name;
        document.getElementById("player-weapon").innerHTML = game.player.weapon.name;
        document.getElementById("player-accuracy-bonus").innerHTML = game.player.toAttack;
        document.getElementById("player-xp").innerHTML = game.player.exp;
        document.getElementById("player-level").innerHTML = game.player.level;

    }
}

module.exports = dom;