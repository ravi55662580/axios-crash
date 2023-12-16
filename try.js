

function addExpense() {
    // Get form inputs
    const amount = document.getElementById('expenseAmount').value;
    const description = document.getElementById('expenseDescription').value;
    const category = document.getElementById('expenseCategory').value;

    // Create new expense item
    const expenseItem = document.createElement('li');
    expenseItem.innerHTML = `<strong>${amount}</strong> - ${description} (${category}) <button onclick="editExpense(this)">Edit</button> <button onclick="deleteExpense(this)">Delete</button>`;

    // Append to expenses list
    document.getElementById('expensesList').appendChild(expenseItem);

    // Clear form inputs
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseDescription').value = '';
    document.getElementById('expenseCategory').value = '';
}

function editExpense(button) {
    const expenseItem = button.parentNode;

    if (expenseItem.querySelector('strong')) {
        const expenseText = expenseItem.textContent;

        // Extract amount, description, and category using regular expressions
        const regexResult = expenseText.match(/([\d.]+) - (.+) \((.+)\)/);

        if (regexResult) {
            const amount = parseFloat(regexResult[1]) || 0;
            const description = regexResult[2];
            const category = regexResult[3];

            // Set form inputs with the extracted values
            document.getElementById('expenseAmount').value = amount;
            document.getElementById('expenseDescription').value = description;
            document.getElementById('expenseCategory').value = category;

            // Remove the expense item from the list
            expenseItem.remove();
        }
    }
}




function deleteExpense(button) {
    // Remove the parent li element
    button.parentNode.remove();
}
