import React, { useState, useEffect } from "react";
import Highlight from "../components/Highlight";
import Nav from "../components/Nav";
import Berlin0 from "../images/berlin0.jpg";
import Battle from "../images/battle0.jpg";
import Communication from "../images/communication.jpg";
import Celebration from "../images/celebrate.jpg";
import Celebrities from "../images/celebrities.jpg";
import { AnimatedParagraph, Image } from "../components/Animated";
export const SCROLL_ANIMATION_DURATION = "700";

export default function Home() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const scrollCallback = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", scrollCallback);
  });

  return (
    <>
      <div className="page-header">
        <Nav transparent={scrollY <= 300} />
        <h1 className="page-heading" id="home-page-header">
          Berlin - the city in your dream.
        </h1>
      </div>

      <div id="home-page" className="page-content">
        <div className="content-wrapper">
          <div className="info-block">
            <h1 className="info-heading heading-center">
              Information und Fakten
            </h1>
            <div className="info-inner-container lots-of-text reversed-text-first">
              <Image image={Berlin0} position="left" />
              <AnimatedParagraph position="right">
                Berlin, die Hauptstadt Deutschlands, ist eine Stadt mit etwa
                <Highlight>3,567,000</Highlight> Einwohnern und einer Fläche von
                <Highlight>891,8 km²</Highlight>. Berlin ist die Größte Stadt
                von Deutschland, während neunmal größer als Paris ist, obwohl es
                nur
                <Highlight>1 / 5</Highlight> von die population von paris hat.
                Es gibt viel Monumente im Berlin, es gibt Museen historische, es
                gibt auch ikonische Gebäude. Die Stadt wird in
                <Highlight>12</Highlight>
                Bezirken geteilt, die Mitte, Friedrichshain-Kreuzberg, Pankow,
                Charlottenburg-Wilmerdorf, Spandau, Steglitz-Zehlendorf,
                Tempelhof-Schöneberg, Neukölln, Treptow-Köpenick,
                Marzahn-Hellersdorf, Lichtenberg, und Reinickendorf
                einschließen.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Die Geschichte Kurze</h1>
            <div className="info-inner-container-reversed reversed-text-first">
              <Image image={Battle} position="right" />
              <AnimatedParagraph position="left">
                Berlin begann zunächst im <Highlight>13 Jahrhundert</Highlight>
                und es steigt unaufhaltsam weiter. Nach
                <Highlight>1900</Highlight> Berlin ist eine Großstadt geworden
                aufgrund seiner Überlegenheit in Wissenschaft, Bildung, Militär
                und Kultur zu einer der wichtigsten Städte der Welt.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Dialekt von das Gebiet</h1>
            <div className="info-inner-container reversed-text-first">
              <Image image={Communication} position="left" />
              <AnimatedParagraph position="right">
                In Berlin es gibt einen speziellen Dialekt, bekannt als Berliner
                Dialekt (alias Berlinerisch). Es stammt ursprünglich aus ein
                Brandenburgisch Dialekt. Es hat etwa
                <Highlight>5 Millionen</Highlight> Sprecher obwohl die
                Bildungsschicht bemühte sich stets distanzierend um
                einwandfreies Hochdeutsch.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Prominente</h1>
            <div className="info-inner-container-reversed reversed-text-first">
              <Image image={Celebrities} position="right" />
              <AnimatedParagraph position="left">
                Es gibt viele bekannte berliner Superstars zum Beispiel,
                <Highlight>Kevyn Lettau</Highlight> ist eine Jazzsängerin
                geboren 1959, <Highlight>Caroline Fischer</Highlight> ist eine
                Pianistin geboren 1984, <Highlight>Götz George</Highlight> ist
                ein Akteur geboren 1938, und
                <Highlight>Carsten Keller</Highlight> ist ein ehemaliger
                {/* former */}Feldhockeyspieler{/* field hockey player */}, er
                ist auch ein Goldmedaillengewinner bei den Olympischen
                Sommerspielen 1972. Es gibt auch Mathematiker
                {/* mathematician */} wie <Highlight>Edmund Landau</Highlight>
                (1877–1938), und Bauingenieure wie
                <Highlight>Konrad Zuse</Highlight> (1910–1995). Schließlich gibt
                es toll Leiter wie <Highlight>Wilhelm II</Highlight>
                (1859–1941).
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Traditionelle Feste</h1>
            <div className="info-inner-container reversed-text-first">
              <Image image={Celebration} position="left" />
              <AnimatedParagraph position="right">TO-DO</AnimatedParagraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
