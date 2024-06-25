import { useState } from "react";

const ShortCircuitExamples = () => {
    const [text, setText] = useState("");
    const [name, setName] = useState("susan");
    const [user, setUser] = useState({ name: "John" });
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            <h2>Ternary Operator</h2>
            {user ? (
                <div>
                    <h2>Hello there user {user.name}!</h2>
                </div>
            ) : (
                <div>
                    <h2>Please sign in!</h2>
                </div>
            )}
        </div>
    );
};

export default ShortCircuitExamples;
