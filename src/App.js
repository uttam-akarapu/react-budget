import logo from "./logo.svg";
import "./App.css";
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader/MainHeader";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import BalanceAmt from "./components/BalanceAmt/BalanceAmt";
import HistoryData from "./components/History/HistoryData";
import IncomeExpBalance from "./components/IncExpBalance/IncomeExpBalance";
import { useState } from "react";


function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [value, setValue] = useState('');
const [desc, setdesc] = useState('');

  const deleteEntryHandler = (id) =>{
      const deletedEntry = entries.filter(entry => entry.id !== id);
      setEntries(deletedEntry);
  }

  const addEntryHandler = (desc,val) => {
      const result = entries.concat({
          id:entries.length+1,
          desc:desc,
          value:val
      })
      setEntries(result);
      
  }
 


  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <BalanceAmt size="small" expenses="Balance :" value="2,500.00" textAlign="left"/>
      <IncomeExpBalance />

      <MainHeader title="History" type="h3" textAlign="left" />
      <HistoryData deleteEntryHandler={deleteEntryHandler} entries={entries}/>
            

      <MainHeader title="Add New Transaction" type="h3" textAlign="left" />
      <TransactionForm addEntryHandler={addEntryHandler}/>
    </Container>
  );
}

export default App;

const initialEntries = [
  {
    id:1,
    desc:"Salary",
    isExpense:false,
    value:"$1000.00"
  },
  {
   id:2,
    desc:"Current Bill",
    isExpense:true,
    value:"$200.00"
  },
  {
    id:3,
    desc:"Water Bill",
    isExpense:true,
    value:"$50.00"
}
];



