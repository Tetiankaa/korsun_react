import React from 'react';
import Posts from "../Posts/Posts";

const User = ({user, setUserId}) => {
    const {id, name} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=> setUserId(id)}>All posts</button>
        </div>
    );
};
export {User};