import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';

import "./app/style/index.css";


createRoot(document.getElementById('wrapper')!).render(
   <StrictMode>
      <App />
   </StrictMode>,
);
