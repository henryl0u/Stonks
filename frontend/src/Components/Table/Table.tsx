import React from 'react'
import { testIncomeStatementData } from './testData'

type Props = {
    config: any,
    data: any
};



const Table = ({config, data}: Props) => {
    const renderHeaders = config.map((config: any) => {
        return (
            <th className='p-4 text-left text-xs font-medium text-fray-500 uppercase tracking-wider' key={config.label}>{config.label}</th>
        );
    })
    const renderedRows = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((val: any) => {
                    return (
                        <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>{val.render(company)}</td>
                    );
                }
                )}
            </tr>
        )
    })
    return (<div className='bg-white shadow rounded-lg p-4 sm:o-6 xl:p-8'>
        <table>
            <thead className='min-w-full divide-y divide=gray-200 m-5'>
                {renderHeaders}
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    </div>)
}

export default Table