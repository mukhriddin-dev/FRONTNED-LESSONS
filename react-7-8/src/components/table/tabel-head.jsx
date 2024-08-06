const thead = ({children , className}) => {
    return (
        <thead className={className ? className : null}>
            {children ? children : null}
        </thead>
    );
};

export default thead;