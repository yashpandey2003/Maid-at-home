import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setServices] = useState([]);
    const storetokenInLS = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);
    }

    let isLoggedIn = !!token;

    const LogoutUser = ()=>{
        setToken("");
        setUser("");
        return localStorage.removeItem("token");
    
    }


    const userAuthentication = async ()=>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method :"GET",
                headers: {
                    Authorization :`Bearer ${token}`,
                }
            });

            if(response.ok){
                const data = await response.json();
                setUser(data.userData);

            }
            else{
                console.log("Error fetching user data");
            }
            
        } catch (error) {
            console.log(error);
        }

    }

    const getServices = async ()=>{
        try {
            const response = await fetch("http://localhost:5000/api/data/service", {
                method: "GET",
            });

            if(response.ok){
                const data = await response.json();
                // console.log(data.msg);
                setServices(data.msg);
                
            }
            
        } catch (error) {
            console.log(`Services frontend error : ${error}`);
            
        }
    }

    useEffect(()=>{
        getServices();
        userAuthentication();
    },[]);

    return (
    <AuthContext.Provider value={{isLoggedIn, storetokenInLS, LogoutUser, user, services, }}>
        {children}
    </AuthContext.Provider>
    );

}




export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}
