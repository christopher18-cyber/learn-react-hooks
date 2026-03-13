const productList = [
    {
        title: "product 1",
        id: 1
    },
    {
        title: "product 2",
        id: 2
    },
    {
        title: "product 3",
        id: 3
    },
    {
        title: "product 4",
        id: 4
    },
    {
        title: "product 5",
        id: 5
    }
]

export const fetchListOfProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return productList
}


export const addNewProduct = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newLyCreatedProduct = {
        id: productList.length + 1,
        title: `product ${productList.length + 1}`
    }

    productList.push(newLyCreatedProduct)

    return newLyCreatedProduct
}