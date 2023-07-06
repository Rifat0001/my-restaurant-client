import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const { signIn } = useContext(AuthContext)
    // for load captcha 
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    // for navigate user after login 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // for button disabled state 
    const [disabled, setDisabled] = useState(true);
    // for validate captcha 
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // firebase sign in start here 
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Loin Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <>
            <Helmet>
                <title>My Restaurant | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col w-1/2">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-primary">Login Now!</h1>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha" className="input border-black " />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" disabled={disabled} className="btn btn-primary" value='Login' />
                            </div>
                            <p>New in this website? <Link to='/signUp' className='text-primary font-semibold'>Sign up</Link>  </p>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;