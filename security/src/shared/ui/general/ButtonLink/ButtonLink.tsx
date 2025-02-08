import { JSX, memo } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import "./ButtonLink.css";


export interface IButtonLink {
   children: JSX.Element,       // Svg компонент
   boxClass?: string,         // Родительский класс
   href?: string,             // Ссылка или якорь
   text?: string | null,      // Название кнопки
   iconSize?: number,         // Размеры для svg иконки
};


const ButtonLink = ({
   children,
   boxClass = '',
   href = '#',
   text = null,
   iconSize = 16,
}: IButtonLink) => {
   return (
      <a href={href} className={`button-link ${boxClass}`} target="_blank">
         <SvgIcon iconSize={iconSize}>{children}</SvgIcon>
         {text && <span className="button-link__text">{text}</span>}
      </a >
   )
};


export default memo(ButtonLink);