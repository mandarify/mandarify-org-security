import { JSX, memo } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import cn from "classnames";
import "./Button.css";


export interface IButton {
   children: JSX.Element,
   boxClass?: string,
   text?: string,
   iconSize?: number,
   fill?: '' | '_width_fill',
   radius?: '' | '_border_circle'
   bg?: '' | '_bg_transparent',
   onClick: () => void,
};


const Button = ({
   children,
   boxClass = '',
   text = '',
   iconSize = 16,
   fill = '',
   radius = '',
   bg = '',
   onClick
}: IButton) => {

   return (
      <div className={cn('button', boxClass, fill, radius, bg)} onClick={onClick}>
         <SvgIcon iconSize={iconSize}>{children}</SvgIcon>
         {text && <span className={cn('button__text', '_unselect')}>{text}</span>}
      </div>
   );

};


export default memo(Button);