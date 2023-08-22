import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@/assets/icons/index';
import { StoresProvider, stores } from './store/index.ts';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <StoresProvider value={stores}>
                <App />
            </StoresProvider>
        </BrowserRouter>
    </React.StrictMode>
);
