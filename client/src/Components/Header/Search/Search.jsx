import s from './search.module.scss';

const Search = (props) => {
    const handleChange = (newValue) => {
        props.updateSearch(newValue);
    }

    const handleClick = () => {
        props.startSearch();
    }

    return(
        <>
            <input 
                onChange={(e)=>{
                    handleChange(e.target.value)
                }}
                className={s.search_input}
                value={props.searchText}
                type="search"
            />
            <button onClick={()=>{handleClick()}} className={s.search_btn}>Search</button>
        </>
    )
};

export default Search;