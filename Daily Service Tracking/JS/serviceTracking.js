const serviceData = {}; // Store records by service type and month

document.addEventListener('DOMContentLoaded', function () {
    populateMonthSelect();
    populateServiceSelect();
    updateTables();
});

document.getElementById('serviceForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const serviceType = document.getElementById('serviceType').value;
    const serviceDate = new Date(document.getElementById('serviceDate').value);
    const month = serviceDate.toLocaleString('default', { month: 'long' });
    const year = serviceDate.getFullYear();
    const monthYear = `${month} ${year}`;
    const day = serviceDate.getDate();
    const morningService = document.getElementById('morningService').checked;
    const eveningService = document.getElementById('eveningService').checked;

    // Initialize if not exists
    if (!serviceData[serviceType]) {
        serviceData[serviceType] = {};
    }
    if (!serviceData[serviceType][monthYear]) {
        serviceData[serviceType][monthYear] = {};
    }
    if (!serviceData[serviceType][monthYear][customerName]) {
        serviceData[serviceType][monthYear][customerName] = {};
    }

    // Add or update the record for the specified day
    serviceData[serviceType][monthYear][customerName][day] = {
        morningService,
        eveningService,
    };

    console.log('Updated Data:', serviceData);

    // Update the tables
    updateTables();
    document.getElementById('serviceForm').reset();
});

function populateMonthSelect() {
    const monthSelect = document.getElementById('monthSelect');
    const currentYear = new Date().getFullYear();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    months.forEach(month => {
        const option = document.createElement('option');
        option.value = `${month} ${currentYear}`;
        option.textContent = `${month} ${currentYear}`;
        monthSelect.appendChild(option);
    });

    // Set the default selected month to the current month
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    monthSelect.value = `${currentMonth} ${currentYear}`;
}

function populateServiceSelect() {
    const filterServiceType = document.getElementById('filterServiceType');
    const services = ["Tiffin", "Newspaper", "Milk"];

    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service;
        option.textContent = service;
        filterServiceType.appendChild(option);
    });
}

function updateTables() {
    const tablesContainer = document.getElementById('tablesContainer');
    tablesContainer.innerHTML = '';

    const selectedMonth = document.getElementById('monthSelect').value;
    const selectedServiceType = document.getElementById('filterServiceType').value;

    const recordsByMonth = serviceData[selectedServiceType] && serviceData[selectedServiceType][selectedMonth] ? serviceData[selectedServiceType][selectedMonth] : {};

    if (Object.keys(recordsByMonth).length > 0) {
        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered', 'table-striped', 'text-center');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Customer Name</th>
                    ${[...Array(31).keys()].map(i => `<th>${i + 1}</th>`).join('')}
                    <th>Morning Total</th>
                    <th>Evening Total</th>
                </tr>
            </thead>
            <tbody>
            ${Object.keys(recordsByMonth).map(customerName => {
            const customerRecord = recordsByMonth[customerName];
            const totalMorning = Object.values(customerRecord).filter(record => record.morningService).length;
            const totalEvening = Object.values(customerRecord).filter(record => record.eveningService).length;
            return `
                <tr>
                    <td>${customerName}</td>
                    ${[...Array(31).keys()].map(day => {
                const record = customerRecord[day + 1] || {};
                return `
                            <td>${record.morningService ? 'M' : ''}${record.eveningService ? 'E' : ''}</td>
                        `;
            }).join('')}
                    <td>${totalMorning}</td>
                    <td>${totalEvening}</td>
                </tr>
                `;
        }).join('')}
            </tbody>
        `;

        tablesContainer.appendChild(table);
    } else {
        tablesContainer.innerHTML = `<p>No records found for ${selectedServiceType} in ${selectedMonth}.</p>`;
    }
}
