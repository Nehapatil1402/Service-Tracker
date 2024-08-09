window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const serviceName = params.get('serviceName');
    document.getElementById('serviceTitle').innerText = `Service: ${serviceName}`;

    document.getElementById('addCustomerBtn').addEventListener('click', function () {
        window.location.href = 'add_customer.html';
    });

    document.getElementById('serviceTrackingBtn').addEventListener('click', function () {
        window.location.href = 'service_tracking.html';
    });
};
