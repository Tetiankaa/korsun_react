import {useForm} from "react-hook-form";

import {jsonService} from "../../services/jsonService";

const CommentForm = ({setComment}) => {

    const {register, handleSubmit, reset, formState:{errors,isValid}} = useForm({mode:'all'});

    const submit = async (item) => {
    const {data} = await jsonService.create(item)
    setComment(prev => [...prev, data])
    reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')} />
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'comment'} {...register('body')}/>
            <button>New comment</button>
        </form>
    );
};

export {CommentForm};