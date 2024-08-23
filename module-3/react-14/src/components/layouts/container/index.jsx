import "./style.scss"

const index = ({children , className}) => {
    return (
        <div className={className && className}>
           {children && children }
        </div>
    );
};

export default index;