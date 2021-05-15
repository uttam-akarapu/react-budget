import React from 'react'
import PropTypes from 'prop-types';
import {Button} from "semantic-ui-react";

const ButtonOkCancel = props => {
    return (
        <Button.Group style={{marginTop:20}}>
          <Button primary onClick={()=>props.addEntryHandler(props.desc,props.value)}>Ok</Button>
          <Button.Content/>
          <Button secondary onClick={props.resetEntryHandler}>Cancel</Button>
        </Button.Group>
    )
}

ButtonOkCancel.propTypes = {

}

export default ButtonOkCancel
