const Comment = ({value}) => {
    const {id,name, email, body} = value;

    return (
        <div>
            <div>id {id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>comment:{body}</div>
        </div>
    );
};

export {Comment};