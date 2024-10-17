import React from "react"

import { Routes, Route, BrowserRouter} from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/chats" Component={Chats} />
            <Route path="/" Component={Login} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
