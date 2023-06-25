import { useEffect, useState } from "react";
import SectionHeading from "../../compo/SectionHeading/SectionHeading";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div>
            <SectionHeading
                heading={"From Our Menu"}
                subheading={"Popular Items"}
            ></SectionHeading>
        </div>
    );
};

export default PopularMenu;