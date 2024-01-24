import React from 'react'
import CoinRow from './CoinRow'

const titles = ['#', 'COIN', 'PRICE', 'PRICE CHANGE', '24H VOLUME'];

const TableCoin = ({coins}) => {
  return (
    <table>
      <thead>
        <tr>
          {
            titles.map((title, index) => (
              <td key={index}>{title}</td>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          coins.map((coin, index) => (
            <CoinRow coin={coin} key={index} index={index + 1} />
          ))
        }
      </tbody>
    </table>
  )
}

export default TableCoin
