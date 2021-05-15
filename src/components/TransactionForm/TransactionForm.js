import React from 'react';
import PropTypes from 'prop-types';
import ButtonOkCancel from "../ButtonOkCancelComp/ButtonOkCancel";
import {Form} from "semantic-ui-react";

const TransactionForm = props => {
    return (
        <Form unstackable>
      <Form.Group>
        <Form.Input placeholder="Enter" label="Description" width={12} icon=""></Form.Input>
        <Form.Input placeholder="value" label="Value" width={4} icon="rupee" iconPosition="left"></Form.Input>
      </Form.Group>
       
      <ButtonOkCancel/>      
    </Form>
    )
}

TransactionForm.propTypes = {

}

export default TransactionForm;
