import { memo } from "react";
import { IButton } from "../Button/Button.interface";
import SvgIcon from "../../general/SvgIcon/SvgIcon";
import cn from "classnames";
import "../Button/Button.css";

export interface IButtonAction extends IButton {
   onClick?: () => void,
}


const ButtonAction = ({
   children = null,

   text = '',
   iconSize = 16,

   boxClass = '',
   sView = 'btn_normal',
   sH = 'btn_h_max',
   sW = 'btn_w_max',
   sR = 'btn_r_auto',

   onClick = () => { },

}: IButtonAction) => {

   console.log('%c\t\t📄 UI: ButtonAction', 'color: white; font-size: 12px;');


   const btnClasses = cn('button', boxClass, sView, sH, sW, sR, '_unselect');
   const textClasses = cn('button__text');

   return (
      <div className={btnClasses} onClick={onClick} tabIndex={0}>
         {children && <SvgIcon iconSize={iconSize}>{children}</SvgIcon>}
         {text && <span className={textClasses}>{text}</span>}
      </div>
   );
};


export default memo(ButtonAction);