import { data } from "../../../data";
import { useReducer, useState } from "react";

import reducer from "./reducer";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";

const defaultState = {
    people: data,
    isLoading: false,
};

const ReducerBasics = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const removeItem = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: { id: id } });
    };
    const clearAllItems = () => {
        dispatch({ type: CLEAR_LIST });
    };
    const resetList = () => {
        dispatch({ type: RESET_LIST });
    };
    console.log(state);

    return (
        <div>
            {state.people.map((person) => {
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

            {state.people.length < 1 ? (
                <button
                    type='button'
                    className='btn'
                    style={{ marginTop: "2rem" }}
                    onClick={resetList}
                >
                    Reset List
                </button>
            ) : (
                <button
                    type='button'
                    className='btn'
                    style={{ marginTop: "2rem" }}
                    onClick={clearAllItems}
                >
                    Remove All
                </button>
            )}
        </div>
    );
};

export default ReducerBasics;
