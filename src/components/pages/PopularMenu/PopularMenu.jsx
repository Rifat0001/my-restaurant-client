import { useEffect, useState } from "react";
import SectionHeading from "../../compo/SectionHeading/SectionHeading";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <div className="mb-20">
            <SectionHeading
                heading={"From Our Menu"}
                subheading={"Popular Items"}
            ></SectionHeading>
            <div className="grid my-10 md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center">
                <button className="btn btn-outline border-b-4 border-0 ">View Full Menu</button>
            </div>

        </div>
    );
};

export default PopularMenu;