import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/use-fetch.jsx";
import useWindowResize from "../../hooks/use-window-resize.jsx";

function RecipeList() {

    const location = useLocation()

    const { data, loading, error } = useFetch("https://dummyjson.com/recipes")

    const windowSize = useWindowResize()
    if (loading) return <h1>Fetching recipes!, please wait</h1>


    console.log(location);
    // console.log(resultFromCustomUseFetchHook);


    return (
        <div>
            <h1 style={{
                color: windowSize.width < 768 ? "red" : "black"
            }}>Recipe List Page</h1>
            <h3>Current window width is {windowSize.width} and current height is {windowSize.height}</h3>
            <ul>
                {data?.recipes?.length > 0 ?
                    data?.recipes.map(
                        recipeItem =>
                            <div>
                                <img src={recipeItem?.image} />
                                <label>{recipeItem?.name}</label>
                            </div>
                    ) : null
                }
            </ul>
        </div>
    )
}

export default RecipeList