var itemList = document.querySelector("#my-List");
var addButton = document.getElementById("addItemButton");
var headline = document.getElementById("my-Headline");
var listItems = document.getElementById("my-List").getElementsByTagName("li");
var newText = "Hello World!";

addButton.addEventListener("click", createNewItem);

itemList.addEventListener("click", activateItem);
//for (i = 0; i < listItems.length; i++) {
// listItems[i].innerHTML = newText;
//  listItems[i].addEventListener("click", activateItem);
//}

function activateItem(e) {
  // alert("click detected");
  if (e.target.nodeName == "LI") {
    headline.innerHTML = e.target.innerHTML;
    for (i = 0; i < e.target.parentNode.children.length; i++) {
      // listItems[i].innerHTML = newText;
      e.target.parentNode.children[i].classList.remove("active");
    }

    e.target.classList.add("active");
  }
}

function createNewItem() {
  itemList.innerHTML += "<li>something new " + listItems.length + "</li>";
}
