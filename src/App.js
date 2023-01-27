import {Users} from "./components/Users/Users";
import {UserForm} from "./components/UserForm/UserForm";
import {useEffect, useState} from "react";
import {jsonService} from "./services/jsonService";
import {Comments} from "./components/Comments/Comments";
import {CommentForm} from "./components/CommentForm/CommentForm";

const App = () => {
        const [comment, setComment] = useState([]);

        useEffect(()=>{
            jsonService.getAll().then(({data}) => setComment([...data]))
        }, [])
        // const [user, setUser] = useState([]);
        //
        // useEffect(() =>{
        //     jsonService.getAll().then(({data}) => setUser([...data]))
        // },[]);

    return (
        <div>
            {/*<UserForm setUser={setUser}/>*/}
            {/*<hr/>*/}
            {/*<Users user={user}/>*/}

            <CommentForm setComment={setComment}/>
            <hr/>
            <Comments comment={comment}/>
        </div>
    );
};

export {App};