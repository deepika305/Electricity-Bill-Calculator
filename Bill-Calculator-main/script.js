function appendNumber(number) {
    const unitsInput = document.getElementById('units');
    unitsInput.value += number;
}

function clearInput() {
    document.getElementById('units').value = '';
    document.getElementById('result').innerText = '';
}

function calculateBill() {
    const units = parseFloat(document.getElementById('units').value);
    let billAmount = 0;

    if (isNaN(units) || units < 0) {
        alert("Please enter a valid number of units");
        return;
    }

    if (units <= 500) {
        if (units <= 100) {
            billAmount = 0;
        } else if (units <= 200) {
            billAmount = (units - 100) * 2.25;
        } else if (units <= 400) {
            billAmount = (100 * 2.25) + ((units - 200) * 4.50);
        } else {
            billAmount = (100 * 2.25) + (200 * 4.50) + ((units - 400) * 6.00);
        }
    } else {
        if (units <= 600) {
            billAmount = (300 * 4.50) + ((units - 400) * 6.00);
        } else if (units <= 800) {
            billAmount = (300 * 4.50) + (100 * 6.00) + ((units - 500) * 8.00);
        } else if (units <= 1000) {
            billAmount = (300 * 4.50) + (100 * 6.00) + (100 * 8.00) + ((units - 600) * 9.00);
        } else {
            billAmount = (300 * 4.50) + (100 * 6.00) + (100 * 8.00) + (200 * 9.00) + ((units - 1000) * 11.00);
        }
    }

    document.getElementById('result').innerText = `Total Bill Amount: ₹${billAmount.toFixed(2)}`;
}
