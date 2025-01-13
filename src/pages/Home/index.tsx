import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row, Space, Typography } from 'antd';

import Button from 'components/Button';
import Progress from 'components/Progress';
import Table from 'components/Table';

const { Title } = Typography;

import './styles.scss';

const Home = () => {
    return (
        <div className='ga-home-page'>
            <Row justify={'center'}>
                <Col span={24}>
                    <Title level={2}>Meus treinos</Title>
                </Col>

                <Col md={24}>
                    <Space align='baseline' size={30}>
                        <Button size={'large'} shape='circle' icon={<LeftOutlined />} />

                        <Title level={5}>Semana 03</Title>

                        <Button size={'large'} shape='circle' icon={<RightOutlined />} />
                    </Space>
                </Col>
            </Row>

            <Row justify={'center'} style={{ marginTop: 30 }}>
                <Col>
                    <Row style={{ marginBottom: 10 }}>
                        <Col span={12}>
                            <Title style={{ textAlign: 'left' }} level={5}>Segunda-feira - 02/12</Title>
                        </Col>

                        <Col span={2} offset={10}>
                            <Progress />
                        </Col>
                    </Row>
                    <Table />
                </Col>
            </Row>

            <Row justify={'center'} style={{ marginTop: 30 }}>
                <Col>
                    <Row style={{ marginBottom: 10 }}>
                        <Col span={12}>
                            <Title style={{ textAlign: 'left' }} level={5}>Terça-feira - 03/12</Title>
                        </Col>

                        <Col span={2} offset={10}>
                            <Progress />
                        </Col>
                    </Row>
                    <Table />
                </Col>
            </Row>

            <Row justify={'center'} style={{ marginTop: 30 }}>
                <Col>
                    <Row style={{ marginBottom: 10 }}>
                        <Col span={12}>
                            <Title style={{ textAlign: 'left' }} level={5}>Quarta-feira - 04/12</Title>
                        </Col>

                        <Col span={2} offset={10}>
                            <Progress />
                        </Col>
                    </Row>
                    <Table />
                </Col>
            </Row>
        </div>
    );
};

export default Home;
