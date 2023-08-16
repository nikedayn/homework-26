import s from './products_list.module.scss';
import ProductItem from './ProductItem';

import { useMemo } from 'react';

const ProductsList = (props) => {
    let productsRender = useMemo(() => (
        props.products.map((productInformation, index) => {
            return<ProductItem key={`props${index}`} productInformation={productInformation}/>
            
        })
    ), [props.products]);

    return(
        <ul className={s.product_list}>
            {productsRender}
        </ul>
    )
};

export default ProductsList;