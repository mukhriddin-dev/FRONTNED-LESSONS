
import "./style.scss"

const index = ({children , id}) => {
    return (
        <section id={id ? id : null}>
            {children}
        </section>
    );
};

export default index;