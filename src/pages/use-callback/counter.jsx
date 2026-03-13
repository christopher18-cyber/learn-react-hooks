function Counter({ countValue, onClick }) {
    return (
        <div>
            <p>{countValue}</p>
            <button onClick={onClick}>Click</button>
        </div>
    )
}

export default Counter