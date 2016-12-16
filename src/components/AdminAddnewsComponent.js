'use strict';

import React from 'react';

require('styles//Admin.scss');

class AdminAddnewsComponent extends React.Component {
  render() {
    return (
      <div className="addnews-box">
        <div className="close">关闭</div>
        <div className="wrap">
          <form>
            <p>
              <label htmlFor="addtitle">新闻标题</label>
              <input type="text" id="addtitle" className="title" name="title"/>
            </p>
            <p>
              <label htmlFor="addimg">图片地址</label>
              <input type="text" id="addimg" className="img" name="img"/>
            </p>
            <p>
              <label htmlFor="adddesc">新闻描述</label>
              <input type="text" id="adddesc" className="desc" name="desc"/>
            </p>
            <p>
              <label htmlFor="addnewstype">新闻栏目 </label>
              <select id="addnewstype" className="newstype" name="newstype">
                <option>全部</option>
                <option value="百家">百家</option>
                <option value="图片">图片</option>
                <option value="娱乐">娱乐</option>
                <option value="社会">社会</option>
                <option value="军事">军事</option>
                <option value="女人">女人</option>
                <option value="搞笑">搞笑</option>
                <option value="科技">科技</option>
                <option value="互联网">互联网</option>
              </select>
            </p>
            <p>
              <label htmlFor="addcontent">新闻内容</label>
              <textarea name="content" id="addcontent" className="content"/>
            </p>
            <p>
              <label htmlFor="addtime">时间</label>
              <input type="text" id="addtime" className="addtime" name="time"/>
            </p>
            <p className="center">
              <input type="submit" id="add-btn" className="box-btn" value="提交"/>
              <input type="reset" className="box-btn" value="重置"/>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

AdminAddnewsComponent.displayName = 'AdminAddnewsComponent';

// Uncomment properties you need
// AdminAddnewsComponent.propTypes = {};
// AdminAddnewsComponent.defaultProps = {};

export default AdminAddnewsComponent;
