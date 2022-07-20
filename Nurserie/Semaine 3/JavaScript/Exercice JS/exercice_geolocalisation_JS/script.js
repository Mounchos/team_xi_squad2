const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(position) {
    let crd = position.coords;
let latitude = 50.5
let longitude = 2.9

    document.write(`Votre position actuelle est de latitude : ${crd.latitude} et de longitude ${crd.longitude}, la précision est de ${crd.accuracy} métres`);


if (50.5 <= crd.latitude && crd.latitude <= 50.7 && 2.9 <= crd.longitude && crd.longitude <= 3.02) {
    document.write(`Vous êtes dans la métropole Lilloise`)}
    
    else {
        document.write(`Vous êtes hors de la Métropole Lilloise`);
    }
}
navigator.geolocation.getCurrentPosition(success)