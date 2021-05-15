
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const MainHeader = props => {
    return (
        <Header as={props.type}> {props.title} </Header>
    )
}

MainHeader.propTypes = {

}

export default MainHeader
