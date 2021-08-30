var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.querySelectorAll("li.items");

function createList() {
    var li = document.createElement("li");
    li.classList.add("items");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function createAfterClick() {
    if (input.value.length > 0) {
        createList();
    }
}

function createAfterEnter(e) {
    if (input.value.length > 0 && e.key === "Enter") {
        createList();
    }
}

button.addEventListener("click", createAfterClick); //function 不用加()

input.addEventListener("keypress", createAfterEnter);

items.forEach(function (items) {
    items.addEventListener("click", function () {
        items.classList.toggle("done");
    });
}); //querySelectorAll returns a collection of elements, so you should iterate over it and add the event listener
