import { useState, useEffect } from "react";

const Example = () => {
    const [condition, setCondition] = useState(true);
    if (condition) {
        const [state, setState] = useState(false);
        // cannot call hooks conditonally!
    }

    if (condition) {
        return <h2>Hello There</h2>;
    }
    useEffect(() => {
        console.log("hello there");
        // this will also fail, multiple returns!
    }, []);

    return (
        <div>
            <h1>Example</h1>
        </div>
    );
};

export default Example;
