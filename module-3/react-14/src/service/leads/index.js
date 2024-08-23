import {lead} from "../axios.config";

export const leadsAPI={
   getAll: async()=>lead.get("/leads"),
   getById: async(id)=>lead.get(`/leads/${id}`),
   create: async(data)=>lead.post("/leads",data),
   update: async(id,data)=>lead.patch(`/leads/${id}`,data),
   delete: async(id)=>lead.delete(`/leads/${id}`)
}

