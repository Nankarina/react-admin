import  { PureComponent } from 'react'
import { connect } from 'dva'
import { Layout, Menu, Icon } from 'antd'
import HeaderPage from '../components/Layout/Header'
import menu from '../common/menu'
import MenuItem from 'antd/lib/menu/MenuItem'
import Banner from '../components/Layout/banner'
// import Main from '../components/Layout/main'
import { Link } from 'dva/router'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

class LayoutAdmin extends PureComponent {
  state = {
    collapsed: false,
    singleMenu: [],
    doubleMenu: [],
    bill: menu[0].name
  }

  componentDidMount() {
    const { dispatch } = this.props
    if(localStorage.user && localStorage.getItem('user') !== '已登录'){
      dispatch({
        type: 'example/redirect',
        payload: {
          name: '/login'
        }
      })
    }
    this.handleMenu()
  }

  componentWillMount() {
   
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }
  handleSet = (data) => {
    this.setState({ bill: data.name })
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
      return doubleMenu
    })
    console.log(doubleMenu)
    this.setState({
      singleMenu: singleMenu,
      doubleMenu: doubleMenu
    })
  }

  render() {
    const { collapsed, singleMenu, doubleMenu, bill } = this.state
    const hiStatus = true
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
                  <Menu.Item
                    key={index}
                    onClick={() => this.handleSet(item)}
                  >
                    <Link
                      replace={hiStatus}
                      to={`/${item.name}`}
                    >
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
                          <Link replace={hiStatus} to={`/${item.name}`}>
                            <Icon type={item.icon} />
                            <span>{item.name}</span>
                          </Link>
                        </MenuItem>
                      ))
                    }
                  </SubMenu>
                ))
              }
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px', minHeight: 903 }}>
              <Banner dataList={bill} />
              {this.props.children}
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
export default connect()(LayoutAdmin)