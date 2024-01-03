import { useState } from "react"

export default function Button(){
    const [x, setX] = useState(0)
    const handleClick = () => {
        setX(x + 1);
    }
    return(
        <>
            <p>
                Clicked {x} times
            </p>
            <button onClick={handleClick}>
                Click me
            </button>
            <button onClick={() => setX(0)}>
                Reset
            </button>
        </>
    )
}