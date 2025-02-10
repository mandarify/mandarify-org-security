import { JSX, memo, useRef, useEffect } from "react";
import "./SvgIcon.css";


export interface ISvgIcon {
   children: JSX.Element,
   boxClass?: string,
   iconSize?: number,
};


const SvgIcon = ({ children, boxClass = '', iconSize = 16 }: ISvgIcon) => {

   const svgBox = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (svgBox.current) {
         svgBox.current.style.width = iconSize + 'px';
         svgBox.current.style.height = iconSize + 'px';
      }
   }, [iconSize]);

   return <div className={`icon-svg-box ${boxClass}`} ref={svgBox}>{children}</div>;
};


export default memo(SvgIcon);