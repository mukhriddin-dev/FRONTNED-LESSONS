import "./style.scss"

const card = ({user:{first_name, last_name , email , avatar}}) => {

  return (
    <div  className="card">
      <img src={avatar} alt="avatar" className="card-img" />
      <div className="card-body">
        <h2>
           {first_name} {last_name}
        </h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default card;
