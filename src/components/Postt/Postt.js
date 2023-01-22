const Postt = (post) => {
    const {userId,body} = post;
    return (
        <div>
            <div>id:{userId}</div>
            <div>post:{body}</div>
        </div>
    );
};
export {Postt};