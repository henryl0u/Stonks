import React, { JSX } from 'react'
import './Card.css'

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
    return (
        <div className='card'>
            <img src='https://picsum.photos/200/300' alt='Card Image' />
            <div className='details'>
                <h2>{companyName} ({ticker})</h2>
                <p>${price}</p>
            </div>
            <p className='info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa culpa aliquam tempora odit omnis excepturi alias dolorem. Reiciendis, dolores! Nostrum ducimus iure similique recusandae ex unde reiciendis blanditiis dicta ullam!</p>
        </div>
    )
}

export default Card