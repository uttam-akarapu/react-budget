import React, { useState } from 'react';
import PropTypes from 'prop-types'
import History from './History';

const HistoryData = props => {
   

    return (
        <>
        {
            props.entries.map(item =>{
    
              return(
                <History key={item.id} deleteEntryHandler={props.deleteEntryHandler} isExpense={item.isExpense} desc={item.desc} value={item.value} id={item.id}/>
              )          
            })        
          }
          </>
    )
}

HistoryData.propTypes = {

}

export default HistoryData;

