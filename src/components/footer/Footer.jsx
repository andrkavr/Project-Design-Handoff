import logo from "../../assets/logo.svg";
import "./footer.css";
import { useTranslation } from "react-i18next";
import mapPin from "../../assets/map-pin.svg";
import phone from "../../assets/phone.svg";
import insta from "../../assets/insta.svg";
import arrow from "../../assets/arrowdown.svg";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  //Function to change the language of the site
  const lngChange = (lang) => {
    return i18n.changeLanguage(`${lang}`);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="logo-language">
          <img src={logo} alt="logo" />
          <select
            name="select-a-language"
            className="language-select"
            onChange={(e) => lngChange(e.target.value)}
          >
            <option disabled selected hidden>
              Select language
            </option>
            <option value="en">{t("english")}</option>
            <option value="se">{t("swedish")}</option>
          </select>
        </div>
        <div className="footer-contact">
          <h3>Wave Yoga Studio</h3>
          <div className="address">
            <img src={mapPin} alt="map pin icon" />
            <p>Southbeach Rd 7, Freemantle</p>
          </div>
          <div className="phone">
            <img src={phone} alt="phone icon" />
            <p>070 - 123 45 67</p>
          </div>
          <div className="socials">
            <img src={insta} alt="instagram pin" />
            <p>@wave_yogastudio</p>
          </div>
        </div>
        {/* <Link to="/about" element={ }> */}

        <button className="back-to-top" onClick={scrollToTop}>
          <img src={arrow} alt="arrow-pointing-down" className="footer-arrow" />
          {t("backToTop")}
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};
