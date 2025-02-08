import { ReactNode } from "react";
import "./Button.css";


export interface IButton {
   children?: ReactNode,
   boxClass?: string,
   size: "s" | "m" | "l",
};


const Button = ({ children = '', boxClass = '', size, ...props }: IButton) => {
   return (
      <div className={`button ${boxClass}`} {...props}>{children}</div>
   )
};


export default Button;