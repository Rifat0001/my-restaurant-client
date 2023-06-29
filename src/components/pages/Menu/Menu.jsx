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
                items={offered}
            ></MenuCategory>
            {/* for pizza  */}
            <MenuCategory
                items={pizza} img={pizzaBg} title={'pizza'}
            ></MenuCategory>
            {/* for desserts  */}
            <MenuCategory
                items={desserts} img={dessertBg} title={'dessert'}
            ></MenuCategory>
            {/* for salad  */}
            <MenuCategory
                items={salad} img={saladBg} title={'salad'}
            ></MenuCategory>
            {/* for soup  */}
            <MenuCategory
                items={soup} img={soupBg} title={'soup'}
            ></MenuCategory>
        </div>
    );
};

export default Menu;