import React, { useState, useEffect } from "react";
import "./App.css"; 

const Semaforo = () => {
  const [color, setColor] = useState("red");
  const [colores, setColores] = useState(["red", "yellow", "green"]);
  const [index, setIndex] = useState(0);

  const cambioColor = () => {
    const nextIndex = (index + 1) % colores.length;
    setColor(colores[nextIndex]);
    setIndex(nextIndex);
  };

  const addColor = () => {
    let colornuevo = colorAleatorio();
    if (!colores.includes(colornuevo)) {
      setColores([...colores, colornuevo]);
    }
  };
 const colorAleatorio = () => {
      var hexadecimal = '0123456789ABCDEF';
      var finalColor="";
      for (var i = 0; i < 6; i++) {
         finalColor += hexadecimal[Math.floor(Math.random() * hexadecimal.length)];
      }
      return finalColor;
   }
  return (
    <div className="text-center mt-5">
      <div className="semaforo d-flex justify-content-center mx-auto mt-4">
        {colores.map((col) => (
          <div key={col} className={`light ${col} ${color === col ? "glow" : "dark"}`}
          onClick={() => {
              setColor(col);
              setIndex(colores.indexOf(col));
            }}
            style={{backgroundColor: `#${col}`}}></div>
        ))}
      </div>
      <div className="mt-4">
        <button className="btn btn-primary me-2" onClick={cambioColor}>Alternar</button>
        <button className="btn btn-secondary" onClick={addColor}>Añadir color</button>
      </div>
    </div>
  );
};

export default Semaforo;