import { useState } from "react";

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "Peter",
        age: 26,
        hobby: "Read Books",
    });

    const handleClick = () => {
        setPerson({
            name: "John",
            age: 30,
            hobby: "Plays Games",
        });

        // setPerson({ ...person, name: "Kush" });
        // change only one property, and preserve the rest
    };

    return (
        <div>
            <h4>{person.name}</h4>
            <h4>{person.age}</h4>
            <h4>Enjoys: {person.hobby}</h4>
            <button type='button' className='btn' onClick={handleClick}>
                Show John
            </button>
        </div>
    );
};

export default UseStateObject;
