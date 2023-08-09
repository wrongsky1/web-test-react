import React, { lazy } from "react";
import { useNavigate } from "react-router-dom";
import "./LogOutButton.scss";

function LogOutButton() {
    let navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear("jwt");
        localStorage.clear("user");
        navigate("/login");
    };

    return (
        <button className='button' onClick={handleLogOut}>
            Выйти
        </button>
    );
}

export default LogOutButton;
