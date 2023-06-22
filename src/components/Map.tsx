"use client";
import { LatLngLiteral, Icon, circle, rectangle } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import './Map.css';
import SquareComponent from './SquareComponent';

interface TableData {
    coords1: LatLngLiteral,
    coords2: LatLngLiteral,
    color: string
}

interface RowData {
    idx: number,
    data: TableData
}
interface Props {
    data?: RowData[]
}

/* export function ChangeView(props:Props) {
    const map = useMap();
    circle([64.536634,16.779852], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    (geoData.lat && geoData.lng) && marker([64.536634,16.779852]).addTo(map);
    return null;
} */

const Map: React.FC<Props> = ({ data }) => {

    const [geoData, setGeoData] = useState<LatLngLiteral>({ lat: 43.13967757775403, lng: 13.06857663614698 });

    function getIcon(iconSize: any, image: string) {
        return new Icon({
            iconUrl: "/" + image,
            iconSize: iconSize,
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41],
        });
    }

    /*     const getStandardIcon = () => {
            return new Icon({
                iconUrl: require("leaflet/dist/images/marker-icon.png"),
                iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
                shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            });
        } */

    function renderSquares() {
        return data?.map(d => {
            return <SquareComponent key={d.idx} color={d.data.color} points={[
                [d.data.coords1.lat, d.data.coords1.lng], [d.data.coords2.lat, d.data.coords2.lng]
            ]} />
        })
    }

    return (
        <MapContainer center={geoData} zoom={12} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={geoData} icon={getIcon([40, 40], 'blue-marker.svg')} />
            {data && renderSquares()}
            {/* <SquareComponent color='yellow' points={[[43.141326309557776, 13.067131381502294], [43.13982833577647, 13.069875303289212]]} />
            <SquareComponent color='green' points={[[43.14320432422026, 13.071313839051475], [43.14572275039106, 13.06029024956689]]} /> */}
        </MapContainer>
    )
}

export default Map