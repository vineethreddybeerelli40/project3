// REBOOK FUNCTION (GLOBAL)
function rebook() {
    alert("Redirecting to Book Ride...");
    window.location.href = "book.html";
}

// SEARCH FUNCTION
function searchRides() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".ride-card");
    let found = false;

    cards.forEach(function (card) {
        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("empty").style.display = found ? "none" : "block";
}