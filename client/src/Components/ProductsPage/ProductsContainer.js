import { connect } from "react-redux";
import ProductsPage from "./ProductsPage";

const mapStateToProps = (state) => ({
    products: state.productsPage.search.status ? state.productsPage.search.arr : state.productsPage.products,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)