

const trow = ({children , className}) => {
    return (
        <tr className={className ? className : null}>
                {children ? children : null}
        </tr>
    );
};

export default trow;