import { Layout as LayoutAntd } from 'antd';

import Carousel from 'components/Carousel';

const { Header, Footer, Content } = LayoutAntd;

import './styles.scss';

type LayoutParams = {
    displayCarousel?: boolean,
    children: React.ReactNode
}

const Layout = ({
    displayCarousel = true,
    children,
}: LayoutParams) => {
    return (
        <LayoutAntd className='ga-layout'>
            <Header>
                <h1>Gym app</h1>
            </Header>
            <section>
                {displayCarousel && <Carousel />}
            </section>
            <Content className='ga-page-content'>
                {children}
            </Content>
            <Footer>Developed by MC Softwares</Footer>
        </LayoutAntd>
    );
};

export default Layout;
