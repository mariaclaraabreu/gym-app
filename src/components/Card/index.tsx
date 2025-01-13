import { Card as CardAntd, CardProps, Typography } from 'antd';

const { Title, Text } = Typography;

import './styles.scss';

type CardParams = {
    content: string,
    title: string,
    description?: string,
} & CardProps;

const Card = ({
    content,
    title,
    description,
    ...otherProps
}: CardParams) => {
    return (
        <CardAntd
            className='ga-card'
            title={
                <>
                    <Title style={{ marginBottom: -5 }} level={5}>{title}</Title>
                    {description && <Text type='secondary'>{description}</Text>}
                </>
            }
            {...otherProps}
        >
            {content}
        </CardAntd>
    );
};

export default Card;
