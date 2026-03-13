import { useMutation, useQuery } from "@tanstack/react-query"
import { addNewProduct, fetchListOfProducts } from "./api/index.js"
import { useState } from "react"

function ReactQueryDemo() {

    const [productTitle, setProductTitle] = useState("")

    const { data: productList, isLoading } = useQuery({
        queryKey: ["productList"],
        queryFn: () => fetchListOfProducts()
    })

    const { mutateAsync: handleAddNewProductMutation } = useMutation({
        mutationFn: () => addNewProduct()
    })

    if (isLoading) return <h1>Loading products!, please wait.</h1>

    return (
        <div>
            <h1>React Query Demo</h1>
            <div>
                <input
                    onChange={(event) => setProductTitle(event.target.value)}
                    name="name" placeholder="Enter product title" value={productTitle} />
                <button disabled={productTitle.trim() === ""} type="button">Add new product</button>
            </div>
            <ul>
                {
                    productList?.length > 0 ?
                        productList.map(product => <li key={product.id}>{product.title}</li>)
                        : <h3>No product found</h3>
                }
            </ul>
        </div>
    )
}

export default ReactQueryDemo