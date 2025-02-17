import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


export interface IAppLocation {
   children: React.ReactNode
};


const AppLocation = ({ children }: IAppLocation) => {

   const location = useLocation();
   // const navigate = useNavigate();

   useEffect(() => {

      scrollTo({ top: 0 });
      console.log(`%c\tPath: ${location.pathname}`, 'color: green');

      if (location.pathname === '/404') {
         console.log(`%c\tPath Eror: ${location.pathname}`, 'color: red');
         return;
      }

   }, [location]);

   return children;
};


export default AppLocation;