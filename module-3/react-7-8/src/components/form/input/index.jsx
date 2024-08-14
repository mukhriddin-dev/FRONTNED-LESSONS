import "./style.scss"

const index = ({setVal , val , placeholder , className , type}) => {

    return (
       <input 

          type={type ? type : 'text'}
          value={val ? val : ""}
          className={className ? className : null}
          placeholder={placeholder ? placeholder : null}
          onChange={(e)=> setVal(e.target.value)}
        
        />
    );
};

export default index;