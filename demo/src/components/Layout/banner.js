import React, { PureComponent } from 'react'
import { Breadcrumb } from 'antd'
class BannerPage extends PureComponent {
  render() {
    const { dataList } = this.props
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>{dataList}</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
export default BannerPage