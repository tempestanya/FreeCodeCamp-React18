import { useState } from "react";

const ToggleChallenge = () => {
    const [showAlert, setShowAlert] = useState(false);

    const toggleAlert = () => {
        setShowAlert(!showAlert);
    };

    return (
        <div>
            <button className='btn' onClick={toggleAlert}>
                Toggle
            </button>
            {showAlert && <Alert />}
        </div>
    );
};

const Alert = () => {
    return <div className='alert alert-danger'>Hello World!</div>;
};

export default ToggleChallenge;
