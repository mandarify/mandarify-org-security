import { ButtonLink, Button } from "../../../shared/ui/general/index";
import { CoffeeSVG, SettingsSVG, ReliabilitySVG } from "../../../shared/icons/index";

import "./Header.css";

const coffeHref = 'https://buymeacoffee.com/mandarify';

const Header = () => {
   return (
      <header className="header">

         <div className="header__left">
            <a className="logo _unselect" href="/">
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
            <div className="reliability">
               <div className="search-box">
                  <img className="search__icon" src="/icons/search.svg" alt="" />
                  <input className="search__input" type="text" name="" id="" placeholder="Введите пароль для проверки его надежности от взлома" />
               </div>
               <Button
                  boxClass="button_reliability"
                  iconSize={16}
                  onClick={() => { }}
                  radius="_border_circle"
                  text="Проверить"
               >
                  <ReliabilitySVG />
               </Button>
            </div>
         </div>

         <div className="header__right">
            <ButtonLink boxClass="donation donation_long" href={coffeHref} text="Купи мне кофе" iconSize={16}><CoffeeSVG /></ButtonLink>
            <Button boxClass="button_settings" iconSize={20} onClick={(): void => console.log('Settings.')}><SettingsSVG /></Button>
         </div>

      </header>
   );
};

export default Header;