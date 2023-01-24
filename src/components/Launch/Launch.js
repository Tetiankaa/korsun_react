import React from 'react';

const Launch = ({value}) => {
    const {flight_number,launch_year, links} = value;
    
    return (
        <div>
            <div>flight_number - {flight_number}</div>
            <div>launch_year - {launch_year}</div>
            <img src={links.mission_patch_small} alt={launch_year}/>
        </div>
    );
};

export {Launch};