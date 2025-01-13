import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/styles.scss';

import './styles/fonts/Nexa-ExtraLight.ttf';
import './styles/fonts/Nexa-Heavy.ttf';

import { GlobalProvider } from 'contexts/GlobalContext';

import App from './App';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </StrictMode>,
);
