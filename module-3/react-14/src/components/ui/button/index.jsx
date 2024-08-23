import "./style.scss"

const index = ({className, type , text , fun , children}) => {

    return (
        <button type={type ? type : 'button'} onClick={()=> fun && fun() } className={className && className}>
            {text ? text : ( children ? children : 'button' ) }
        </button>
    );
};

export default index;