import { useState, useEffect } from "react";

const useFetchPerson = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await fetch(url);
                if (!resp.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const user = await resp.json();
                setUser(user);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchUser();
    }, []);

    // return an object from the custom hook!
    return { isLoading, isError, user };
};

export default useFetchPerson;
