import { Button as ButtonAntd, ButtonProps } from 'antd';

import classNames from 'classnames';

import './styles.scss';

type ButtonParams = {
    children?: string;
    icon?: React.ReactNode,
    isFocused?: boolean,
    typeButton?: 'primary' | 'secondary' | 'light',
} & ButtonProps;

const Button = ({
    children,
    icon,
    typeButton = 'primary',
    shape = 'default',
    isFocused = false,
    className,
    ...otherProps
}: ButtonParams) => {
    const classes = classNames(
        className,
        typeButton,
        isFocused ? 'focused' : '',
    );

    return (
        <ButtonAntd
            className={classes}
            icon={icon}
            shape={shape}
            {...otherProps}
        >
            {children}
        </ButtonAntd>
    );
};

export default Button;
