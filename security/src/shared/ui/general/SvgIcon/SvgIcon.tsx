import { JSX, memo } from "react";
import "./SvgIcon.css";


export interface ISvgIcon {
   children: JSX.Element,       // Svg компонент
   boxClass?: string,         // Родительский класс
   iconSize?: number,         // Размеры для коробки иконки
};


const SvgIcon = ({ children, boxClass = '', iconSize = 16 }: ISvgIcon) => {
   return (
      <div className={`icon-svg-box ${boxClass}`} style={{ width: iconSize + 'px' }}>
         {children}
      </div>
   )
};


export default memo(SvgIcon);