import { useMemo, useState } from "react";
import { data } from "../../../../data";

import List from "./List";
import slowFunction from "./slowFunction";

const LowerState = () => {
    const [people, setPeople] = useState(data);
    const [count, setCount] = useState(0);

    const value = useMemo(() => {
        return slowFunction();
    }, []);
    console.log(value);

    return (
        <section>
            <button
                className='btn'
                onClick={() => setCount(count + 1)}
                style={{ marginBottom: "1rem" }}
            >
                Count {count}
            </button>
            <List people={people} />
        </section>
    );
};
export default LowerState;
