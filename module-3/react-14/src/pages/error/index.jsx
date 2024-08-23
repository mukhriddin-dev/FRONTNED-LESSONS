import { Container } from "@layouts";
import "./style.scss"

const index = () => {
    return (
       <Container>
         <div className="p-5 bg-red-300 text-center">
           404 NOT FOUND
        </div>
       </Container>
    );
};

export default index;