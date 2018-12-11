import React, { PureComponent } from 'react'
// import { connect } from 'dva'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import HeaderPage from '../components/Layout/Header'
import menu from '../common/menu'
import MenuItem from 'antd/lib/menu/MenuItem'
import { Link } from 'dva/router'
// import styles from './IndexPage.less'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

export default class LayoutAdmin extends PureComponent {
  state = {
    collapsed: false,
    singleMenu: [],
    doubleMenu: []
  }

  componentDidMount() {
    this.handleMenu()
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }

  handleMenu = () => {
    let singleMenu = []
    let doubleMenu = []
    menu.map((item) => {
      if (item.children) {
        doubleMenu.push(item)
      } else {
        singleMenu.push(item)
      }
    })
    this.setState({
      singleMenu: singleMenu,
      doubleMenu: doubleMenu
    })
  }

  render() {
    const { collapsed, singleMenu, doubleMenu } = this.state
    console.log(singleMenu)
    console.log(doubleMenu)
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: '#fff', padding: 0, height: '72px' }}>
          <HeaderPage />
        </Header>
        <Layout style={{ background: '#fff' }}>
          <Sider
              collapsed={collapsed}
              collapsible
              onCollapse={this.onCollapse}
          >
            <Menu
                defaultSelectedKeys={['0']}
                mode="inline"
                theme="dark"
            >
              {
                singleMenu.length && singleMenu.map((item, index) => (
                  <Menu.Item key={index}>
                    <Link to={`/${item.name}`}>
                      <Icon type={item.icon} />
                      <span>{item.name}</span>
                    </Link>

                  </Menu.Item>
                )
                )
              }
              {
                doubleMenu.length && doubleMenu.map((item) => (
                  <SubMenu key={item.name}
                      title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
                  >
                    {
                      item.children.map((item) => (
                        <MenuItem key={item.name}>
                          <Icon type={item.icon} />
                          <span>{item.name}</span>
                        </MenuItem>
                      ))
                    }
                  </SubMenu>
                ))
              }
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
              </Breadcrumb>
              {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
            </div> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
          </Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
