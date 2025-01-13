import { useContext } from 'react';

import './styles.scss';

import { AuditOutlined, HomeOutlined, LineChartOutlined, SwitcherOutlined } from '@ant-design/icons';
import { Space } from 'antd';

import Button from 'components/Button';
import { GlobalContext } from 'contexts/GlobalContext';

const Menu = () => {
    const { setCurrentSelectedPageContent } = useContext(GlobalContext);

    const options = [
        {
            id: 'home',
            label: 'Início',
            icon: <HomeOutlined />,
        },
        {
            id: 'statistics',
            label: 'Estatísticas',
            icon: <LineChartOutlined />,
        },
        {
            id: 'body',
            label: 'Corpo',
            icon: <AuditOutlined />,
        },
        {
            id: 'excercises',
            label: 'Exercícios',
            icon: <SwitcherOutlined />,
        },
    ];

    return (
        <div className="ga-menu">
            <Space size={50}>
                {
                    options.map(({ id, label, icon }) => {
                        return <Button key={id} icon={icon} onClick={() => setCurrentSelectedPageContent(id)}>{label}</Button>;
                    })
                }
            </Space>
        </div>
    );
};

export default Menu;
