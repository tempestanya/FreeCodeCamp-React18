import { useState } from "react";

const UncontrolledInputs = () => {
    const [value, setValue] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        // pass in a form element in the API!
        console.log(formData);

        // how to access the values?
        const email = formData.get("email");
        // pass in the value inside the "name" attribute of the input field!
        console.log(email);

        // alternative approach!
        console.log([...formData.entries()]);
        // each field and it's value is an array!
        // store all of these arrays in an array!
        // therefore, returns an array of arrays!

        // best approach!
        const newUser = Object.fromEntries(formData);
        console.log(newUser);

        // clear the input fields!
        setValue(value + 1); // to re-render the application!
        e.currentTarget.reset(); // reset the form values!
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h4>Form Data API</h4>
                {/* name */}
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='name'
                        name='name'
                    />
                </div>
                {/* email */}
                <div className='form-row'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input
                        type='email'
                        className='form-input'
                        id='email'
                        name='email'
                    />
                </div>
                {/* password */}
                <div className='form-row'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='form-input'
                        id='password'
                        name='password'
                    />
                </div>

                <button type='submit' className='btn btn-block'>
                    Submit
                </button>
            </form>
        </div>
    );
};
export default UncontrolledInputs;
