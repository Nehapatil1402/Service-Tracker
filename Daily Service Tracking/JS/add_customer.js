document.getElementById('customerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;

    const customerData = {
        name: customerName,
        email: customerEmail,
        phone: customerPhone
    };

    fetch('http://localhost:3000/addCustomer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerData)
    })
        .then(response => response.json())
        .then(data => {
            alert('Customer added successfully!');
            window.location.href = 'dashboard.html';
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
