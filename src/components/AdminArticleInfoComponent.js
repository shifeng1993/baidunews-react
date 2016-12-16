'use strict';

import React from 'react';
import axios from 'axios';
require('styles//Admin.scss');

class AdminArticleInfoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      admins: []
    };
  }

  componentDidMount() {
    let _this = this
    axios.get('http://localhost:3333/api/admins').then(function (res) {
      _this.setState({
        admins: res.data
      });
    })
  }

  addNews() {
    document.getElementById()

  }

  delNews() {

  }

  render() {
    let admins = this.state.admins.map(function (admin) {
      return (
        <tr key={admin.id}>
          <td className="col-md-1"><input type="checkbox" id="num" value={admin.id}/></td>
          <td className="col-md-1">{admin.id}</td>
          <td className="col-md-3">{admin.type}</td>
          <td className="col-md-4">{admin.title}</td>
          <td className="col-md-1">{new Date(admin.time).toLocaleString()}</td>
          <td className="col-md-2">
            <div className="prev">预览</div>
            <div className="update">修改</div>
          </td>
        </tr>
      );
    });
    return (
      <div className="info">
        <div className="info-container">
          <div className="add-news" onClick={this.addNews}>添加新闻</div>
          <div className="del-news" onClick={this.delNews}>删除新闻</div>
          <div className="row">
            <div className="col-md-12">
              <table className="table table-striped">
                <thead>
                <tr>
                  <th className="col-md-1">
                    <input type="checkbox" id="all-num"/>
                  </th>
                  <th className="col-md-1">id</th>
                  <th className="col-md-3">栏目</th>
                  <th className="col-md-4">标题</th>
                  <th className="col-md-1">时间</th>
                  <th className="col-md-2">选项</th>
                </tr>
                </thead>
                <tbody id="tbody">
                {admins}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AdminArticleInfoComponent.displayName = 'AdminArticleInfoComponent';

// Uncomment properties you need
// AdminArticleInfoComponent.propTypes = {};
// AdminArticleInfoComponent.defaultProps = {};

export default AdminArticleInfoComponent;
