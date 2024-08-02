const index = ({title, children}) => {
  
  return (
    <>
      <h1>{title ? title : ""}</h1>
      <div className="card-grid">
        {children}
      </div>
    </>
  );
};

export default index;
