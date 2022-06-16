import RestaurantTableItem from "../RestaurantTableItem/RestaurantTableItem";
import { useState } from 'react';

export default function RestaurantListTable({restaurants, selected, setSelected }){
    const tableItem = restaurants.map((r, idx) => <RestaurantTableItem idx={idx+1} restaurant={r} key={idx} selected={selected} setSelected={setSelected} />)
    const[displayTable, setDisplayTable] = useState(true);
    return(
        <>
        {
            displayTable ?
            <>
            <h3>Restaurant List</h3>
            <div className="RestaurantListTable">{tableItem}</div>
            <button onClick={() => setDisplayTable(false)}>Hide Restaurants</button>
            </>
            :
            <>
            <h3>Restaurant List</h3>
            <button onClick={() => setDisplayTable(true)}>View Restaurants</button>
            </>
        }
        </>
    )
}