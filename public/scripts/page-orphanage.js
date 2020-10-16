const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-9.8840342,-63.0363505,16], 14);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})


// create and add marker
L
.marker([-9.8840342,-63.0363505,16], { icon })
.addTo(map)
.bindPopup()

/** image gallery */

function selectImage(event){
  const button = event.currentTarget

  // remover todas as classes ativas
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach((button) => {
    button.classList.remove("active")
  })

  // selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // atualizar o container de imagem
  imageContainer.src = image.src

  // adicionar a classe .active para o botao clicado
  button.classList.add('active')
}