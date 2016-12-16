'use strict';

import React from 'react';

require('styles//Admin.scss');

class AdminHeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <p>百度新闻demo后台</p>
        </div>
        <div id="headernav">
        </div>
      </header>
    );
  }
}

AdminHeaderComponent.displayName = 'AdminHeaderComponent';

// Uncomment properties you need
// AdminHeaderComponent.propTypes = {};
// AdminHeaderComponent.defaultProps = {};

export default AdminHeaderComponent;
