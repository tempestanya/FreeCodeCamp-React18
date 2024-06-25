import { useState } from "react";

const CodeExample = () => {
    const [value, setValue] = useState(0);

    const sayHello = () => {
        // be careful, you will have infinite loop
        console.log("hello there");
        setValue(value + 1);
    };
    sayHello();

    return (
        <div>
            <h1>value : {value}</h1>
            <button className='btn' onClick={() => setValue(value + 1)}>
                Click Me!
            </button>
        </div>
    );
};
export default CodeExample;
