import { ButtonHref, ButtonAction } from "../../../shared/ui/buttons";
import { SearchReliability } from "../../general";
import { CoffeeSVG, SettingsSVG } from "../../../shared/icons";

import "./Header.css";
import { NavLink } from "react-router-dom";


const coffeHref = 'https://buymeacoffee.com/mandarify';


const Header = () => {

   console.log('%c\t📁 Widgets: Header', 'color: white; font-size: 14px; font-weight: bold;');


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
                     <NavLink to="ru" className={({ isActive }) => `navi-link ${isActive ? '_navi-link-active' : ''}`} end><span>Главная</span></NavLink>
                  </li>
                  <li className="navi__item _unselect">
                     <NavLink to="ru/password-generator" className={({ isActive }) => `navi-link navi-link_brand ${isActive ? '_navi-link-active' : ''}`} end><span>Генератор</span></NavLink>
                  </li>
                  <li className="navi__item _unselect">
                     <NavLink to="ru/password-reliability" className={({ isActive }) => `navi-link ${isActive ? '_navi-link-active' : ''}`} end><span>Безопасность</span></NavLink>
                  </li>
                  <li className="navi__item _unselect">
                     <NavLink to="ru/blog" className={({ isActive }) => `navi-link ${isActive ? '_navi-link-active' : ''}`} end><span>Блог</span></NavLink>
                  </li>
               </ul>
            </nav>

            <SearchReliability />

         </div>

         <div className="header__right">
            <ButtonHref href={coffeHref} iconSize={16} text='Купи мне кофе' sView='btn-custom_geld'><CoffeeSVG /></ButtonHref>
            <ButtonAction iconSize={20}><SettingsSVG /></ButtonAction>
         </div>

      </header>
   );
};


export default Header;