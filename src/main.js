document.getElementById("btn").addEventListener("click", () => {
    fetch('http://localhost:8080/api/v1/info')
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("output").textContent = "Error: " + err;
        });
});