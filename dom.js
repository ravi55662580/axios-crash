var listItems = document.getElementsByClassName("list-group-item");

  // Check if there are at least three elements with the class 'list-group-item'
  if (listItems.length >= 3) {
    // Apply the green background color to the third element with the class 'list-group-item'
    listItems[2].style.backgroundColor = "green";
  }