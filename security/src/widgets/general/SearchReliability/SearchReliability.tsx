import { memo, useCallback, useState } from "react";
import { Search } from "../../../shared/ui/general";
import { ButtonHref } from "../../../shared/ui/buttons";
import { ReliabilitySVG } from "../../../shared/icons";
import "./SearchReliability.css";


const SearchReliability = () => {

   const [value, setValue] = useState<string>('');

   const onChangeValue = useCallback((newValue: string) => {
      setValue(newValue);
      console.log(value);
   }, []);

   return (
      <div className="search-reliability">
         <Search onChangeValue={onChangeValue} />
         <ButtonHref href='#' iconSize={16} text='Проверить' sView='btn-custom_green' sR='btn_r_half'><ReliabilitySVG /></ButtonHref>
      </div>
   );
};

export default memo(SearchReliability);