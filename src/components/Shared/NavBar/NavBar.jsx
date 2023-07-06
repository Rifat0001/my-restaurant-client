import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='menu'>Our Menu</Link></li>
        <li><Link to='order/salad'>Our Food</Link></li>
        <li><Link to='secret'>Secret</Link></li>
        <li>
            <Link>
                <button className="flex items-center">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge ms-1 badge-secondary">+0</div>
                </button>
            </Link>
        </li>
        <li>
            {
                user ? <button onClick={handleLogOut} className="  px-2 py-">Log Out</button>

                    : <><Link to='login'>Login</Link></>
            }
        </li>
        <li>
            {
                user ? <span className="text-white">   {user?.displayName}</span> : <></>
            }
        </li>
    </>
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost italic font-bold text-primary text-2xl">
                    <Link to='/'>My Restaurant</Link>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;