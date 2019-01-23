import React, { PureComponent } from 'react'
import { Icon, Menu, Dropdown, Button } from 'antd'
import { FormattedMessage } from 'react-intl'
import zh from '../../i18n/zh_CN'
import { connect } from "dva"

import styles from './index.less'

class Header extends PureComponent {
  loginOut = () =>{
    console.log('in')
    const { dispatch } = this.props
    dispatch({
      type: 'example/loginOut'
    }).then(() => {
      localStorage.setItem('user','已退出')
    })
  }
  handleChange = (lan) => {
    localStorage.setItem('lan',lan)
    window.location.reload()
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
              href="http://www.alipay.com/"
              rel="noopener noreferrer"
              target="_blank"
          >
          <FormattedMessage id="person" defaultMessage={zh.person} />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
              href="http://www.taobao.com/"
              rel="noopener noreferrer"
              target="_blank"

          >设置</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => this.loginOut()}
          >退出登录</a>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className={styles.Header}>
        <div className={styles.logo}>
          <img
              alt="图片"
              src="../../../public/img/logo.jpg"
          />
          <span>后台管理系统</span>
        </div>
        <Button onClick={() => this.handleChange('zh_CN')}>中文</Button>
        <Button style={{margin:'0 10px'}} onClick={() => this.handleChange('en_US')}>英文</Button>
        <div className={styles.headerRight}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
              <Icon
                  style={{ marginRight: '7px' }}
                  type="smile"
              />
              <span>admin</span>
              <Icon type="down" />
            </a>
          </Dropdown>

        </div>
      </div>
    )
  }
}

export default connect()(Header)