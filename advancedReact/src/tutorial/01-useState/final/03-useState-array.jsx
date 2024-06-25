import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        // console.log(id);
        const newPeople = people.filter((person) => {
            return person.id !== id;
        });
        setPeople(newPeople);
    };
    const clearAllItems = () => {
        setPeople([]);
    };

    return (
        <div>
            {people.map((person) => {
                // console.log(person);
                const { id, name } = person;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>
                            Remove Item
                        </button>
                    </div>
                );
            })}
            <button
                type='button'
                className='btn'
                style={{ marginTop: "2rem" }}
                onClick={clearAllItems}
            >
                Remove All
            </button>
        </div>
    );
};

export default UseStateArray;
