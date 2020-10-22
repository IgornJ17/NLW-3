
//const popup = createPopUp();
/*Declaracao e definicao das variaveis e constantes que serao utilizadas nesse codigo fonte*/
//const stdOrphanage = "Lar Anália Franco";

const imageIcon = '/images/map-marker.svg';

const icon = createIcon();

/*Declaracao e definicao das funcoes e variaveis de referencia a funcoes que serao utilizadas no codigo*/
const createMap = function(lati=-22.9052436, long=-43.2485414, zoom=15){
    var result = L.map('mapid').setView([lati, long], zoom);
    return result;
}

const createPopUp = function(orphanage){
    var result = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${orphanage.name} <a href="/orphanage?id=${orphanage.id}"> <img src="./images/arrow-white.svg"> </a>`);
    
        return result;
}

function createIcon(){
    var result = L.icon({
        iconUrl: imageIcon,
        iconSize: [58,68],
        iconAnchor:[29, 68],
        popupAnchor: [170, 2]
    })

    return result;
}


function addMarker(orphanage, popup){ 
    L.marker([orphanage.lat, orphanage.lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}


/*Execucao do codigo main*/
const map = createMap();
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const orphanageSpans = document.querySelectorAll(".orphanages span")

orphanageSpans.forEach((data) => {
    var orphanageData = {
        id: data.dataset.id,
        name: data.dataset.name,
        lat: data.dataset.lat,
        lng: data.dataset.lng
    }
    var popup = createPopUp(orphanageData);   

    addMarker(orphanageData, popup);
})



   