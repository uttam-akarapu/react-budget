import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid, Icon } from 'semantic-ui-react';

const History = props => {
    return (
        <Segment color={`${props.isExpense ? "red":"green"}`}>
        <Grid colums={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={10}>
              {props.desc}
            </Grid.Column>
            <Grid.Column textAlign="right" width={3}>
              {props.value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" onClick={()=>props.deleteEntryHandler(props.id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

History.propTypes = {

}

export default History;
