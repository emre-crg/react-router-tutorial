import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  //const [date, setDate] = useState();

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.com/v2/shop/br');
    const item = await data.json();
    


    console.log(item.data.daily.entries)
    setItems(item.data.daily.entries);
    //setDate(item.data.date);
  };

  return (
    
    <div>
        {items.map(item => (
          <h1 key={item.offerId}>
          <Link to={`/shop/${item.offerId}`}>{item.devName}</Link>
          </h1> 
        ))}
    </div>
  );
}

export default Shop; 
