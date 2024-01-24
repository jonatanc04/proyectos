import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoin from './comps/TableCoin';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [coins, setCoins] = useState([]);
  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1");
    console.log(res.data);
    setCoins(res.data);
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className='container'>
      <div className='row'>
        <TableCoin coins={coins}/>
      </div>
    </div>
  );
}

export default App;
