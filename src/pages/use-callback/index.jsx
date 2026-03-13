import { useState } from "react"
import Counter from "./counter.jsx"

function UseCallBackExample() {

    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    return (
        <div>
            <h1>Use callback</h1>
            <Counter countValue={countOne} onClick={() => setCountOne(countOne + 1)} />
            <Counter countValue={countTwo} onClick={() => setCountTwo(countTwo + 1)} />
        </div>
    )
}

export default UseCallBackExample