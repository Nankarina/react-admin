import React, { PureComponent } from 'react'
import { Icon, Menu, Dropdown, } from 'antd'
import styles from './index.less'

export default class Header extends PureComponent {

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人中心</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">设置</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">退出登录</a>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className={styles.Header}>
        <div className={styles.logo}>
          <img src="../../../public/img/logo.jpg" alt="图片" />
          <span>后台管理系统</span>
        </div>
        <div className={styles.headerRight}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              <Icon type="smile" style={{ marginRight: '7px' }} />
              <span>admin</span>
              <Icon type="down" />
            </a>
          </Dropdown>

        </div>
      </div>
    )
  }
}
