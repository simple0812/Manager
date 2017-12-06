import React from 'react';
import PropTypes from 'prop-types';

class EmptyLayout extends React.Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default EmptyLayout;
