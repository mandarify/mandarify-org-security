import { Outlet } from "react-router-dom";


const Layout = () => {
   return (
      <div className="app">
         <div className="app-container">

            <main className="main">

               <Outlet />

            </main>

         </div>
      </div>
   );
};


export default Layout;