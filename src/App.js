import logo from "./logo.svg";
import "./App.css";
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader/MainHeader";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import BalanceAmt from "./components/BalanceAmt/BalanceAmt";
import History from "./components/History/History";
import HistoryData from "./components/History/HistoryData";
import IncomeExpBalance from "./components/IncExpBalance/IncomeExpBalance";
import { useState } from "react";

function App() {
 
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <BalanceAmt size="small" expenses="Balance :" value="2,500.00" />
      <IncomeExpBalance />

      <MainHeader title="History" type="h3" textAlign="left" />
      <HistoryData/>
            

      <MainHeader title="Add New Transaction" type="h3" textAlign="left" />
      <TransactionForm />
    </Container>
  );
}

export default App;


