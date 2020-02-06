var itemList = document.querySelector("#my-List");
var addButton = document.getElementById("addItemButton");
var removeButton = document.getElementById("removeItemButton");
var updateButton = document.getElementById("updateItemButton");
var deactivateButton = document.getElementById("deactivateItemButton");
var headline = document.getElementById("my-Headline");
var listItems = document.getElementById("my-List").getElementsByTagName("li");
var newText = "Hello World!";

addButton.addEventListener("click", createNewItem);
removeButton.addEventListener("click", removeItem);
updateButton.addEventListener("click", updateItem);
deactivateButton.addEventListener("click", deactivateItem);
itemList.addEventListener("click", activateItem);
//for (i = 0; i < listItems.length; i++) {
// listItems[i].innerHTML = newText;
//  listItems[i].addEventListener("click", activateItem);
//}

function activateItem(e) {
  // alert("click detected");
  if (e.target.nodeName == "LI") {
    headline.value = e.target.innerHTML;
    for (i = 0; i < e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
}

function deactivateItem(e) {
  e = document.querySelector("li.active.inactive");
  if (e !== null) {
    e.classList.remove("inactive");
  } else {
    e = document.querySelector("li.active");
    e.classList.add("inactive");
  }
}

function createNewItem() {
  if (headline.value == "") {
    alert("please enter some text");
  } else {
    itemList.innerHTML += "<li>" + headline.value + "</li>";
  }
}
function removeItem(e) {
  e = document.querySelector("li.active");
  if (e !== null) {
    e.parentElement.removeChild(e);
  }
}

function updateItem() {
  document.querySelector("li.active").innerHTML = headline.value;
}
