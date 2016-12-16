'use strict';

import React from 'react';

require('styles//Login.scss');

class LoginComponent extends React.Component {
  render() {
    return (
      <div className="login-component">
        <div className="container-fluid">
          <div className="logo"><img src="../images/logo.png" alt="" className="img-responsive"/></div>
          <div id="loginModal" className="modal show">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close">x</button>
                  <h1 className="text-center text-primary">登录</h1>
                </div>
                <div className="modal-body">
                  <form className="form col-md-12 center-block">
                    <div className="form-group">
                      <input type="text" id="username" className="form-control input-lg" placeholder="电子邮件"/>
                    </div>
                    <div className="form-group">
                      <input type="password" id="password" className="form-control input-lg" placeholder="登录密码"/>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary btn-lg btn-block" id="loginBtn" value="登录"/>
                      <span><a href="#">找回密码</a></span>
                      <span><a href="#" className="pull-right">注册</a></span>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">Copyright © 2016 shifeng 版本号： Ver 1.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginComponent.displayName = 'LoginComponent';

// Uncomment properties you need
// LoginComponent.propTypes = {};
// LoginComponent.defaultProps = {};

export default LoginComponent;
