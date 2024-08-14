import { useEffect, useState } from "react";
import CardWrapper from "./card-wrapper";
import Card from "./card";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [load, setLoad] = useState(false);

  const baseURL = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    fetch(baseURL + "/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoad(true);
      });
  }, []);

  return (
    <div className="container">

      {load ? (
        <CardWrapper>
          
          {photos.length > 0 ? (
            photos?.map((item) => {
              return <Card state={item} key={item.id} />;
            })
          ) : (
            <h1> NOT FOUND PHOTS!</h1>
          )}
        </CardWrapper>
      ) : (
        <h1>LOADING.....</h1>
      )}
    </div>
  );
};

export default App;
