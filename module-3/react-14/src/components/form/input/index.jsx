import "./style.scss"

const index = ({type, placeholder , className , value , onChange}) => {
    return (
        <input value={value ? value : ""} onChange={(e)=>onChange(e.target.value)} type={type ? type : 'text'} className={className ? className : ""} placeholder={placeholder ? placeholder : ''}  />
    );
};

export default index;