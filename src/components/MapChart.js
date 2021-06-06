import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const onionSupply = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
];

const wheatSupply = [
  { markerOffset: 15, name: "New York", coordinates: [-74.006, 40.7128] },
  {
    markerOffset: 15,
    name: "Kansas",
    coordinates: [-100.5643313, 38.4816682],
  },
  {
    markerOffset: 15,
    name: "North Dakota",
    coordinates: [-102.545866, 47.4496447],
  },
];
const carrotSupply = [
  {
    markerOffset: 15,
    name: "Greece",
    coordinates: [19.9868999, 38.0688293],
  },
  {
    markerOffset: 15,
    name: "Latvia",
    coordinates: [22.3011493, 56.8630817],
  },
  {
    markerOffset: 15,
    name: "Austria",
    coordinates: [11.1021752, 47.6783023],
  },
];
const MapChart = (props) => {
  const [onion, setOnion] = React.useState(props.onion);
  const [carrot, setCarrot] = React.useState(props.wheat);
  const [wheat, setWheat] = React.useState(props.wheat);

  React.useEffect(() => {
    setOnion(props.onion);
    setCarrot(props.carrot);
    setWheat(props.wheat);
  }, [props.onion, props.carrot, props.wheat]);
  return (
    <ComposableMap projectionConfig={{ scale: 190 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {carrot &&
        carrotSupply.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#FF5533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      {wheat &&
        wheatSupply.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#008000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      {onion &&
        onionSupply.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#9900cc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
    </ComposableMap>
  );
};

export default MapChart;
