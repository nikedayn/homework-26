import logo from '../assets/img/logo.png';
import SearchContainer from './Search/SearchContainer';

import './header.scss';

const Header = () => {
    return(
        <header>
            <div className="container">
                <img className='logo_img' src={logo} alt="logo"/>
                <SearchContainer/>
            </div>
        </header>
    )
};

export default Header;