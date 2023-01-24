import {useEffect, useState} from 'react';

import {Launch} from "../Launch/Launch"
import {axiosService} from "../../services";

const Launches = () => {

    const [launch, setLaunch] = useState([]);

    useEffect(()=>{
        axiosService.get().then(({data}) => setLaunch([...data]))
    }, []);

    return (
        <div>
            {launch.filter(value => value.launch_year !=='2020').map(value => <Launch key={value.flight_number} value = {value}/>)}

        </div>
    );
};

export {Launches};