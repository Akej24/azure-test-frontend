window.BACKEND_URL = (function() {
    const url = '${BACKEND_URL}';
    return url.includes('${') ? 'http://localhost:8080/api/v1/info' : url;
})();

document.getElementById("btn").addEventListener("click", () => {
    fetch(window.BACKEND_URL)
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("output").textContent = "Error: " + err;
        });
});