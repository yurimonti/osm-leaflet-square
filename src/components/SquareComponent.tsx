import { LatLngBoundsExpression, rectangle } from 'leaflet';
import React from 'react';
import { useMap } from 'react-leaflet';

interface Props {
    color: string,
    points: LatLngBoundsExpression
  }

const SquareComponent: React.FC<Props> = ({ color, points }) => {

    function AddRectangle() {
        const map = useMap();
        /* circle([geoData.lat, geoData.lng], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map); */
        rectangle(points,{
            color:color,
            weight:2
        }).addTo(map);
        return null;
    }
  return (
    <AddRectangle />
  )
}

export default SquareComponent