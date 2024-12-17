import { Button as ButtonAntd, ButtonProps } from 'antd';

import classNames from 'classnames';

import './styles.scss';

type ButtonParams = {
    children?: string;
    icon?: React.ReactNode,
    typeButton?: 'primary' | 'secondary' | 'light',
} & ButtonProps;

const Button = ({
    children,
    icon,
    typeButton = 'primary',
    shape = 'default',
}: ButtonParams) => {
    const classes = classNames(
        typeButton,
    );

    return (
        <ButtonAntd
            className={classes}
            icon={icon}
            shape={shape}
        >
            {children}
        </ButtonAntd>
    );
};

export default Button;
