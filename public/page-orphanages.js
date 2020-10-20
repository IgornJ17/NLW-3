
/*Declaracao e definicao das variaveis e constantes que serao utilizadas nesse codigo fonte*/
const stdOrphanage = "Lar Anália Franco";

const imageIcon = '/images/map-marker.svg';

const icon = createIcon();

const popup = createPopUp();



/*Declaracao e definicao das funcoes e variaveis de referencia a funcoes que serao utilizadas no codigo*/
const createMap = function(lati=-22.9052436, long=-43.2485414, zoom=15){
    var result = L.map('mapid').setView([lati, long], zoom);
    return result;
}
const createMarker = (lati=-22.9052436, long=-43.2485414, msg=stdOrphanage) => {
   return (L.marker([lati, long], { icon })
    .addTo(map)
    .bindPopup(popup)
    )
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

function createPopUp(){
    var result = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${stdOrphanage} <a href="/orphanage?id=1" class="choose-orphanage"> <img src="
    ./images/arrow-white.svg"> </a>`);

    return result;
}



/*Execucao do codigo main*/
const map = createMap();
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
createMarker();



   