

const tbody = ({children , className}) => {
    return (
        <tbody className={className ? className : null}>
                {children ? children : null}
        </tbody>
    );
};

export default tbody;