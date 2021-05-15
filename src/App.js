import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Header,
  Statistic,
  Segment,
  Grid,
  Icon,
  Form,
  Button,
  ButtonGroup,
} from "semantic-ui-react";

import MainHeader from "./components/MainHeader/MainHeader";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import BalanceAmt from "./components/BalanceAmt/BalanceAmt";
import History from "./components/History/History";
import IncomeExpBalance from "./components/IncExpBalance/IncomeExpBalance";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <BalanceAmt size="small" expenses="Balance :" value="2,500.00" />
      <IncomeExpBalance />

      <MainHeader title="History" type="h3" textAlign="left" />
      <History isExpense={true} desc="abcd" value="$100.00" />
      <History isExpense={false} desc="efgh" value="$200.00" />
      <History isExpense={true} desc="ijkl" value="$300.00" />

      <MainHeader title="Add New Transaction" type="h3" textAlign="left" />
      <TransactionForm />
    </Container>
  );
}

export default App;
