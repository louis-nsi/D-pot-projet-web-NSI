function loadMap() {
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
    center: new Microsoft.Maps.Location(48.8566, 2.3522),
    zoom: 2
    });

    // Load the CSV file and create pushpins for each city.
    var csvFile = 'points.csv';
    var request = new XMLHttpRequest();
    request.open('GET', csvFile, true);
    request.onload = function() {
    if (request.status === 200) {
        var csvData = request.responseText;
        var csvRows = csvData.split(/\r\n|\n/);
        var headers = csvRows[0].split(',');
        for (var i = 1; i < csvRows.length; i++) {
        var data = csvRows[i].split(',');
        var city = data[0];
        var lat = parseFloat(data[1]);
        var lon = parseFloat(data[2]);
        if (!isNaN(lat) && !isNaN(lon)) {
            var pinLocation = new Microsoft.Maps.Location(lat, lon);
            var pin = new Microsoft.Maps.Pushpin(pinLocation, {
            title: city,
            icon: 'img/logo/icon_maserati.png',
            });
            map.entities.push(pin);
        }
        }
    } else {
        console.log('Failed to load CSV file.');
    }
    };
    request.send(null);
}