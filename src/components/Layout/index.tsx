import { Layout as LayoutAntd } from 'antd';

import Carousel from 'components/Carousel';

const { Header, Content } = LayoutAntd;

import './styles.scss';

import { useContext } from 'react';

import Menu from 'components/Menu';
import { GlobalContext } from 'contexts/GlobalContext';
import { Pages } from 'pages';

type LayoutParams = {
    displayCarousel?: boolean,
    children?: React.ReactNode
}

const Layout = ({
    displayCarousel = true,
}: LayoutParams) => {
    const { currentSelectedPageContent } = useContext(GlobalContext);

    return (
        <LayoutAntd className='ga-layout'>
            <Header>
                <h1>Gym app</h1>
            </Header>
            <section>
                {displayCarousel && <Carousel />}
            </section>
            <Content className='ga-page-content'>
                {Pages[currentSelectedPageContent]}
            </Content>
            <Menu />
        </LayoutAntd>
    );
};

export default Layout;
