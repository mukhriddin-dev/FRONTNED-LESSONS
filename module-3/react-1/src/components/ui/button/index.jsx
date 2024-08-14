import "./style.scss"

const index = ({className , text , type , fun}) => {

    return (
        <button onClick={fun} type={type ? type : 'button'} className={className}>
            {text ? text : "button"}
        </button>
    );
};

export default index;