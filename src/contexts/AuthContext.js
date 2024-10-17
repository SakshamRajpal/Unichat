import React, {useContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
// import { children } from "react/cjs/react.production.min";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

//Using React-Children
export const AuthProvider = ({ children }) => {
     const [loading, setLoading] = useState(true);
     const [user, setUser] = useState(null);
     const navigate = useNavigate();

     useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if(user)
              {navigate.push('/chats');}

        })
     }, [user, navigate]);//whenever we renavigate or when we add user

     const value = { user };

     return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
     )
}
