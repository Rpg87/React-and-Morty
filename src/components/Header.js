import logo from "../images/logo_compr.png";
import "../styles/components/Header.scss";

const Header = () => {
    return (
        <header className="header">
            {" "}
            <img className="header__img" src={logo} alt="Rick and Morty" />
        </header>
    );
};
export default Header;
