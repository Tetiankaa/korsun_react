import {useState, useEffect} from 'react';

import {Postt} from "../Postt/Postt";
import {postService} from '../../services';

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getElementById(userId).then(({data})=>setPosts([...data]))
    }, [userId]);

    return (
        <div>
            {posts.map(post=> <Postt key = {post.id} post ={post}/>)}
        </div>
    );
};
export {Posts};