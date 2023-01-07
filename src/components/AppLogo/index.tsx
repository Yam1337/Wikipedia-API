import "./styles.scss";
import logo from "../../assets/icons/wiki.png";

export const AppLogo = () => {
    return (
        <div className="logo-wrapper">
            <img src={logo} alt="Logo" />
            <div className="logo-text">Wikipedia API</div>
        </div>
    );
};
