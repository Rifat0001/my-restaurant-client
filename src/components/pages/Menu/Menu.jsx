import { Helmet } from "react-helmet-async";
import Cover from "../../compo/Cover/Cover";
import menuBg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import MiddleCover from "../../compo/Cover/MiddleCover";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../compo/SectionHeading/SectionHeading";
import MenuCategory from "../../compo/Cover/MenuCategory";
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>My Restaurant | Menu</title>
            </Helmet>
            <Cover img={menuBg} title='Our Menu' description='Would you like to try a dish?'></Cover>
            <SectionHeading
                heading="toady's offer"
                subheading="---Don't Miss---"
            ></SectionHeading>
            {/* for offer  */}
            <MenuCategory
                item={offered}
            ></MenuCategory>
            {/* for pizza  */}
            <MiddleCover img={pizzaBg} title='Pizza'></MiddleCover>
            <MenuCategory
                item={pizza}
            ></MenuCategory>
            {/* for desserts  */}
            <MiddleCover img={dessertBg} title='Dessert'></MiddleCover>
            <MenuCategory
                item={desserts}
            ></MenuCategory>
            {/* for salad  */}
            <MiddleCover img={saladBg} title='Salad'></MiddleCover>
            <MenuCategory
                item={salad}
            ></MenuCategory>
            {/* for soup  */}
            <MiddleCover img={soupBg} title='Soup'></MiddleCover>
            <MenuCategory
                item={soup}
            ></MenuCategory>
        </div>
    );
};

export default Menu;