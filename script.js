const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all the price elements
    const priceElements = document.querySelectorAll('.price');

    // Calculate the total price
    let totalPrice = 0;
    priceElements.forEach(priceElement => {
        // Convert the price to a number and add it to the total
        totalPrice += Number(priceElement.textContent) || 0; // Fallback to 0 if parsing fails
    });

    // Check if a total row already exists and remove it if necessary
    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total
    const table = priceElements[0].closest('table'); // Get the closest table
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row'); // Add a class for future reference

    // Create a cell for the total price
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Make it span both columns
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;
    
    // Append the cell to the row
    totalRow.appendChild(totalCell);
    
    // Append the total row to the table
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);