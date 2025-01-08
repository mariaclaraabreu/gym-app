import { AuditOutlined, HomeOutlined, LineChartOutlined, SwitcherOutlined } from '@ant-design/icons';

import './styles.scss';

import { Space } from 'antd';

import Button from 'components/Button';

const Menu = () => {
    return (
        <div className="ga-menu">
            <Space size={50}>
                <Button icon={<HomeOutlined />}>Início</Button>
                <Button icon={<LineChartOutlined />}>Estatísticas</Button>
                <Button icon={<AuditOutlined />}>Corpo</Button>
                <Button icon={<SwitcherOutlined />}>Exercícios</Button>
            </Space>
        </div>
    );
};

export default Menu;
