import React from "react";

const withCheckAuth = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const handleLogin = () => {
        localStorage.setItem("user", 1);
    };
    const handleLogOut = () => {
        localStorage.removeItem("user");
    };
    return (
        <Component
            {...props}
            isAuth={isAuth}
            onLogin={handleLogin}
            onLogOut={handleLogOut}
        />
    );
};

export default withCheckAuth;
