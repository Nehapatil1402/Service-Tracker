document.getElementById('serviceForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const serviceName = document.getElementById('serviceName').value;
    // Redirect to next page with the service name as a query parameter
    window.location.href = `dashboard.html?serviceName=${encodeURIComponent(serviceName)}`;
});
