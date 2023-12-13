

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

        var newItemValue = document.getElementById('item').value;
        var newListItem = document.createElement('li');
        newListItem.className = 'list-group-item';
        newListItem.textContent = newItemValue;

        // Create a delete button
        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm float-right delete';
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function () {
            var listItem = this.parentElement;
            listItem.parentNode.removeChild(listItem);
        });

        // Create an edit button (no functionality added)
        var editButton = document.createElement('button');
        editButton.className = 'btn btn-info btn-sm float-right ml-2 edit';
        editButton.textContent = 'Edit';

        // Append delete and edit buttons to the new <li> element
        newListItem.appendChild(deleteButton);
        newListItem.appendChild(editButton);

        document.getElementById('items').appendChild(newListItem);
        document.getElementById('item').value = '';
    });
});
