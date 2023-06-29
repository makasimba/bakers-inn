import './../styles/ProductNav.css';
import Group from './Group';

const ProductNav = () => {
    return ( 
        <div className="product-nav pt-5">
            
            <ul class="nav justify-content-center" id="myTab" role="tablist">

                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="bread-tab" data-bs-toggle="tab" data-bs-target="#bread" type="button" role="tab" aria-controls="bread" aria-selected="true">Bread</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="meat-tab" data-bs-toggle="tab" data-bs-target="#meat" type="button" role="tab" aria-controls="meat" aria-selected="false">Meat Pies</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="scones-tab" data-bs-toggle="tab" data-bs-target="#scones" type="button" role="tab" aria-controls="scones" aria-selected="false">Scones</button>
                </li>
                
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="donut-tab" data-bs-toggle="tab" data-bs-target="#donut" type="button" role="tab" aria-controls="donut" aria-selected="false">Donuts</button>
                </li>
            </ul>

            <div class="tab-content overflow-y-scrollable" id="myTabContent">
                <div class="tab-pane fade show active" id="bread" role="tabpanel" aria-labelledby="bread-tab">
                    <Group type="bread" />
                </div>

                <div class="tab-pane fade" id="meat" role="tabpanel" aria-labelledby="meat-tab">
                    <Group type="bread" />
                </div>

                <div class="tab-pane fade" id="scones" role="tabpanel" aria-labelledby="scones-tab">
                    <Group type="bread" />
                </div>

                <div class="tab-pane fade" id="donut" role="tabpanel" aria-labelledby="donut-tab">
                    <Group type="bread" />
                </div>
            </div>

        </div>
     );
}
 
export default ProductNav;