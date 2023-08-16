import { connect } from "react-redux";
import { updateSearch, startSearch } from "../../../redux/reducers/productsReducer";

import Search from "./Search";

const mapStateToProps = (state) => ({
    searchText: state.productsPage.search.text
});

const mapDispatchToProps = {
    updateSearch,
    startSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);