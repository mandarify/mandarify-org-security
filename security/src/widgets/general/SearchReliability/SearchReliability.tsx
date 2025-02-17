import { useCallback, useState } from "react";
import { Search } from "../../../shared/ui/general";
import { ButtonAction } from "../../../shared/ui/buttons";
import { ReliabilitySVG } from "../../../shared/icons";
import "./SearchReliability.css";


const SearchReliability = () => {

   console.log('%c\t📁 Widgets: SearchReliability', 'color: white; font-size: 14px; font-weight: bold;');


   const [value, setValue] = useState<string>('');

   const onChange = useCallback((newValue: string) => {
      setValue(newValue);
   }, [value]);

   const onClick = useCallback(() => {
      console.log('%c\n\t🛠 Test: Click Проверить', 'color: gray; font-size: 12px; font-weight: bold;');
      console.log(`%c\t🛠 Result: ${value}\n`, 'color: gray; font-size: 12px; font-weight: bold;');
   }, [value]);

   return (
      <div className="search-reliability">
         <Search currentValue={value} onChangeValue={onChange} />
         <ButtonAction onClick={onClick} text='Проверить' sView='btn-custom_green' sR='btn_r_half' ><ReliabilitySVG /></ButtonAction>
      </div>
   );
};

export default SearchReliability;