var ulElement = document.getElementById("items");

var newLiElement = document.createElement("li");

newLiElement.textContent = "New Item";

newLiElement.classList.add("editable-item");

ulElement.appendChild(newLiElement);

var editableItems = document.getElementsByClassName("editable-item");

  if (editableItems.length > 0) {
    editableItems[0].style.fontWeight = "bold";
    editableItems[0].style.color = "green";
  }

  var liElements = ulElement.getElementsByTagName("li");

  if (liElements.length > 0) {
    liElements[liElements.length - 1].style.fontWeight = "bold";
    liElements[liElements.length - 1].style.color = "blue";
  }