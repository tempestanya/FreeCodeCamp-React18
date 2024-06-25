import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const [user, setUser] = useState({ name: "bob" });

    const logout = () => {
        setUser(null);
    };

    return (
        <nav className='navbar'>
            <h5>CONTEXT API</h5>
            <NavLinks user={user} logout={logout} />
            {/* pass the props down to the child */}
        </nav>
    );
};
export default Navbar;
