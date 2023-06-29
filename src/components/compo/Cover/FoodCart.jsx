const FoodCart = ({ item }) => {
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
                    <button className="btn btn-outline w-1/2 bg-[#E8E8E8]  uppercase border-b-4 border-0 text-orange-400">
                        Add To cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;