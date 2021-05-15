import React, { useState } from 'react';
import PropTypes from 'prop-types'
import History from './History';

const HistoryData = props => {
    const [entries, setEntries] = useState(initialEntries);
    return (
        <>
        {
            entries.map(item =>{
    
              return(
                <History isExpense={item.isExpense} desc={item.desc} value={item.value} />
              )          
            })        
          }
          </>
    )
}

HistoryData.propTypes = {

}

export default HistoryData;

const initialEntries = [
    {
      desc:"Salary",
      isExpense:false,
      value:"$1000.00"
    },
    {
      desc:"Current Bill",
      isExpense:true,
      value:"$200.00"
    },
    {
      desc:"Water Bill",
      isExpense:true,
      value:"$50.00"
  }
  ];
