import { createContext } from "react";
import { useState } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

// custom hook!
import { useContext } from "react";

export const useAppContext = () => {
    return useContext(NavbarContext);
    // directly return the object passed in the value!
};
// custom hook end!

const Navbar = () => {
    const [user, setUser] = useState({ name: "bob" });

    const logout = () => {
        setUser(null);
    };

    return (
        <NavbarContext.Provider value={{ user: user, logout: logout }}>
            <nav className='navbar'>
                <h5>CONTEXT API</h5>
                <NavLinks />
            </nav>
        </NavbarContext.Provider>
    );
};
export default Navbar;
