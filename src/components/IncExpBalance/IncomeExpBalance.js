import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Grid } from 'semantic-ui-react';
import BalanceAmt from "../BalanceAmt/BalanceAmt";

const IncomeExpBalance = props => {
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <BalanceAmt size="tiny" color="green" expenses="Incoming:" value="1000.00"/>
            </Grid.Column>

            <Grid.Column>
             <BalanceAmt size="tiny" color="red" expenses="Expenses:" value="500.00"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

IncomeExpBalance.propTypes = {

}

export default IncomeExpBalance
