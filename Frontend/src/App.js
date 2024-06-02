import React from 'react';
import UserList from './components/UserList/UserList';
import UserForm from './components/UserForm/UserForm';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter ,Routes, Route, Outlet, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="/user/add" element={<UserForm/>}/>
            <Route path="/user/edit" element={<UserForm/>} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;