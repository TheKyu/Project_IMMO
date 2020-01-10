function initMap(listener) {
    // les coordonnées de Lievin
    let lievin = {
        lat : 50.4245,
        lng: 2.7738
    };

    let mericourt = {
        lat : 50.399721,
        lng: 2.864964
    };

    let noyelle = {
        lat : 50.395699,
        lng: 2.973319
    };

    let content = "<h5>Ville de Liévin</h5> <p>5 Rue Leon Blum</p><p>62100 LIÉVIN</p>";

    let content1 = "<h5>Ville de Méricourt</h5> <p>18 Rue Pasteur</p><p>62680 MÉRICOURT</p>";

    let content2 = "<h5>Ville de Noyelles-Godault</h5> <p>255 Boulevard Eugène Thomas</p><p>62950 NOYELLES-GODAULT</p>";

    let affichePlace = document.querySelector("#maps");
    let affichePlace1 = document.querySelector("#maps1");

    let map = new google.maps.Map( affichePlace, {
        zoom: 11,
        center: mericourt
    });
    let map1 = new google.maps.Map( affichePlace1, {
        zoom: 11,
        center: mericourt
    });

    let marker = new google.maps.Marker({
        position: lievin,
        map: map,

    });
    let marker1 = new google.maps.Marker({
        position: mericourt,
        map: map,
        icon: new google.maps.MarkerImage('http://maps.google.com/mapfiles/kml/shapes/schools.png'),
    });
    let marker2 = new google.maps.Marker({
        position: noyelle,
        map: map,

    });
    let marker3 = new google.maps.Marker({
        position: lievin,
        map: map1,
        icon: new google.maps.MarkerImage('http://maps.google.com/mapfiles/kml/shapes/schools.png'),
    });
    let marker4 = new google.maps.Marker({
        position: mericourt,
        map: map1,
        icon: new google.maps.MarkerImage('http://maps.google.com/mapfiles/kml/shapes/schools.png'),
    });
    let marker5 = new google.maps.Marker({
        position: noyelle,
        map: map1,
        icon: new google.maps.MarkerImage('http://maps.google.com/mapfiles/kml/shapes/schools.png'),
    });

    let infos = new google.maps.InfoWindow({
        content: content,
        position: lievin
    });

    let infos1 = new google.maps.InfoWindow({
        content: content1,
        position: mericourt,

    });

    let infos2 = new google.maps.InfoWindow({
        content: content2,
        position: noyelle
    });

    /* marker.addListener("click", function () {
         infos.open(map);
     });
     */
    marker.addListener("click", () => {
        infos.open(map);
    });
    marker1.addListener("click", () => {
        infos1.open(map);
    });
    marker2.addListener("click", () => {
        infos2.open(map);
    });

    marker3.addListener("click", () => {
        infos.open(map1);
    });
    marker4.addListener("click", () => {
        infos1.open(map1);
    });
    marker5.addListener("click", () => {
        infos2.open(map1);
    });

    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({'map': map1});
    let request = {
        origin: mericourt,
        destination:  noyelle,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        unitSystem: google.maps.DirectionsUnitSystem.METRIC
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setOptions({'suppressMarkers': true});
        }
    });

    let directionsService0 = new google.maps.DirectionsService();
    let directionsDisplay0 = new google.maps.DirectionsRenderer({'map': map});
    let request0 = {
        origin: lievin,
        destination:  noyelle,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        unitSystem: google.maps.DirectionsUnitSystem.METRIC
    };
    directionsService0.route(request0, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay0.setDirections(response);
            directionsDispla0.setOptions({'suppressMarkers': true});
        }
    });

}

initMap();