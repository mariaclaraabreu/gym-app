import { Progress as ProgressAntd } from 'antd';

import './styles.scss';

const Progress = () => {
    return (
        <ProgressAntd
            type="circle"
            percent={80}
            size={30}
        />
    );
};

export default Progress;
