import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
    const [isLoading, setIsLoading] = useState(true);
    // naming convention of boolean values "isSomething"!

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            // done fetching data!
        }, 3000);
    }, []);

    // set-up multiple returns!
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
