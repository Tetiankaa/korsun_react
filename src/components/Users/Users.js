import {useEffect, useState} from 'react';

import {User} from "../User/User";
import {jsonService} from "../../services";

const Users = ({user}) => {

    return (
        <div>
            {user.map(value => <User key={value.id} value={value}/>)}
        </div>
    );
};

export {Users};