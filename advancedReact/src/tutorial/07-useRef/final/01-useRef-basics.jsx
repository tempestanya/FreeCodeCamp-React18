import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
    const [value, setValue] = useState(0);
    const refContainer = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
        refContainer.current.focus();
        // focus on the input, when page loads
    });
    useEffect(() => {
        // initial render
        if (!useRef.current) {
            useRef.current = true;
            return;
        }
        // state re-renders
        console.log(isMounted);
    }, [value]);

    return (
        <div>
            <form className='form'>
                <div className='form-row'>
                    <label
                        htmlFor='name'
                        className='form-label'
                        ref={refContainer}
                    >
                        Name
                    </label>
                    <input type='text' id='name' className='form-input' />
                </div>
                <button type='submit' className='btn btn-block'>
                    Submit
                </button>
            </form>
            <h1>Value : {value}</h1>
            <button onClick={() => setValue(value + 1)} className='btn'>
                Increase
            </button>
        </div>
    );
};

export default UseRefBasics;
