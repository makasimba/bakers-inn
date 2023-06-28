import SandwichCard from './SandwichCard';
import './../styles/Carousel.css';
import sandwich from './../assets/Images/sandwich.png';
import BreadCard from './../components/BreadCard';
import bluebread from './../assets/Images/yellow-bread.png';
import yellowbread from './../assets/Images/yellow-bread.png';
import redbread from './../assets/Images/red-bread.png';
import Info from './Info';
import './../styles/Group.css';


const Group = ({ type="sandwich" }) => {

    if (type === "bread") {
        return ( 
            <div className="container">
                <div className="row">
                    <div className="inner--row d-flex px-0">
                        <div className="col-4 pe-2">
                            <BreadCard title="Premium Soft White Loaf" picture={bluebread}>
                                <Info content="Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf as 18 slices" color="#2d0170"/>
                            </BreadCard>
                        </div>
                        <div className="col-4 pe-2">
                            <BreadCard title="Family Loaf High Energy Brown" picture={yellowbread}>
                                <Info content="Our family Loaf High Energy Brown loaves are great source of fibre, high in energy and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs - anything! The Family Loaf has 21 slices." color="#2d0170"/>
                            </BreadCard>
                        </div>
                        <div className="col-4 pe-2">
                            <BreadCard title="Family Loaf Soft White Loaf" picture={redbread}>
                                <Info content="Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf as 21 slices" color="#2d0170"/>
                            </BreadCard>
                        </div>
                        <div className="col-4 pe-2">
                            <BreadCard title="Family Loaf Soft White Loaf" picture={redbread}>
                                <Info content="Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf as 21 slices" color="#2d0170"/>
                            </BreadCard>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (type === "sandwich") {
        return ( 

            <>
                <div className="container">
                    <div className="row">
                        <div className="p-3 col">
                            <SandwichCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={sandwich}/>
                        </div>
                        <div className="p-3 col">
                            <SandwichCard title="Shrimp Sandwich" prepTime="20 min" serves="6 people" picture={sandwich}/>
                        </div>
                        <div className="p-3 col">
                            <SandwichCard title="Shell Fish Sandwich" prepTime="20 min" serves="6 people" picture={sandwich}/>
                        </div>
                    </div>
                </div>

            </>
     );


    }


}
 
export default Group;