import { useEffect, useRef } from "react"

function Hooks() {

    const countValue = useRef(0)

    const divelement = useRef()

    const getInput = useRef()

    function handleClick() {
        countValue.current++
        console.log(countValue.current);
    }

    useEffect(() => {

        getInput.current.focus()
        const getReferenceDiv = divelement.current
        console.log(getReferenceDiv);

        getReferenceDiv.style.color = "red"

        setTimeout(() => {
            getReferenceDiv.style.color = "green"

            setTimeout(() => {
                getReferenceDiv.style.color = "blue"
            }, 1000)
        }, 2000)
    }, [])
    return (
        <div>
            <h1>Use ref, Use memo and Use callback</h1>
            <button onClick={handleClick}>Click me</button>
            <div ref={divelement}>Some random text</div>
            <input name="name" placeholder="Enter your name" ref={getInput} />
        </div>
    )
}

export default Hooks