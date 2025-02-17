import { JSX, memo, useRef, useEffect, useMemo } from "react";
import cn from "classnames";
import "./SvgIcon.css";


export interface ISvgIcon {
   children: JSX.Element,
   boxClass?: string,
   iconSize?: number,
};


const SvgIcon = ({ children, boxClass = '', iconSize = 16 }: ISvgIcon) => {

   console.log('%c\t\t📄 UI: SvgIcon', 'color: white; font-size: 12px;');


   const iconClass: string = useMemo(() => cn('icon-svg-box', boxClass), [boxClass]);
   const svgBox = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (svgBox.current) {
         svgBox.current.style.width = iconSize + 'px';
         svgBox.current.style.height = iconSize + 'px';
      }
   }, [iconSize]);

   return <div className={iconClass} ref={svgBox}>{children}</div>;
};


export default memo(SvgIcon);