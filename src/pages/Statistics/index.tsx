import { useState } from 'react';

import { Row, Col, Typography } from 'antd';

import Button from 'components/Button';
import Card from 'components/Card';

const { Title } = Typography;

import './styles.scss';

const Statistics = () => {
    const [currentSelectedTab, setCurrentSelectedTab] = useState(1);

    const options = [
        {
            key: 1,
            label: '7 dias',
        },
        {
            key: 2,
            label: '14 dias',
        },
        {
            key: 3,
            label: '30 dias',
        },
    ];

    const cardFakeData = [
        {
            key: 1,
            content: (1 === currentSelectedTab && '05:25:00' ) || (2 === currentSelectedTab && '25:10:00') || '79:25:20',
            title: 'Horas',
        },
        {
            key: 2,
            content: (1 === currentSelectedTab && '45') || (2 === currentSelectedTab && '80') || '120',
            title: 'Exercícios',
        },
        {
            key: 3,
            content: (1 === currentSelectedTab && '145') || (2 === currentSelectedTab && '250') || '350',
            title: 'Séries',
        },
        {
            key: 4,
            content: '781',
            title: 'Repetições',
        },
        {
            key: 5,
            content: '1200 Kcal',
            title: 'Calorias',
        },
        {
            key: 6,
            content: '125 dias',
            title: 'Dias de treino',
        },

    ];

    const getContent = () => {
        return (
            <Row>
                {
                    cardFakeData.map(({ key, content, title }) => {
                        return (
                            <Col key={key} span={12} style={{ padding: 10 }}>
                                <Card
                                    content={content}
                                    title={title}
                                />
                            </Col>
                        );
                    })
                }
            </Row>
        );
    };

    return (
        <div className="ga-statistics-page">
            <Row justify={'center'}>
                <Col span={24}>
                    <Title level={2}>Estatísticas</Title>
                </Col>
            </Row>

            <Row justify={'center'} gutter={16}>
                <Col span={24}>
                    <Row>
                        {
                            options.map(({ key, label }) => {
                                return (
                                    <Col span={8}>
                                        <Button
                                            className='ga-tab-button'
                                            key={key}
                                            onClick={() => setCurrentSelectedTab(key)}
                                            isFocused={key === currentSelectedTab}
                                            block
                                        >
                                            {label}
                                        </Button>
                                    </Col>
                                );
                            })
                        }
                    </Row>

                    {getContent()}

                </Col>
            </Row>
        </div>
    );
};

export default Statistics;
