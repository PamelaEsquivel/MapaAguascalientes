// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '© OpenStreetMap'
}).addTo(map);

//DESAFIO
// Definir iconos personalizados
var iconoAguascalientes = L.icon({
    iconUrl: 'https://www.pimags.gob.mx/assets/global/img/pim/ayuntamiento_icono-VE.png',  // Reemplaza con la URL de una imagen de la capital
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
});

var iconoPlazaPatria = L.icon({
    iconUrl: 'https://www.turimexico.com/wp-content/uploads/2015/11/plaza-de-la-patria.jpg',  // Reemplaza con la URL de una imagen de la Plaza de la Patria
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
});

var iconoMuseoMuerte = L.icon({
    iconUrl: 'https://ventaboletosmuseodelamuerte.uaa.mx/template/img/mumu_mini.png',  // Reemplaza con la URL de una imagen del Museo Nacional de la Muerte
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
});

var iconoJardinSanMarcos = L.icon({
    iconUrl: 'https://www.lugaresturisticosenmexico.com/wp-content/uploads/2020/07/Jardin-San-Marcos-Aguascalientes-6.jpg',  // Reemplaza con la URL de una imagen del Jardín de San Marcos
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
});

var iconoMuseoFerrocarrilero = L.icon({
    iconUrl: 'https://elsouvenir.com/wp-content/uploads/2020/07/Plaza-Tres-Centurias.-Foto-Viva-Aguascalientes-560x600.jpg',  // Reemplaza con la URL de una imagen del Museo Ferrocarrilero
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
});

var iconoCerroMuerto = L.icon({
    iconUrl: 'https://diarioaguascalientes.com/wp-content/uploads/2023/04/cerro-del-muerto-aguascalientes-ubicacion.jpeg',  // Reemplaza con la URL de una imagen del Cerro del Muerto
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
});

// Añadir un marcador en Aguascalientes capital con icono personalizado
var marker = L.marker([21.88234, -102.28259], {icon: iconoAguascalientes}).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador en la Plaza de la Patria con icono personalizado
var plazaPatria = L.marker([21.88187, -102.29495], {icon: iconoPlazaPatria}).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

// Marcador en el Museo Nacional de la Muerte con icono personalizado
var museoMuerte = L.marker([21.88417, -102.28878], {icon: iconoMuseoMuerte}).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");
//Opcional
// Marcador en el Jardín de San Marcos con icono personalizado
var jardinSanMarcos = L.marker([21.88158, -102.30065], {icon: iconoJardinSanMarcos}).addTo(map);
jardinSanMarcos.bindPopup("<b>Jardín de San Marcos</b><br>Escenario de la famosa Feria de San Marcos.");

// Marcador en el Museo Ferrocarrilero con icono personalizado
var museoFerrocarrilero = L.marker([21.88444, -102.29000], {icon: iconoMuseoFerrocarrilero}).addTo(map);
museoFerrocarrilero.bindPopup("<b>Museo Ferrocarrilero</b><br>Un homenaje a la historia del ferrocarril en Aguascalientes.");

// Marcador en el Cerro del Muerto con icono personalizado
var cerroMuerto = L.marker([21.88104, -102.34205], {icon: iconoCerroMuerto}).addTo(map);
cerroMuerto.bindPopup("<b>Cerro del Muerto</b><br>Famoso por sus vistas panorámicas y leyendas locales.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

// Dibujar un polígono en el Centro Histórico de Aguascalientes
var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

// Crear capas para los controles
var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};

var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico,
    "Jardín de San Marcos": jardinSanMarcos,
    "Museo Ferrocarrilero": museoFerrocarrilero,
    "Cerro del Muerto": cerroMuerto
};

// Añadir control de capas
L.control.layers(baseMaps, overlayMaps).addTo(map);

   