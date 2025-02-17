import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";

import { APP_CONFIG as AC } from "../../shared/data/app.config";


const AppRouter = () => {
   return (
      <Routes>

         <Route path="/" element={<Layout />}>

            <Route index element={<Navigate to={'ru'} replace />} />

            <Route path={AC.path.home} element={<h1>Главная</h1>} />
            <Route path={AC.path.generator} element={<h1>Генератор</h1>} />
            <Route path={AC.path.reliability} element={<h1>Безопасность</h1>} />
            <Route path={AC.path.blog} element={<h1>Блог</h1>} />

            <Route path="*" element={<Navigate to={AC.path.notFound} replace />} />
            <Route path={AC.path.notFound} element={<h1>404</h1>} />

         </Route>

      </Routes>
   );
};


export default AppRouter;