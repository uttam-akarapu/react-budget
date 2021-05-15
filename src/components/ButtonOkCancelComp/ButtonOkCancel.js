import React from 'react'
import PropTypes from 'prop-types';
import {Button} from "semantic-ui-react";

const ButtonOkCancel = props => {
    return (
        <Button.Group style={{marginTop:20}}>
          <Button primary>Ok</Button>
          <Button.Content/>
          <Button secondary>Cancel</Button>
        </Button.Group>
    )
}

ButtonOkCancel.propTypes = {

}

export default ButtonOkCancel
