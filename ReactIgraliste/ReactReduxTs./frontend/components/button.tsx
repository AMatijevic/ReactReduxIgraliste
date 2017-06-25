import * as React from 'React';

interface IButtonProps {
    countValue: number;
    onClickFunc: React.EventHandler<any>
}

const Button = (props: IButtonProps) => {

    const handleClick = () => {
        props.onClickFunc(props.countValue);
    }

    return (<button onClick={handleClick}>+{props.countValue}</button>);
}

export default Button;