

function bigger() {
    var text = document.getElementById("text");
    text.style.fontSize = "4em"
}

function fancify() {
    var text = document.getElementById("text");
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
}

function boring() {
    var text = document.getElementById("text");
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
}

function moo() {
    var text = document.getElementById("text");
    text.style.textTransform = "uppercase";
    var parts = text.value.split(".");
    text.value = parts.join("-MOO.");
}