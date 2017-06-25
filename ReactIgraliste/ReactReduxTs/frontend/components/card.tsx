import * as React from 'react'
interface ICardProps {
    imageUrl?: string,
    name: string,
    company: string
}

const defaultProps: ICardProps = {
    imageUrl: 'https://image.flaticon.com/icons/svg/236/236832.svg',
    name: 'Bosko',
    company: 'Google'
}

const Card: React.SFC<ICardProps> = (props: ICardProps) => {
    return <div style={{ display: 'flex'}}>
        <img style={{ height: 100, borderRadius:65 }} src={props.imageUrl}></img>
        <div style={{ paddingLeft: 10 }}>
            <p>{props.name}</p>
            <p>{props.company}</p>
        </div>
    </div>
}
Card.defaultProps = defaultProps;

export default Card;