import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from 'antd';

import Router from './routes/routes';

const App = () => {
    return (
        <BrowserRouter>
            <ConfigProvider
                theme={{ hashed: false }}
            >
                <Router />
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;
