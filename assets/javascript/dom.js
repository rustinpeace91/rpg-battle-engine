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
        document.getElementById("player-xp").innerHTML = game.player.exp;
        document.getElementById("player-level").innerHTML = game.player.level;

    }
}