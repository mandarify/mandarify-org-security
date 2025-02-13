import { ButtonHref, ButtonAction } from "../../../shared/ui/buttons";
import { CoffeeSVG, SettingsSVG } from "../../../shared/icons";

import "./Header.css";
import { SearchReliability } from "../../general";

const coffeHref = 'https://buymeacoffee.com/mandarify';

const Header = () => {
   return (
      <header className="header">

         <div className="header__left">
            <a className="logo _unselect" href="/" tabIndex={-1}>
               <img className="logo__icon" src="/logo/logo.svg" alt="Логотип инстурмента Security." />
               <span className="logo__name" translate="no">security</span>
            </a>
         </div>

         <div className="header__center">
            <nav className="navi">
               <ul className="navi__list">
                  <li className="navi__item _unselect">
                     <a href="/" className="navi-link _navi-link-active"><span>Главная</span></a>
                  </li>
                  <li className="navi__item _unselect">
                     <a href="/password-generator" className="navi-link navi-link_brand"><span>Генератор</span></a>
                  </li>
                  <li className="navi__item _unselect">
                     <a href="/password-reliability" className="navi-link"><span>Безопасность</span></a>
                  </li>
                  <li className="navi__item _unselect">
                     <a href="/blog" className="navi-link"><span>Блог</span></a>
                  </li>
               </ul>
            </nav>

            <SearchReliability />

         </div>

         <div className="header__right">
            <ButtonHref href={coffeHref} iconSize={16} text='Купи мне кофе' sView='btn-custom_geld'><CoffeeSVG /></ButtonHref>
            <ButtonAction onClick={(): void => console.log('Settings.')} iconSize={20} sView='btn_normal'><SettingsSVG /></ButtonAction>            {/* <ButtonLink href={coffeHref} iconSize={16} text="Купи мне кофе" sH='btn_h_30' sType='btn-custom_geld'><CoffeeSVG /></ButtonLink> */}
         </div>

      </header>
   );
};

export default Header;