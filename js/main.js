var newItem = document.getElementsByID("addItemButton");
var headline = document.getElementById("my-Headline");
var listItems = document.getElementById("my-List").getElementsByTagName("li");
var newText = "Hello World!";

for (i = 0; i < listItems.length; i++) {
  // listItems[i].innerHTML = newText;
  listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
  // alert("click detected");
  headline.innerHTML = this.innerHTML;
}
