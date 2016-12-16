'use strict';

import React from 'react';

require('styles//Admin.scss');

class AdminUpdatenewsComponent extends React.Component {
  render() {
    return (
      <div className="updatenews-box">
        <div className="close">关闭</div>
        <div className="wrap">
          <form>
            <p>
              <label htmlFor="updatetitle">新闻标题</label>
              <input type="text" className="title" id="updatetitle" name="title"/>
            </p>
            <p>
              <label htmlFor="updateimg">图片地址</label>
              <input type="text" className="img" id="updateimg" name="img"/>
            </p>
            <p>
              <label htmlFor="updatedesc">新闻描述</label>
              <input type="text" className="desc" id="updatedesc" name="desc"/>
            </p>
            <p>
              <label htmlFor="updatecontent">新闻内容</label>
              <textarea name="content" id="updatecontent" className="content"/>
            </p>
            <p>
              <label htmlFor="updatetime">时间</label>
              <input type="text" className="time" id="updatetime" name="time"/>
            </p>
            <p className="center">
              <input type="submit" id="update-btn" className="box-btn" value="提交"/>
              <input type="reset" value="重置" className="box-btn"/>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

AdminUpdatenewsComponent.displayName = 'AdminUpdatenewsComponent';

// Uncomment properties you need
// AdminUpdatenewsComponent.propTypes = {};
// AdminUpdatenewsComponent.defaultProps = {};

export default AdminUpdatenewsComponent;
