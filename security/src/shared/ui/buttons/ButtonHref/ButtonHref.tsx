import { memo } from "react";
import { IButton } from "../Button/Button.interface";
import SvgIcon from "../../general/SvgIcon/SvgIcon";
import cn from "classnames";
import "../Button/Button.css";

export interface IButtonHref extends IButton {
   href?: string
};


const ButtonHref = ({
   children = null,
   iconSize = 16,
   text = '',

   boxClass = '',
   sView = 'btn_normal',
   sH = 'btn_h_max',
   sW = 'btn_w_max',
   sR = 'btn_r_auto',

   href = '#',

}: IButtonHref) => {

   const target: string = href == '#' ? '_self' : '_blank';
   const btnClasses: string = cn('button', boxClass, sView, sH, sW, sR, '_unselect');
   const textClasses: string = cn('button__text');

   return (
      <a className={btnClasses} href={href} target={target}>
         {children && <SvgIcon iconSize={iconSize}>{children}</SvgIcon>}
         {text && <span className={textClasses}>{text}</span>}
      </a>
   );
};


export default memo(ButtonHref);