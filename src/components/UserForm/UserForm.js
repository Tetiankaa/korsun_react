import {useForm} from "react-hook-form";
import {userForm} from "./userForm.css";
import {jsonService} from "../../services/jsonService";

const UserForm = ({setUser}) => {

   const {register, handleSubmit, reset, formState:{errors, isValid}}  = useForm({mode: 'all'});

   const submit = async (item) => {
       const {data} = await jsonService.create(item)
       setUser(prev=>[...prev, data])
       reset()
   };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>Save</button>
        </form>
    );
};

export {UserForm};