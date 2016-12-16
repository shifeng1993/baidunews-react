'use strict';

import React from 'react';

require('styles//Admin.scss');

class AdminArticleNavComponent extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-title">————导航栏—————</div>
        <div className="nav-close">关闭</div>
        <div className="nav-info">
            <div className="info-title">全部</div>
        </div>
      </nav>
    );
  }
}

AdminArticleNavComponent.displayName = 'AdminArticleNavComponent';

// Uncomment properties you need
// AdminArticleNavComponent.propTypes = {};
// AdminArticleNavComponent.defaultProps = {};

export default AdminArticleNavComponent;
