var secondLi = document.querySelector("#items li:nth-child(2)");

  // Check if the element is found
  if (secondLi) {
    // Apply the green background color
    secondLi.style.backgroundColor = "green";
  }
var thirdLi = document.querySelector("#items li:nth-child(3)");

  // Check if the element is found
  if (thirdLi) {
    // Make the third <li> element invisible
    thirdLi.style.display = "none";
  }
var listItems = document.querySelectorAll("#items li");

  // Check if there are at least two elements
  if (listItems.length >= 2) {
    // Apply the green font color to the second <li> element
    listItems[1].style.color = "green";
  }
var oddListItems = document.querySelectorAll("#items li:nth-child(odd)");

  // Loop through the selected odd elements and apply the green background color
  for (var i = 0; i < oddListItems.length; i++) {
    oddListItems[i].style.backgroundColor = "green";
  }