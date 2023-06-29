import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import MiddleCover from "./MiddleCover";
const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <MiddleCover img={img} title={title}></MiddleCover>}
            <div className="grid my-10 md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}><button className="btn btn-outline border-b-4 border-0 ">Order</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;