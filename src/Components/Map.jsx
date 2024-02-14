import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const Map = () => {
    const position=[51.5117, 0.1240];
  return (
    <MapContainer
      center={{ lat: 51.5117, lng: 0.1240 }}
      zoom={10}
      scrollWheelZoom={true}
      className="lg:h-[280px] h-[250]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Higher Healthcare</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default Map;