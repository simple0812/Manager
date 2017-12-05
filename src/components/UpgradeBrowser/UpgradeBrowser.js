import React from 'react';
import PropTypes from 'prop-types';
import './less/upgradeBrowser.less';

class UpgradeBrowser extends React.Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='upgrade-container'>
        <div className='img-hint-container'>

          <div src="./assets/images/upgrade.png" className="img-upgrade" />
          <div src="./assets/images/upgrade-now.png" className="img-upgrade-now"/>
          <div src="./assets/images/upgrade-hint.png" className="img-upgrade-hint"/>
          <p>你正在使用Internet Explorer的过旧版本（IE6、IE7、IE8 或者使用该内核的浏览器）。</p>
          <p>这意味这在升级浏览器前，你将无法访问此网站</p>
        </div>
        <ul className="browser-container">
          <li>
            <div className='chrome-browser'></div>
            <p>Chrome</p>
            <a href='http://www.google.cn/chrome/browser/desktop/index.html'>浏览官方网站></a>
          </li>
          <li>
            <div className='safari-browser'></div>
            <p>Safari</p>
            <a href='https://www.apple.com/cn/safari/'>浏览官方网站></a>
          </li>
          <li>
            <div className='firefox-browser'></div>
            <p>Firefox</p>
            <a href='http://www.firefox.com.cn/'>浏览官方网站></a>
          </li>
          <li>
            <div className='ie-browser'></div>
            <p>Internet Explorer</p>
            <a href='https://www.microsoft.com/zh-cn/windows/microsoft-edge'>浏览官方网站></a>
          </li>
          <li>
            <div className='opera-browser'></div>
            <p>Opera</p>
            <a href='http://www.opera.com/zh-cn'>浏览官方网站></a>
          </li>
        </ul>
        <p className="upgrade-bottom">推荐使用以上浏览器的最新版本。如果你的电脑已有以上浏览器的最新版本则直接使用该浏览器访问即可</p>
      </div>
    );
  }
}

export default UpgradeBrowser;
