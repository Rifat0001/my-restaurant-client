import { useForm } from "react-hook-form"
const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col w-1/2">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold text-primary">Sign Up Now!</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" {...register("name", { required: true })} className="input  border-black " />

                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input  border-black " /> {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true, minLength: 6, maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/
                            })} name="password" placeholder="password" className="input border-black " />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            {
                                errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>
                            }
                            {
                                errors.password?.type === 'pattern' && <span className="text-red-600">Password have one uppercase lowercase number and special character</span>
                            }
                        </div>
                        <div className="form-control mt-2">
                            <input type="submit" className="btn btn-primary" value='Sign Up' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;