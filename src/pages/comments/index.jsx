import useFetch from "../../hooks/use-fetch.jsx"

function CommentList() {

    const { data, error, loading } = useFetch("https://dummyjson.com/comments")

    if (loading) return <h1>Fetching comments, pls wait</h1>

    return (
        <div>
            <h1>Comment List Page</h1>
            <ul>
                {data?.comments?.length > 0 ?
                    data?.comments.map(commentItem =>
                        <div>
                            <label>{commentItem?.body}</label>
                            <p>{commentItem?.likes}</p>
                        </div>
                    ) : null
                }
            </ul>
        </div>
    )
}

export default CommentList