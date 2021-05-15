import React, { useState } from "react";
import PropTypes from "prop-types";
import ButtonOkCancel from "../ButtonOkCancelComp/ButtonOkCancel";
import { Form } from "semantic-ui-react";

const TransactionForm = (props) => {
  const [value, setValue] = useState("");
  const [desc, setdesc] = useState("");

  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          placeholder="Enter"
          label="Description"
          width={12}
          icon=""
          onChange={(e) => setdesc(e.target.value)}
          value={desc}
        />
        <Form.Input
          placeholder="value"
          label="Value"
          width={4}
          icon="rupee"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>

      <ButtonOkCancel
        addEntryHandler={props.addEntryHandler}
        desc={desc}
        value={value}
      />
    </Form>
  );
};

TransactionForm.propTypes = {};

export default TransactionForm;
