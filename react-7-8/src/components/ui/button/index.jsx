
const index = ({type , className , fun , children , title}) => {
    
 
    return (
        <button type={type ? type : 'button'} className={className ? className : null}  onClick={fun ? fun : null}>
            {children ? children : (title ? title : '' )}
        </button>
    );
};

export default index;