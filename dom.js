// dom.js

document.addEventListener('DOMContentLoaded', function () {
    var deleteButtons = document.querySelectorAll('.delete');

    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var listItem = this.parentElement;
            listItem.parentNode.removeChild(listItem);
        });
    });

    var addForm = document.getElementById('addForm');
    addForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var itemName = document.getElementById('item').value;
        var itemDescription = document.getElementById('description').value;

        if (!itemName.trim()) {
            alert('Please enter an item name.');
            return;
        }

        var newListItem = document.createElement('li');
        newListItem.className = 'list-group-item';

        var itemNameElement = document.createElement('h5');
        itemNameElement.textContent = itemName;

        var itemDescriptionElement = document.createElement('p');
        itemDescriptionElement.textContent = itemDescription;

        newListItem.appendChild(itemNameElement);
        newListItem.appendChild(itemDescriptionElement);

        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm float-right delete';
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function () {
            var listItem = this.parentElement;
            listItem.parentNode.removeChild(listItem);
        });

        var editButton = document.createElement('button');
        editButton.className = 'btn btn-info btn-sm float-right ml-2 edit';
        editButton.textContent = 'Edit';
        
        newListItem.appendChild(deleteButton);
        newListItem.appendChild(editButton);

        document.getElementById('items').appendChild(newListItem);
        document.getElementById('item').value = '';
        document.getElementById('description').value = '';
    });

    var filterInput = document.getElementById('filter');
    filterInput.addEventListener('input', function () {
        var filterValue = filterInput.value.toLowerCase();
        var items = document.querySelectorAll('.list-group-item');

        items.forEach(function (item) {
            var itemText = item.textContent.toLowerCase();
            item.classList.toggle('d-none', !itemText.includes(filterValue));
        });
    });
});
