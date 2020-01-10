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

    let map = new google.maps.Map( affichePlace, {
        zoom: 11,
        center: mericourt
    });

    let marker = new google.maps.Marker({
        position: lievin,
        map: map
    });
    let marker1 = new google.maps.Marker({
        position: mericourt,
        map: map
    });
    let marker2 = new google.maps.Marker({
        position: noyelle,
        map: map
    });

    let infos = new google.maps.InfoWindow({
        content: content,
        position: lievin
    });

    let infos1 = new google.maps.InfoWindow({
        content: content1,
        position: mericourt
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

}

initMap()