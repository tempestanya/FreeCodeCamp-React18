import { useState, useEffect } from "react";

const CleanupFunction = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div>
            <button className='btn' onClick={() => setToggle(!toggle)}>
                Toggle Component
            </button>
            {toggle && <RandomComponent />}
        </div>
    );
};

const RandomComponent = () => {
    useEffect(() => {
        console.log("hmm, interesting");

        // setInterval returns an id!
        const intId = setInterval(() => {
            // keeps on running after unmounting as well!
            console.log("hello from interval");
        }, 1000);

        // cleanup function!
        return () => {
            clearInterval(intId);
        };
    }, []);
    return <h1>Hello There!</h1>;
};

export default CleanupFunction;
