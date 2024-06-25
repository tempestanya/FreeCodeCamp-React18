import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
    const [name, setName] = useState("");
    const [users, setUsers] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) return;
        // return if empty submission!

        const fakeId = Date.now();
        // dummy, don't use in real-projects!

        const newUser = { id: fakeId, name: name };
        setUsers([...data, newUser]);

        setName(""); // clear the input field!
        console.log("form submitted!");
    };

    const removeUser = (id) => {
        const newUser = users.filter((person) => {
            return person.id !== id;
        });
        setUsers(newUser);
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h4>Add User</h4>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn btn-block'>
                    Submit
                </button>
            </form>

            <h2>Users</h2>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h4>{user.name}</h4>
                        <button
                            className='btn'
                            onClick={() => {
                                removeUser(user.id);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
export default UserChallenge;
