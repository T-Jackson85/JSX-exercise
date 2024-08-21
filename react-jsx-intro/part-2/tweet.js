const tweet = (props)=> {
    return (
        <div>
            <h1>{props.username}</h1>
            <h2>{props.name}</h2>
            <p>{props.message}</p>
            <h3>{props.date}</h3>

        </div>
    );
}