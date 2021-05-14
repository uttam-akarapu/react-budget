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

function App() {
  return (
    <Container>
      <Header as="h1"> Budget </Header>

      <Statistic size="small">
        <Statistic.Label>Your Balance: </Statistic.Label>
        <Statistic.Value>2,500.00</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "center" }}>
                  Incoming:
                </Statistic.Label>
                <Statistic.Value>1000.00</Statistic.Value>
              </Statistic>
            </Grid.Column>

            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label>Expenses:</Statistic.Label>
                <Statistic.Value>500.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3" textAlign="left">
        History
      </Header>
      <Segment color="red">
        <Grid colums={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={10}>
              XXXX
            </Grid.Column>
            <Grid.Column textAlign="right" width={3}>
              XXXX
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid colums={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={10}>
              XXXX
            </Grid.Column>
            <Grid.Column textAlign="right" width={3}>
              XXXX
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid colums={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={10}>
              XXXX
            </Grid.Column>
            <Grid.Column textAlign="right" width={3}>
              XXXX
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    <Header as="h3">Add New Transaction</Header>
    <Form unstackable>
      <Form.Group>
        <Form.Input placeholder="Enter" label="Description" width={12} icon=""></Form.Input>
        <Form.Input placeholder="value" label="Value" width={4} icon="rupee" iconPosition="left"></Form.Input>
      </Form.Group>
        <Button.Group style={{marginTop:20}}>
          <Button primary>Ok</Button>
          <Button.Content/>
          <Button secondary>Cancel</Button>
        </Button.Group>
      
    </Form>


    </Container>
  );
}

export default App;
