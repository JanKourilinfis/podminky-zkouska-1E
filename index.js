alert("naleznete zde nápoje: čaj, cola, káva a voda")
var napoj=(prompt("zadejte váš vybraný nápoj"))
switch(napoj){
    case"čaj":
    alert("vybrali jste si čaj")
    break

    case"cola":
    alert("vybrali jste si kolu")
    break

    case"káva":
    alert("vybrali jste si kávu")
    break

    case"voda":
    alert("vybrali jste si vodu")
    break

    default:
        alert("tento nápoj zde nemáme")
}