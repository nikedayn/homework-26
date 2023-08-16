import s from './product_item.module.scss';

const ProductItem = (props) => {
    return(
        <li className={s.product_list_item}>
            <img className={s.product_img} src={props.productInformation.imgSRC} alt=""/>
            <h2 className ={s.product_name}>{props.productInformation.text}</h2>
            <div className={s.buy_container}>
                <p className={s.product_cost}>{props.productInformation.price} ₴</p>
                <button className={s.buy_btn}>Купить</button>
            </div>
        </li>
    )
};

export default ProductItem;