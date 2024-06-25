import { useState } from "react";

const UserChallenge = () => {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({ name: "Kush" });
    };
    const logout = () => {
        setUser(null);
    };

    return (
        <div>
            {user ? (
                <Login name={user.name} logout={logout} />
            ) : (
                <Logout login={login} />
            )}
        </div>
    );
};

const Login = ({ name, logout }) => {
    return (
        <div>
            <h4>Hello There! {name}</h4>
            <button className='btn' onClick={() => logout()}>
                Logout
            </button>
        </div>
    );
};
const Logout = ({ login }) => {
    return (
        <div>
            <h4>Please Sign In!</h4>
            <button className='btn' onClick={() => login()}>
                Login
            </button>
        </div>
    );
};

export default UserChallenge;
