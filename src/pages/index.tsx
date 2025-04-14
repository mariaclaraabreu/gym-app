import { ReactNode } from 'react';

import Body from './Body';
import Home from './Home';
import Statistics from './Statistics';

export const Pages: Record<string, ReactNode> = {
    home: <Home/>,
    statistics: <Statistics/>,
    body: <Body />,
};
