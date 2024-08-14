import { useContext } from "react";
import { langContext } from "../context";

function postcard() {

  const {t}=useContext(langContext);
  
    return (
        <div className="p-5 border shadow">
        <h1>{t.title}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          repellat modi quaerat veniam autem, sint aliquam a nihil vero
          ipsum cum ea excepturi laudantium numquam?
        </p>
      </div>
    );
}

export default postcard;