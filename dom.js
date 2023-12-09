var listItems = document.getElementsByClassName("list-group-item");

  if (listItems.length >= 3) {
    listItems[2].style.backgroundColor = "green";
  }
  for (var i = 0; i < listItems.length; i++) {
    // Apply the bold font and colored font to each element
    listItems[i].style.fontWeight = "bold";
  }