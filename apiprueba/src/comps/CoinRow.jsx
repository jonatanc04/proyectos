import React from 'react'

const CoinRow = ({ coin, index }) => {
  return (
    <tr key={coin.name}>
      <td>{index}</td>
      <td>
        <img src={coin.image} alt={coin.name} style={{ width: '3%' }} />
        <span>{coin.name}</span>
        <span className='ms-3 text-uppercase text-muted'>{coin.symbol}</span>
      </td>
      <td>{coin.current_price}</td>
      <td>{coin.price_change_percentage_24h}</td>
      <td>{coin.total_volume}</td>
    </tr>
  )
}

export default CoinRow