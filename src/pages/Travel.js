import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { ReactBingmaps } from "react-bingmaps";
import {
  AnimatedParagraph,
  SCROLL_ANIMATION_DURATION,
  AnimatedList,
} from "./Home";
import ReactGLMap, { Marker, Popup } from "react-map-gl";
import { ReactComponent as MarkerIcon } from "../icons/marker.svg";

const DEV_MODE = true;

const RestaurantMap = () => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
      data-aos-once="true"
      id="restaurant-map"
    >
      {!DEV_MODE ? (
        <ReactBingmaps
          bingmapKey={process.env.REACT_APP_BING_MAPS_API}
          zoom={11}
          disableScrollWheelZoom={true}
          center={[52.52138088473879, 13.406859916716096]}
          infoboxesWithPushPins={pushPins}
        ></ReactBingmaps>
      ) : (
        <h1>MAP NOT SHOWN FOR DEVELOPMENT PURPOSES</h1>
      )}
    </div>
  );
};

const AttractionsMap = ({ halfWidth }) => {
  const [mapState, setMapState] = useState({
    // latitude: 52.5160511621844,
    // longitude: 13.400762036365524,
    latitude: 52.51864367760826,
    longitude: 13.376899031775872,
    zoom: 13,
    width: "100%",
    height: "100%",
  });

  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedSpot(null);
      }
    };
    window.addEventListener("keyup", listener);

    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, []);

  return (
    <div className="attractions-map-container">
      <ReactGLMap
        {...mapState}
        className="attractions-map info-paragraph"
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_API}
        onViewportChange={(newState) => {
          setMapState(newState);
        }}
        mapStyle="mapbox://styles/im-just-a-dev/ckpr6pit02jhi18qhjckjcdzg"
      >
        {attractions.map((each) => {
          return (
            <Marker
              key={`${each.name}`}
              latitude={each.latitude}
              longitude={each.longitude}
            >
              <MarkerIcon
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSpot({
                    name: each.name,
                    latitude: each.latitude,
                    longitude: each.longitude,
                  });
                }}
                className="mapbox-marker-inner"
              />
            </Marker>
          );
        })}
        {selectedSpot ? (
          <Popup
            latitude={selectedSpot.latitude}
            longitude={selectedSpot.longitude}
            onClose={() => {
              setSelectedSpot(null);
            }}
          >
            <div style={{ marginRight: "40px" }}>
              <h4 className="black-text">{selectedSpot.name}</h4>
              <p className="black-text">Schöner Ort zu besuchen</p>
            </div>
          </Popup>
        ) : null}
      </ReactGLMap>
    </div>
  );
};

export default function Travel() {
  return (
    <>
      <div className="page-header" id="travel-page-header">
        <Nav transparent={false} />
        <h1 className="page-heading">Reiseführer</h1>
      </div>
      <div id="travel-page" className="page-content">
        <div className="content-wrapper">
          <div className="info-block">
            <h1 className="info-heading">Sehenswürdigkeiten</h1>
            <div className="info-inner-container">
              <AttractionsMap />
              <AnimatedParagraph position="right">TO-DO</AnimatedParagraph>
            </div>
          </div>
          <section className="content-section food-content">
            <h1 className="info-heading">Essen und Restaurants</h1>
            <AnimatedParagraph fullWidth={true} position="left">
              Berlin ist eine schöne Stadt mit allen Art von leckeren Speisen in
              unterschiedlichen Restaurants.
              <b>
                <br />
                Heir sind enige der traditionellen Gerichte einen Versuch wert
                sind.
              </b>
            </AnimatedParagraph>

            <AnimatedList position="left" fullWidth={true}>
              <li>
                Schnitzel: ein Stück Fleisch, mit Mehl, Ei und Semmelbrösel
                bedeckt und dann in Öl frittiert
              </li>
              <li>Döner Kebab</li>
              <li>Apfelstrudel</li>
              <li>Bretzels</li>
              <li>Berliner Donuts: lochlose mit Marmelade gefüllte Donuts</li>
              <li>Kartoffelpuffer</li>
              <li>
                Senfeier: hartgekochte Eier und serviert mit Kartoffelpüree,
                alles überzogen mit einer cremigen Senfsauce.
              </li>
            </AnimatedList>
            <AnimatedParagraph fullWidth={true}>
              Wir auflisten einige die beste Restaurants auf Berlin:
            </AnimatedParagraph>
            <RestaurantMap />
          </section>
        </div>
      </div>
    </>
  );
}

const attractions = [
  {
    latitude: 52.51864367760826,
    longitude: 13.376899031775872,
    name: "Reichstagsgebäude",
  },
  {
    latitude: 52.516303958397565,
    longitude: 13.377494221977875,
    name: "Brandenburger Tor",
  },
];

const pushPins = [
  {
    location: [52.52555223870703, 13.407951269950583],
    option: {
      color: "red",
    },
    addHandler: "mouseover",
    infoboxOption: {
      title: "Shiori - Japanese Restaurant",
      description: "Legit Restaurant",
    },
    pushPinOption: {
      title: "Shiori - Japanese Restaurant",
      description: "Legit Restaurant",
    },
    infoboxAddHandler: {
      type: "click",
    },
    pushPinAddHandler: {
      type: "click",
    },
  },
  {
    location: [52.48765872521328, 13.390821460756163],
    option: {
      color: "red",
    },
    addHandler: "mouseover",
    infoboxOption: {
      title: "Peter Schlemihl - German Cuisine",
      description: "Legit Restaurant",
    },
    pushPinOption: {
      title: "Peter Schlemihl - German Cuisine",
      description: "Legit Restaurant",
    },
    infoboxAddHandler: {
      type: "click",
    },
    pushPinAddHandler: {
      type: "click",
    },
  },
  {
    location: [52.53650356848609, 13.379540398911166],
    option: {
      color: "red",
    },
    addHandler: "mouseover",
    infoboxOption: {
      title: "Hackethal's - German Cuisine",
      description: "Legit Restaurant",
    },
    pushPinOption: {
      title: "Hackethal's - German Cuisine",
      description: "Legit Restaurant",
    },
    infoboxAddHandler: {
      type: "click",
    },
    pushPinAddHandler: {
      type: "click",
    },
  },
  {
    location: [52.54053326762361, 13.412582341406043],
    option: {
      color: "red",
    },
    addHandler: "mouseover",
    infoboxOption: {
      title: "Rüyam Gemüse Kebab 2 - Kebab",
      description: "Legit Restaurant",
    },
    pushPinOption: {
      title: "Rüyam Gemüse Kebab 2 - Kebab",
      description: "Legit Restaurant",
    },
    infoboxAddHandler: {
      type: "click",
    },
    pushPinAddHandler: {
      type: "click",
    },
  },
  {
    location: [52.49818993717965, 13.430829275480743],
    option: {
      color: "red",
    },
    addHandler: "mouseover",
    infoboxOption: {
      title: "Best Friends Kreuzberg - Japanese & Fusion Cuisine",
      description: "Legit Restaurant",
    },
    pushPinOption: {
      title: "Best Friends Kreuzberg - Japanese & Fusion Cuisine",
      description: "Legit Restaurant",
    },
    infoboxAddHandler: {
      type: "click",
    },
    pushPinAddHandler: {
      type: "click",
    },
  },
];
