

export default function Main(props) {

  return (
    <main>
      <div className="container">
       {props?.children}
      </div>
    </main>
  );
}
