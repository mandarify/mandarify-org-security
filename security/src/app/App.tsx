import { Header as DesktopHeader } from "../widgets/desktop/index";
import { BrowserRouter } from "react-router-dom";
import AppLocation from "./location/AppLocation";
import AppRouter from "./router/AppRouter";


const AppContent = () => {

   console.log('%c🔥 Application\n', 'color: tomato; font-size: 15px; font-weight: bold;');

   return (
      <>
         <DesktopHeader />
         <AppRouter />
      </>
   );
};

const App = () => {
   return (
      <BrowserRouter>
         <AppLocation>

            <AppContent />

         </AppLocation>
      </BrowserRouter>
   );
};

export default App
