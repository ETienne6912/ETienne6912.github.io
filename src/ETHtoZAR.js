import React, { useState } from 'react';


function ETHtoZAR() {
    const [eth, setETH] = useState(0);
    const [zar, setZar] = useState(0);

    // Function to convert Lbs to Kg
    function convertToETH() {
        const ethValue = zar * 31663;
        setZar(ethValue.toFixed(2));
        console.log("Something happened")
    }

    return (
        <div>
            <h2>ETH to ZAR Converter</h2>
            <label>Enter ETH amount:</label>
            <input type="number" value={eth} onChange={(e) => setETH(e.target.value)} />
            <button onClick={convertToETH}>Convert to ETH</button>
            <p>{`${eth} eth is equal to ${zar} zar`}</p>
        </div>
    );
}
export default ETHtoZAR;