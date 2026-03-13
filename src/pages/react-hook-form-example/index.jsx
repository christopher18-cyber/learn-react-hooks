import { useForm } from "react-hook-form"

function ReactHookFormExamplePage() {

    const { register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    function onSubmitForm(formData) {
        console.log(formData);
        reset()
    }

    return (
        <div>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)} action="">
                <div>
                    <label htmlFor="">Email</label>
                    <input {...register("email", {
                        required: true
                    })} type="email" name="email" />
                    {
                        errors.email && errors.email.type === "required" ?
                            <p style={{
                                color: "red",
                                fontWeight: "bolder"
                            }}>Email is required</p> : null
                    }
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input {...register("password", {
                        required: true,
                        minLength: 8
                    })} type="password" name="password" />
                    {
                        errors.password && errors.password.type === "required" ?
                            <p style={{
                                color: "red",
                                fontWeight: "bolder"
                            }}>Password is required</p> : null
                    }
                    {
                        errors.password && errors.password.type === "minLength" ?
                            <p style={{
                                color: "red",
                                fontWeight: "bolder"
                            }}>Password should be at least 8 characters, please verify password again before registering.</p>
                            : null
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReactHookFormExamplePage