import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const FoodCart = ({ item }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleAddToCart = item => {
        console.log(item);
        if (user) {
            fetch('http://localhost:5000/carts')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }
    const { name, image, price, recipe } = item;
    return (
        <div className="card w-96 bg-base-100 text-center shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute top-4 right-4 px-2 py-1 rounded-lg
            ">${price}</p>
            <div className="card-body">
                <h2 className="font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline w-1/2 bg-[#E8E8E8]  uppercase border-b-4 border-0 text-orange-400">
                        Add To cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;