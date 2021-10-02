var _ = require("lodash");
const array = [1, 2, 3, 4, 5];
console.log("answer:", _.without(array, 3));

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.querySelectorAll("li.items");

function createList() {
    var div = document.createElement("div");
    div.classList.add("task");
    var li = document.createElement("li");
    li.classList.add("items");
    var delbtn = document.createElement("button");
    delbtn.classList.add("delbtn");
    li.appendChild(document.createTextNode(input.value));
    delbtn.appendChild(document.createTextNode("Del"));
    ul.appendChild(div);
    div.append(delbtn, li);
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

function doneTask(e) {
    if (e.target.tagName.toLowerCase() === "li") {
        e.target.classList.toggle("done");
    }
} //tagName總是回傳標籤的大寫英文 因此在這邊加入一個method讓他回傳值變回小寫

function delTask(e) {
    if (e.target.className === "delbtn") {
        e.target.parentElement.remove();
    }
}

function anyClick(e) {
    doneTask(e);
    delTask(e);
}

ul.addEventListener("click", anyClick);

button.addEventListener("click", createAfterClick); //function 不用加()

input.addEventListener("keypress", createAfterEnter);

// items.forEach(function (items) {
//     items.addEventListener("click", function () {
//         items.classList.toggle("done");
//     });
// }); //querySelectorAll returns a collection of elements, so you should iterate over it and add the event listener
