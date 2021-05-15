import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'semantic-ui-react';

const BalanceAmt = props => {
    return (
        <Statistic size={props.size} color={props.color}>
                <Statistic.Label>{props.expenses}</Statistic.Label>
                <Statistic.Value>{props.value}</Statistic.Value>
              </Statistic>
    )
}

BalanceAmt.propTypes = {

}

export default BalanceAmt
