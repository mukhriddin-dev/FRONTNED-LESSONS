import { useContext, useReducer } from "react";
import { Input } from "@components/form";
import { Button } from "@components/ui";
import { modalStore } from "@/context";
import { leadsAPI } from "@service/leads";
import { reducer, customerStates } from "@/reducer/customer-reducer";
import "./style.scss";

const index = ({ title }) => {
  
  const [{ phone, email, name }, dispatch] = useReducer(
    reducer,
    customerStates
  );

  const { isOpen, setModal } = useContext(modalStore);

  const moddalStyle = {
    display: isOpen ? "grid" : "none"
  };

  async function useFetch() {
    const newObject = {
      customer:name,
      phone,
      email,
      id: String(Date.now()),
      status: false
    };

    if (
      newObject.customer.trim().length === 0 ||
      newObject.phone.trim().length === 0 ||
      newObject.email.trim().length === 0
    ) {
      alert("Please fill all fields");
      return;
    } else {

      try {
        const response = await leadsAPI.create(newObject);
       
        if(response.status===201){
           setModal({type:'CLOSE'})
           window.location.reload();
        }

      } catch (e) {
        console.error(e);
      }

    }
  }

  return (
    <div style={moddalStyle} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>
          <button onClick={() => setModal({ type: "CLOSE" })}>x</button>
        </div>
        <div className="modal-body">
          <form
            action=""
            className="mx-auto w-full h-full grid place-content-center "
          >
            <Input
              value={name}
              onChange={(val) =>
                dispatch({ type: "UPDATE_NAME", payload: val })
              }
              className="mb-3"
              type="text"
              placeholder="enter customer name"
            />
            <Input
              value={email}
              onChange={(val) =>
                dispatch({ type: "UPDATE_EMAIL", payload: val })
              }
              className="mb-3"
              type="email"
              placeholder="enter customer email"
            />
            <Input
              value={phone}
              onChange={(val) =>
                dispatch({ type: "UPDATE_PHONE", payload: val })
              }
              className="mb-3"
              type="tel"
              placeholder="enter customer phone number"
            />
          </form>
        </div>
        <div className="modal-footer">
          <span></span>
          <div className="flex gap-x-2">
            <Button
              fun={() => setModal({ type: "CLOSE" })}
              text="cancel"
              className="bg-indigo-400 text-white"
            />
            <Button
              fun={() => useFetch()}
              text="Create"
              className="bg-green-600 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
