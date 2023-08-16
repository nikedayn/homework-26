import ProductsList from "./ProductsList/ProductsList";
import './products_page.scss';

const ProductsPage = (props) => {
    return(
        <main>
            <div className="container">
                <ProductsList products={props.products}/>
            </div>
        </main>
    )
};

export default ProductsPage;