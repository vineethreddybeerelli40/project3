// GOOGLE MAP
function initMap() {
    var location = { lat: 17.3850, lng: 78.4867 }; // Default (Hyderabad)

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });

    new google.maps.Marker({
        position: location,
        map: map
    });
}

// FARE CALCULATION
function calculateFare() {
    let type = document.getElementById("rideType").value;
    let distance = Math.floor(Math.random() * 10) + 1; // fake distance

    let rate = 0;

    if (type === "mini") rate = 10;
    else if (type === "sedan") rate = 15;
    else if (type === "suv") rate = 20;

    let fare = distance * rate;

    document.getElementById("fare").innerText =
        "Estimated Fare: ₹" + fare + " (" + distance + " km)";
}

// BOOK RIDE
function bookRide() {
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (pickup === "" || drop === "" || name === "" || phone === "") {
        alert("Please fill all details!");
        return;
    }

    document.getElementById("status").innerText =
        "✅ Ride Booked Successfully! Driver arriving soon...";
}