function bookRide() {
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;

    if (pickup === "" || drop === "") {
        alert("Enter pickup and drop locations");
        return;
    }

    alert("Ride booked from " + pickup + " to " + drop);
}