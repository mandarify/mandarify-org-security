import { memo, useCallback, useState } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import { LockSVG, EyeOpenSVG } from "../../../icons";
import "./Search.css";
import { ButtonAction } from "../../buttons";


interface ISearch {
   onChangeValue: (newValue: string) => void,
}


const Search = ({ onChangeValue }: ISearch) => {

   const placeholder: string = 'Введите пароль для проверки его надежности от взлома.';

   const [value, setValue] = useState<string>('');
   const [type, setType] = useState<'text' | 'password'>('text');

   const toggleType = useCallback(() => setType((prev) => prev === 'text' ? 'password' : 'text'), []);
   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(() => {
         const newValue: string = e.target.value;
         onChangeValue(newValue);
         return newValue;
      });
   };

   return (
      <div className="search">
         <input className="search__input" type={type} value={value} onChange={onChange} placeholder={placeholder} />
         <div className="search__icon search__icon_lock _unuse"><SvgIcon iconSize={14}><LockSVG /></SvgIcon></div>
         <div className="search__icon search__icon_eye">
            <ButtonAction iconSize={14} sView='btn_transparent' sW='btn_w_fill' sH='btn_h_fill' sR='btn_r_half' onClick={toggleType}><EyeOpenSVG /></ButtonAction>
         </div>
      </div>
   );
};

export default memo(Search);