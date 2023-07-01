import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../provider/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext)
    // for load captcha 
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    // for button disabled state 
    const [disabled, setDisabled] = useState(true);
    // for get captcha ref 
    const captchaRef = useRef(null);
    // for validate captcha 
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
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
                alert('Login Successfully')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
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
                            <input ref={captchaRef} type="text" name="captcha" placeholder="type the captcha" className="input border-black " />
                            <button onClick={handleValidateCaptcha} className='btn btn-xs btn-outline btn-primary mt-2'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" disabled={disabled} className="btn btn-primary" value='Login' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;