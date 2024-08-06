import "./style.scss";
import Form from "@form/form"
import Input from "@form/input"
import Button from "@ui/button"

const Modal = ({ className , saveEdited , show , setShow , currentValue , setCurrentValue}) => {

  const modalStyle = {
    display: show ? "flex" : "none"
  };

  return (

    <div style={modalStyle} className={className ? className : "modal-wrapper"}>
      
      <div className="modal-content">
       
        <i onClick={() => setShow(false)} className="bi bi-x-lg close"></i>

        <Form>
          <Input
            type="text"
            val={currentValue}
            setVal={setCurrentValue}
            placeholder="enter new title"
          />
        </Form>

        <div className="flex btn-group">

          <Button type="button" fun={saveEdited} className="save" title='save'/>
            
          <Button type="button" fun={()=>setShow(false)} className="cancel" title="cancel"/>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
