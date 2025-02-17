import { memo, useCallback, useState } from "react";
import { ButtonAction } from "../../buttons";
import SvgIcon from "../SvgIcon/SvgIcon";
import { LockSVG, EyeOpenSVG, EyeCloseSVG } from "../../../icons";
import "./Search.css";


interface ISearch {
   currentValue: string,
   onChangeValue: (newValue: string) => void,
}


const placeholder: string = 'Введите пароль для проверки его надежности от взлома.';


const Search = ({
   currentValue = '',
   onChangeValue

}: ISearch) => {

   console.log('%c\t\t📄 UI: Search', 'color: white; font-size: 12px;');



   const [type, setType] = useState<'text' | 'password'>('text');

   const toggleType = useCallback(() => {
      setType((prev) => (prev === "text" ? "password" : "text"));
   }, []);

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeValue(e.target.value);
   };

   return (
      <div className="search">
         <input className="search__input" type={type} value={currentValue} onChange={onChange} placeholder={placeholder} />
         <div className="search__icon search__icon_lock _unuse"><SvgIcon iconSize={14}><LockSVG /></SvgIcon></div>
         <div className="search__icon search__icon_eye">
            <ButtonAction iconSize={14} sView='btn_transparent' sW='btn_w_fill' sH='btn_h_fill' sR='btn_r_half' onClick={toggleType}>
               {type === 'text' ? <EyeOpenSVG /> : <EyeCloseSVG />}
            </ButtonAction>
         </div>
      </div>
   );
};

export default memo(Search);