'use strict';

import React from 'react';
require('styles//Admin.scss');
import Nav from './AdminArticleNavComponent';
import Info from './AdminArticleInfoComponent';

class AdminArticleComponent extends React.Component {
  render() {
    return (
      <article>
        <Nav/>
        <Info/>
      </article>
    );
  }
}

AdminArticleComponent.displayName = 'AdminArticleComponent';

// Uncomment properties you need
// AdminArticleComponent.propTypes = {};
// AdminArticleComponent.defaultProps = {};

export default AdminArticleComponent;
