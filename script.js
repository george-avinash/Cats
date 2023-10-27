// Function to get cat facts from API
function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.card-text').textContent = data.fact;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the function to get the cat fact when the page loads
getCatFact();

// Set a timer to reload the cat fact every 5 seconds
function reloadCatFact() {
    setTimeout(function() {
        getCatFact();
        reloadCatFact();
    }, 5000);
}

reloadCatFact();
