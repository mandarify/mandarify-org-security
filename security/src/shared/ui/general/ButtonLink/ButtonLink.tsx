import { JSX, memo } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import cn from "classnames";
import "./ButtonLink.css";


export interface IButtonLink {
   children: JSX.Element,
   boxClass?: string,
   href?: string,
   text?: string,
   iconSize?: number,
   fill?: '' | '_width_fill',
};


const ButtonLink = ({
   children,
   boxClass = '',
   href = '#',
   text = '',
   iconSize = 16,
   fill = '',
}: IButtonLink) => {

   const target: string = href == '#' ? '_self' : '_blank';

   return (
      <a href={href} className={cn('button-link', boxClass, fill)} target={target}>
         <SvgIcon iconSize={iconSize}>{children}</SvgIcon>
         {text && <span className={cn('button-link__text', '_unselect')}>{text}</span>}
      </a >
   );

};


export default memo(ButtonLink);