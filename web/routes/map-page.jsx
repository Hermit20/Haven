import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { getDatabase, ref, onValue } from "firebase/database";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 45.4215, // Ottawa's latitude
  lng: -75.6972, // Ottawa's longitude
};

const MapPage = () => {
  const [shelters, setShelters] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(12);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAU0Tmj57FrER1oPYdzRELSY56BGY1lHTY",
  });

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const handleMarkerClick = useCallback(function callback(marker) {
    setZoom(16);
    if (map) {
      map.panTo(marker.position);
    }
  }, [map]);

  const resetZoom = useCallback(function callback() {
    setZoom(12);
    if (map) {
      map.panTo(center);
    }
  }, [map]);

  // useEffect(() => {
  //   const db = getDatabase();
  //   const sheltersRef = ref(db, "shelters");
    
  //   try {
  //     const unsubscribe = onValue(sheltersRef, (snapshot) => {
  //       const data = snapshot.val();
  //       if (data) {
  //         const shelterList = Object.keys(data).map((key) => ({
  //           id: key,
  //           ...data[key],
  //         }));
  //         setShelters(shelterList);
  //       }
  //     });
      
  //     return () => {
  //       unsubscribe();
  //     };
  //   } catch (error) {
  //     console.error("Error fetching shelters:", error);
  //   }
  // }, []);

  useEffect(() => {
    if (isLoaded && window.google) {
      // For now, we'll just set a static marker while the shelter code is being developed
      setMarkers([
        {
          id: "static-marker",
          position: { lat: 45.431530964032504, lng: -75.68869989086714 },
          icon: {
            url: blue,
            scaledSize: new window.google.maps.Size(40, 40),
          }
        }
      ]);

      // When shelter data is ready, we can use this:
      // if (shelters.length > 0) {
      //   const markersFromShelters = shelters.map(shelter => ({
      //     id: shelter.id,
      //     position: { lat: shelter.latitude, lng: shelter.longitude },
      //     icon: {
      //       url: blue,
      //       scaledSize: new window.google.maps.Size(40, 40),
      //     }
      //   }));
      //   setMarkers(markersFromShelters);
      // }
    }
  }, [isLoaded, shelters]);

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={resetZoom}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            icon={marker.icon}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}

      </GoogleMap>
    );
  };

  if (loadError) {
    return <div className="map-error">Error loading maps. Please try again later.</div>;
  }

  return isLoaded ? renderMap() : <div className="map-loading">Loading Maps...</div>;
};

export default MapPage;
