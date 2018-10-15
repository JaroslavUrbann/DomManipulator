var p = document.querySelectorAll("#katalog article > p");

for (var i = 0; i < 6; i++) {
    p[i].addEventListener("click", add);
}

function add()
{
    var newElement = document.createElement("option");
    var newText = document.createTextNode(this.textContent);
    newElement.appendChild(newText);
    document.getElementById("student").appendChild(newElement);
    document.getElementById("clearfix").removeChild(this);
}

var btn = document.getElementById("button");
btn.addEventListener("click", plus);
var soucet = document.getElementById("celkem").innerHTML;

function plus()
{
    var plus = document.getElementById("input").value;
    var jmeno = document.getElementById("student").value;

    var newElement = document.createElement("tr");
    var newELement2 = document.createElement("td");
    var newELement3 = document.createElement("td");

    var newTxt = document.createTextNode(jmeno);
    var newTxt2 = document.createTextNode(plus);

    newELement2.appendChild(newTxt);
    newELement3.appendChild(newTxt2);

    newElement.appendChild(newELement2);
    newElement.appendChild(newELement3);


    document.getElementById("tbody").appendChild(newElement);

    soucet = soucet + plus;
}