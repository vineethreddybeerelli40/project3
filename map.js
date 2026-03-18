function initMap() {
    const location = { lat: 16.3067, lng: 80.4365 }; // Example (AP)

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });

    new google.maps.Marker({
        position: location,
        map: map
    });
}