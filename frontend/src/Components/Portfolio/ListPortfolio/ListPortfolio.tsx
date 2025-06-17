import React, { SyntheticEvent } from 'react'
import Cardportfolio from '../CardPortfolio/Cardportfolio';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e : SyntheticEvent) => void;
}

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    <div>
        <h3>Portfolio</h3>
        <ul>
            {portfolioValues && portfolioValues.map((value) => (
                <Cardportfolio portfolioValue={value} onPortfolioDelete={onPortfolioDelete}/>
            ))}
        </ul>
    </div>
  )
}

export default ListPortfolio