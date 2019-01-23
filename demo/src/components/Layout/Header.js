import React, { PureComponent } from 'react'
import { Icon, Menu, Dropdown, Button } from 'antd'
import { FormattedMessage } from 'react-intl'
import zh from '../../i18n/zh_CN'
import { connect } from "dva"

import styles from './index.less'

class Header extends PureComponent {
  state = {
    lanType: localStorage.lan && localStorage.getItem('lan') ? localStorage.getItem('lan') : 'zh_CN',
  }

  loginOut = () =>{
    const { dispatch } = this.props
    dispatch({
      type: 'example/loginOut'
    }).then(() => {
      localStorage.setItem('user','已退出')
    })
  }

  handleChange = (lan) => {
    localStorage.setItem('lan', lan)
    this.setState({
      lanType: lan,
    })
    window.location.reload()
  }

  render() {
    const { lanType } = this.state
    const selected = localStorage.getItem('lan')
    let lastSelected = 'default'
    let lastSelectedEn = 'default'
    if (lanType === selected && selected === 'zh_CN') {
      lastSelected = 'primary'
    } else {
      lastSelected = 'default'
    }
    if (lanType === selected && selected === 'en_US') {
      lastSelectedEn = 'primary'
    } else {
      lastSelectedEn = 'default'
    }

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

          >
            <FormattedMessage id="set"/>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => this.loginOut()}
          >
            <FormattedMessage id="logout"/>
          </a>
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
          <span>
            <FormattedMessage id="backMannger"/>
          </span>
        </div>
        <Button onClick={() => this.handleChange('zh_CN')} type={lastSelected}>
          <FormattedMessage id="chinese"/>
        </Button>
        <Button style={{margin:'0 10px'}} onClick={() => this.handleChange('en_US')} type={lastSelectedEn}>
          <FormattedMessage id="english"/>
        </Button>
        <div className={styles.headerRight}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
              {/* <Icon
                  style={{ marginRight: '7px' }}
                  type="smile"
              /> */}
              <img src="../../../public/img/person.jpg"  alt="图片" style={{width: '50px', height: '50px', borderRadius: '50%', marginRight: '17px'}}/>
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