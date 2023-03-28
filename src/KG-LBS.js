import React, { useState } from 'react';

function LBStoKG() {
  const [lbs, setLbs] = useState(0);
  const [kg, setKg] = useState(0);

  // Function to convert Lbs to Kg
  function convertToKg() {
    const kgValue = lbs * 0.45359237;
    setKg(kgValue.toFixed(2));
    console.log("Something happened")
  }

  return (
    <div>
      <h2>Lbs to Kg Converter</h2>
      <label>Enter weight in pounds:</label>
      <input type="number" value={lbs} onChange={(e) => setLbs(e.target.value)} />
      <button onClick={convertToKg}>Convert to Kg</button>
      <p>{`${lbs} lbs is equal to ${kg} kg`}</p>
    </div>
  );
}
export default LBStoKG;
