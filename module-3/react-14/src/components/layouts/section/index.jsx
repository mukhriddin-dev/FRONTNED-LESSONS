import "./style.scss"

const index = ({children , className}) => {
    return (
        <section className={className && className}>
            {children}
        </section>
    );
};

export default index;