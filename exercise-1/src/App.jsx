import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use a boolean state to manage the weather */
  const [change, setChange] = React.useState(false);

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setChange(true);
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setChange(false);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    if (change) {
      return "SUN";
    }
    else {
      return "RAIN";
    }
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    return change ? "sunny" : "rainy";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()} TIME !</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
