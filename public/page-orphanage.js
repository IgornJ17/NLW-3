/*Declaracao e definicao das variaveis e constantes que serao utilizadas nesse codigo fonte*/

const latitude = document.querySelector('span[data-lat]').dataset.lat;
const longitude = document.querySelector('span[data-lat]').dataset.lng;
const imageIcon = '.././images/map-marker.svg';
const icon = createIcon();
const optionsMap = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}



/*Declaracao e definicao das funcoes e variaveis de referencia a funcoes que serao utilizadas no codigo*/
const createMap = function(lati=-22.9052436, long=-43.2485414, zoom=15){
    var result = L.map('mapid', optionsMap).setView([lati, long], zoom);
    return result;
}
const createMarker = (lati=-22.9052436, long=-43.2485414) => {
   return (L.marker([lati, long], { icon })
    .addTo(map)
    )
}

const selectImage = function(event){
    const button = event.currentTarget;

    const buttons = document.querySelectorAll(".images button"); //retorna um array de buttons 
    for(var i = 0; i < 6; i++){
        if(buttons[i].classList.contains("active")){
            buttons[i].classList.remove("active");
        }
    }

    const image = button.children[0];
    const imageContainer =  document.querySelector(".orphanage-details > img");
    
    imageContainer.src = image.src; //Atualizo o src da imagem principal do container pleo src da imagem clicada;

    button.classList.add("active")

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


/*Execucao do codigo main*/
const map = createMap(latitude, longitude);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
createMarker(latitude, longitude);



   