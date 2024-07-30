import rasm from "../assets/images/images.jpeg"

export default function Main(){
    return (
      <main>
        <div className="container">
          <h1>Hello js</h1>
          <p>Salom reactjs</p>
          <img src={rasm} alt="smth" />
        </div>
      </main>
    );
  }