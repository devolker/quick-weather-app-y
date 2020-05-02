import React from "react";
import { useMaps } from "./../hooks/useMap";

const Map = () => {
  const mapData = useMaps("Delft");
  console.log(mapData);
  return <div>Map</div>;
};

export default Map;
