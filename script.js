const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceElements = document.querySelectorAll('.price');

    let totalPrice = 0;
    priceElements.forEach(priceElement => {
        totalPrice += Number(priceElement.textContent);
    });

    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    const table = priceElements[0].closest('table');
    totalRow.classList.add('total-row'); 

    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; 
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;
    
    totalRow.appendChild(totalCell);
    
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);