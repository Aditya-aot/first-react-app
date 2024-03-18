import { useState } from "react";

function Gautam(){

    const [count, setCount] = useState(0);

    function adding(){
        setCount(count + 1);
    }

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={adding}>Add: {count}</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    );
}

export default Gautam;