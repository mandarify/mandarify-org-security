import { ButtonLink } from "../../../shared/ui/general/index";
import { CoffeeSVG } from "../../../shared/icons/index";

import "./Header.css";

const coffeHref = 'https://buymeacoffee.com/mandarify';

const Header = () => {
   return (
      <header className="header">

         <div className="header__left">
            <div className="logo"></div>
         </div>

         <div className="header__center">
            <nav className="navi"></nav>
            <div className="reliability"></div>
         </div>

         <div className="header__right">
            <ButtonLink boxClass="donation donation_long" href={coffeHref} text="Купи мне кофе" iconSize={16}>
               <CoffeeSVG />
            </ButtonLink>
         </div>

      </header>
   );
};

export default Header;