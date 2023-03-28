import React, { useState } from 'react';
const MilestoKM = () => {
    const [mile, setMile] = useState(0);

    function handleChange(e) {
        setMile(e.target.value);
    }
    function convert(mile) {
        return (mile * 1.609).toFixed(2);
    }

    return <div>
        <h2>Convert Miles to Km</h2>
        <input type="text" value={mile} onChange={handleChange} />
        <p> {mile} miles is {convert(mile)} km </p>
    </div>;
}

export default MilestoKM;