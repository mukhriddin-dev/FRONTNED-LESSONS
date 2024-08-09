

const mainlayout = ({children}) => {

  return (
    <main>
      <section>
        <div className="container">

          {children}

        </div>
      </section>
    </main>
  );
};

export default mainlayout;
