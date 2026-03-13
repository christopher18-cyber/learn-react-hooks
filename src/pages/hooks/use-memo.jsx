import { useMemo, useState } from "react"
import useFetch from "../../hooks/use-fetch.jsx"

function UseMemoExample() {

    const { data, loading } = useFetch("https://dummyjson.com/products")
    const [flag, setFlag] = useState(false)

    function filterProductByPrice(getProducts) {
        console.log("This function is now getting called.");

        return getProducts?.length > 0 ?
            getProducts.filter(singleProduct => singleProduct.price > 10) : []
    }

    const memorizedVersion = useMemo(() => {
        return filterProductByPrice(data?.products)
    }, [data?.products])

    if (loading) return <h1>Fetching products, please wait.</h1>
    console.log(data);

    return (
        <div>
            <h1 style={{ color: flag ? "red" : "blue" }}>Use memo</h1>
            <button onClick={() => setFlag(!flag)}>Toggle flag</button>
            <ul>
                {
                    memorizedVersion.map(item => <li>{item.title}</li>)
                }
            </ul>
        </div>
    )
}

export default UseMemoExample