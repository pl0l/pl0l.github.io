import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import React from 'react';


function App() {
  const [Height, SetHeight] = useState(2000);
  const [Width, SetWidth] = useState(2000);
  const [XPos, setXPos] = useState(0);
  const [YPos, setYPos] = useState(0);
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = document.getElementById("main-canvas")
    const ctx = canvas.getContext('2d');
    var XPosition = 0;
    var YPosition = 0;
    var canDraw = false;
    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      
      YPosition = mouseY
      XPosition = mouseX
      console.log(XPosition, " " , YPosition)
      console.log(mouseX, " " , mouseY)
    }

    function placePixel(event, color){
      console.log("hi")
      if (canDraw = true) {
              // Set the pixel color
              ctx.fillStyle = "red";
      
              ctx.fillRect(XPosition, YPosition, 1, 1);
      }

    }
    function handleMouseDown(event, color){
      canDraw = true;
      placePixel();
    }
    function handleMouseUp(event){
      canDraw = false;
    }

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousemove', placePixel);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousedown', handleMouseUp);
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', placePixel);
    };
  }, []);
  return (
    <html>
        <head>
          <title>Place Pixels!</title>
        </head>
        <body>
          <canvas className="can" id="main-canvas" height={Height} width={Width}></canvas>
        </body>
      </html>
  );
}

export default App;
