

const card = ({state:{thumbnailUrl , title}}) => {
    
    return (
        <div className="card">
                <img src={thumbnailUrl} alt="smth" />
                <div className="p-4">
                    <h1>{title}</h1>
                 </div>
        </div>
    );
};

export default card;