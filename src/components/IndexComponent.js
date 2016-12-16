'use strict';

import React from 'react';

require('styles//Index.scss');

class IndexComponent extends React.Component {
  render() {
    return (
      <div className="index-component">
        <div id="container">
          <header>
            <div className="top">
              <div className="top-left">
                <div className="top-left-baidu">
                  <a href="http://m.baidu.com"></a>
                </div>
                <div className="top-left-userhome">
                  <a href="http://m.news.baidu.com/news#userhome"></a>
                </div>
              </div>
              <div className="top-middle"></div>
              <div className="top-right">
                <div className="top-right-search">
                  <a href="http://m.news.baidu.com/news#searchbox"></a>
                </div>
                <div className="top-right-subscribe">

                </div>
              </div>
            </div>
            <nav>
              <div className="nav-line"></div>
              <div className="content">
                <table>
                  <tbody>
                  <tr>
                    <td><a href="/"><div id="nav-all"><b></b><span>全部</span></div></a></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="nav-line"></div>

            </nav>
          </header>
          <article>
            <div id="article">
              <div className="list">

              </div>

            </div>
          </article>
        </div>
      </div>
    );
  }
}

IndexComponent.displayName = 'IndexComponent';

// Uncomment properties you need
// IndexComponent.propTypes = {};
// IndexComponent.defaultProps = {};

export default IndexComponent;
