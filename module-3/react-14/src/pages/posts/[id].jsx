import React, { useEffect, useState } from "react";
import { useParams,  useNavigate} from "react-router";
import {postAPI} from "@service/posts";
import { Loader } from "@components/ui";

const postitem = () => {

  const [data, setData] = useState({});
  const [load, setLoad] = useState(true);

  const {id} = useParams();
  const navigate = useNavigate();
 
async function fetchData(ID){
  const response = await postAPI.getById(ID);
  setData(response.data);
  setLoad(false);
}

  useEffect(() => {
    fetchData(id)
  }, [id]);


  if(load) {
    return <Loader/>
  }

  return (
    <div className="p-4 border rounded-3xl bg-slate-200">
      <div className="flex justify-between">
        <span></span> 
        <button onClick={()=> navigate(-1) } className="border active:bg-indigo-700 bg-indigo-400 px-3 py-1 text-white">
          go back
        </button>
      </div>
      <h1 className="font-bold text-2xl">{data?.id} {data?.title}</h1>
      <p>
        {data?.body}
      </p>
    </div>
  );
};

export default postitem;
