import useToggle from "./useToggle";

const ToggleExample = () => {
    const [show, toggle] = useToggle(false);
    // use the custom hook!

    return (
        <div>
            <h4>Toggle Custom Hook</h4>
            <button className='btn' onClick={toggle}>
                Toggle
            </button>
            {show && <h4>Some Stuff!</h4>}
        </div>
    );
};
export default ToggleExample;
