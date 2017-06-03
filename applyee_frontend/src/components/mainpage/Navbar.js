import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';

const propTypes = {
};
const defaultProps = {
};

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Link to="/login">로그인</Link>
            </div>
        );
    }
}
Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
export default Navbar;
