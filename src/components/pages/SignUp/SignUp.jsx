const SignUp = () => {
    const handleSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // firebase in start here 

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col w-1/2">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold text-primary">Sign Up Now!</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUP} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input  border-black " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input  border-black " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input border-black " />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value='Sign Up' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;