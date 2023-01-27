import {useEffect, useState} from 'react';
import {Comment} from "../Comment/Comment";
import {jsonService} from "../../services/jsonService";

const Comments = ({comment}) => {

    return (
        <div>
            {comment.map(value => <Comment key={value.id} value={value}/>)}
        </div>
    )
}

export {Comments};