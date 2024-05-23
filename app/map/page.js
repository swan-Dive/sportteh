import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";

const MapPage = () => {
  let defLatitude = 54.720144
  let defLongitude = 55.936239
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  } 
  function success(position) {
    defLatitude = position.coords.latitude;
    defLongitude = position.coords.longitude;
    console.log(defLatitude, defLongitude)
  }
  function error() {
    console.log("Unable to retrieve your location");
  }

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    // iconUrl: require("./icons/placeholder.png"),
    iconSize: [38, 38] // size of the icon
  });
  
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };
  
  const markers = [
    {
      geocode: [54.752744, 56.016022],
      popUp: "Республика Башкортостан, г. Уфа, ул. Ростовская, д. 16/2"
    },
    {
      geocode: [54.753451, 56.014575],
      popUp: "Республика Башкортостан, г. Уфа, ул. Ростовская, 18"
    },
    {
      geocode: [54.773756, 56.016884],
      popUp: "Республика Башкортостан, г. Уфа, ул. Рихарда Зорге, д. 75"
    },
    {
      geocode: [54.773029, 56.062932],
      popUp: "Республика Башкортостан, г. Уфа, Октябрьский р-н, ул. Маршала Жукова"
    },
    {
      geocode: [54.767887, 55.912104],
      popUp: "Республика Башкортостан, г. Уфа, проспект Дружбы народов, д. 47"
    }
  ];

  // const customIcon = new Icon({
  //   iconUrl: require("../assets/map-marker.svg"),
  //   iconSize: [38, 38]
  // })



  return (
    <div className="map-container">

      <MapContainer center={[defLatitude, defLongitude]} zoom={13} className="map">
        {/* OPEN STREEN MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* WATERCOLOR CUSTOM TILES */}
        {/* <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
        /> */}
        {/* GOOGLE MAPS TILES */}
        {/* <TileLayer
          attribution="Google Maps"
          // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
          // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
          url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        /> */}

      </MapContainer>
    </div>
    )
}


export default MapPage