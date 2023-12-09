// Get the parent element
var mainDiv = document.getElementById("main");

// Create a new text node with "Hello"
var helloTextNode = document.createTextNode("Hello ");

// Insert the text node before "Item Lister"
mainDiv.firstElementChild.insertBefore(helloTextNode, mainDiv.firstElementChild.lastChild.previousElementSibling);

// Access the last child element
var lastChild = mainDiv.lastElementChild;

// Access the last child element using lastChild
var lastChildAlt = mainDiv.lastChild;

// Get the <ul> element with the ID 'items'
var itemsList = document.getElementById("items");

// Get the first <li> element
var firstListItem = itemsList.firstElementChild;

// Create a new text node with "Hello"
var helloTextNode2 = document.createTextNode("Hello ");

// Insert the text node before "Item 1"
itemsList.insertBefore(helloTextNode2, firstListItem);

// Access the next sibling of "Item 1"
var nextSibling = firstListItem.nextSibling;

// Access the next sibling element of "Item 1"
var nextElementSibling = firstListItem.nextElementSibling;

// Access the previous sibling of "Item 1"
var previousSibling = firstListItem.previousSibling;

// Access the previous sibling element of "Item 1"
var previousElementSibling = firstListItem.previousElementSibling;

// Create a new element
var newElement = document.createElement("li");

// Set an attribute on the new element
newElement.setAttribute("class", "list-group-item");

// Create a new text node for the new element
var newText = document.createTextNode("New Item");

// Append the text node to the new element
newElement.appendChild(newText);

// Append the new element to the existing list
itemsList.appendChild(newElement);