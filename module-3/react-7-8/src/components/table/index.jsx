

const index = ({className , children}) => {
    return (
        <table className={className ? className : null}>
           {children}
        </table>
    );
};

export default index;