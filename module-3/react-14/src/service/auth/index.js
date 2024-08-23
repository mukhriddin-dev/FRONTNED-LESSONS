import {api} from "../axios.config";

export const useAuth = async (userObject) => {
    try {
        const res = await api.post("/auth/login", userObject);
        localStorage.setItem("token", res.data.access_token);
        if(res.data.access_token){
            location.href="/"
        }
    } catch (e) {
        console.error(e);
    }
};
