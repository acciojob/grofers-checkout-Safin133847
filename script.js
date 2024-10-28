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

    // Display the total price in the #ans element
    const ansElement = document.getElementById('ans');
    ansElement.textContent = `Total Price: Rs ${totalPrice}`;
};

getSumBtn.addEventListener("click", getSum);