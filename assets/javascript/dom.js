var dom = {
    updateConsole: function(input) {
        var node = document.createElement("P");
        var textNode = document.createTextNode(input);
        node.appendChild(textNode);
        console.log(node);
        document.getElementById("fight-console").appendChild(node);  
        document.getElementById("fight-console").scrollTo(0, document.getElementById("fight-console").scrollHeight);


    }
}