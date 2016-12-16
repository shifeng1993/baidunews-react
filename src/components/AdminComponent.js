'use strict';

import React from 'react';
require('styles//Admin.scss');

import Header from './AdminHeaderComponent';
import Article from './AdminArticleComponent';
import Addnews from './AdminAddnewsComponent';
import Updatenews from './AdminUpdatenewsComponent';

class AdminComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

  }

  render() {
    return (
      <div className="admin-component">
        <div className="container-fluid">
          <Header/>
          <Article/>
          <footer>
            <span>Power by shifeng</span>
          </footer>
          <div className="mask"></div>
          <Addnews/>
          <Updatenews/>
        </div>
      </div>
    )
  }
}

AdminComponent.displayName = 'AdminComponent';

// Uncomment properties you need
// AdminComponent.propTypes = {};
// AdminComponent.defaultProps = {};

export default AdminComponent;
