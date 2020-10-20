
/*Declaracao e definicao das variaveis e constantes que serao utilizadas nesse codigo fonte*/
const imageIcon = '.././images/map-marker.svg';

const selectElement = document.querySelector.bind(document); //Criando uma variavel de referencia para o metodo querySelector com o bind()

const icon = createIcon();

const optionsMap = {
    dragging: true,
    touchZoom: true,
    doubleClickZoom: true,
    scrollWheelZoom: true,
    zoomControl: true
}

/*Declaracao e definicao das funcoes e variaveis de referencia a funcoes que serao utilizadas no codigo*/
const createMap = function(lati=-22.9052436, long=-43.2485414, zoom=12){
    var result = L.map('mapid', optionsMap).setView([lati, long], zoom);
    return result;
}
function createMarker (lati=-22.9052436, long=-43.2485414){
   return (L.marker([lati, long], { icon }).addTo(map))
}

function createIcon(){
    var result = L.icon({
        iconUrl: imageIcon,
        iconSize: [58,68],
        iconAnchor:[29, 68]
    })

    return result;
}

function removeMark(marker){
    map.removeLayer(marker)
    return undefined
}

function addPhotoField(){
    var divPicture = selectElement("#picture");
    var fieldsPicture = document.querySelectorAll(".new-uploads");

    var newFieldPicture = fieldsPicture[fieldsPicture.length - 1].cloneNode(true)

    var input = newFieldPicture.children[0]
    if(input.value == ""){
        return;
    }else{
        input.value = "";
        divPicture.appendChild(newFieldPicture);
    }
}

function removeField(event){
    var elementSpan = event.currentTarget;
    var nodeFather = elementSpan.parentNode;
    var fieldsPicture = document.querySelectorAll(".new-uploads");

    if(fieldsPicture.length < 2) {
        elementSpan.parentNode.children[0].value = "";
        return;
    }

    nodeFather.remove()
}

function selectWeekends(event){
    
    let nodeSelect = event.currentTarget;

    document.querySelectorAll(".input-select button").forEach(function(button){
        button.classList.remove("active")
    })

    nodeSelect.classList.add("active");
        
    let openOnWeekendsInput = document.querySelector('[name="on-weekends"]')

    openOnWeekendsInput.value = nodeSelect.dataset.value;
    console.log(openOnWeekendsInput.value)

    
    
    
    
    
    
    
    
    
    
    
    /*var elementSelected = event.currentTarget;
    var nodeFather = elementSelected.parentNode;
    var getHiddenClass = nodeFather.parentNode;

    let switchForYes = function(){
        nodeFather.children[1].classList.remove("active")
        nodeFather.children[0].classList.add("active")
        getHiddenClass.children[1].value = 1;
    }

    let switchForNo = function(){
        nodeFather.children[0].classList.remove("active")
        nodeFather.children[1].classList.add("active")
        getHiddenClass.children[1].value = 0;
    }

    if(elementSelected.classList.contains("active")){
        return;
    }else{
        (nodeFather.children[0].classList.contains("active")) ? switchForNo() : switchForYes();
    }
    */
}





/*Execucao do codigo main*/

let marker

const map = createMap();
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//Create and add marker in form
map.on('click', (event) => {
    var lat = event.latlng.lat;
    var lng = event.latlng.lng;

    selectElement('[name=lat]').value = lat; //Selecionando os inputs hidden para que possa ser enviado os dados
    //de marcacao no formulario
    selectElement('[name=lng]').value = lng;
    
    marker == undefined ? marker = createMarker(lat, lng) : marker = removeMark(marker);
})

//upload photos



   

   