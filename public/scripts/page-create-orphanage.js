// create map
const map = L.map('mapid').setView([-9.8840342,-63.0363505,16], 14);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', )
.addTo(map);


// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

let marker;

// create and add marker
map.on('click', (event) => {
  const { lat, lng } = event.latlng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  console.log(lat, lng);
  // remove icon 
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon })
  .addTo(map);
})

// add fild photos
function addPhotoField(){
  // pegar container de fotos #images
  const container = document.querySelector('#images')
  // pegar container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
  // realiazr o clone da utilma imagem adicionada.
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  // verificar se o campo esta vazio 
  const input = newFieldContainer.children[0]

  if(input.value == ""){
    return
  }
  // limpar o campo antes de adicionar ao container de imagens
  input.value = "";
  // adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer)
}

function deleteField(event){
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length <= 1){
    // limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  // deletar o campo
  span.parentNode.remove()
}

// seleção  do sim e não
function toggleSelect(event){
  
  // retirar a class .active dos botões
  document.querySelectorAll('.button-select button')
  .forEach((button) => button.classList.remove('active'))
  
  // pegar o botão clicado
  const button = event.currentTarget
  button.classList.add('active')

  // atualizar o meu input com valor seleconado
  const input = document.querySelector('[name="open_on_weekends"]')

  // verificar se é sim ou não 
  input.value = button.dataSet.value  
}