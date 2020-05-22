
function initMap() {
    const searchElement = document.getElementById('data-city-search')
    console.log(searchElement)
    
    const searchBox = new google.maps.places.SearchBox(searchElement)
}


searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlayes()[0]
    if (place == null) return
    const latitude = place.geometry.location.lat()
    const longitude = place.geometry.location.lng()

    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    }).then(res => res.JSON()).then(data => {
        setWeatherData(data, place.formatted_address)
    })
}) 