import { useEffect, useReducer, useContext } from "react";
import { useNavigate } from "react-router";
import {  toast } from 'react-toastify';
import { leadsAPI } from "@service/leads";
import { Loader, DataTable, Button, Modal } from "@components/ui";
import { Input } from "@components/form";
import { modalStore } from "@/context";
import { states, reducer } from "@/reducer/lead-reducer";
import "./style.scss";


const index = () => {

  const { setModal } = useContext(modalStore);
  const back = useNavigate();

  async function useFetch() {
    dispatch({ type: "LOADING_START" });
    try {
      const response = await leadsAPI.getAll();
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data });
        dispatch({ type: "LOADING_END" });
      }
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
      dispatch({ type: "LOADING_END" });
      throw new Error({ message: err.message });
    }
  }

  async function deleteLead(id) {
    try {
      const response = await leadsAPI.delete(id);
      if (response.status === 200) {
          useFetch()
          toast.error("Lead deleted  successfully" , {autoClose:2000});
      }
    } catch (er) {
      console.log(er);
    }
  }

  async function  changeStatus(id) {

    try{
      const response=await leadsAPI.update(id, { status:true , cutomer:"test"} );
      if(response.status===200){

        useFetch()
        toast.success("Lead status changed successfully" , {autoClose:2000});
      }
    }catch (er) {
      console.log(er);
    }
  }

  const [{ leads, status, loading }, dispatch] = useReducer(reducer, states);

  useEffect(() => {
    useFetch();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Modal title="Create leade" />

      <div className="p-5 flex justify-between bg-slate-100 rounded-2xl">
        <Button fun={() => back(-1)} text="go back" />
        <form>
          <Input type="search" placeholder="enter customer name" />
        </form>
        <Button fun={() => setModal({ type: "OPEN" })} text="Add new lead" />
      </div>

      {
      status === "success" && (
        <DataTable data={leads} deleteItem={deleteLead} changeStatus={changeStatus} />
      )
      }
    </>
  );
};
export default index;
