import { Row } from 'antd';

import { LineChart } from '@mui/x-charts';

const Body = () => {
    return (
        <Row
            justify={'center'}
            className='ga-chart'
        >
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        area: true,
                    },
                ]}
                width={500}
                height={300}
                colors={['#C197D2']}
            />
        </Row>
    );
};

export default Body;
