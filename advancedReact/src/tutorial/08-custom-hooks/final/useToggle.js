import { useState } from "react";

const useToggle = (defaultValue) => {
    // default value!
    const [show, setShow] = useState(defaultValue);

    // function!
    const toggle = () => {
        setShow(!show);
    };

    return [show, toggle];
    // return the default value that is passed to the custom hook!
    // return the function that is used to change the custom hook!
    // return an array of 2 elements, like useState!
};

export default useToggle;
