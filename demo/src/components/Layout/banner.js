import React, { PureComponent } from 'react'
import { Breadcrumb } from 'antd'
import { FormattedMessage } from 'react-intl'
class BannerPage extends PureComponent {
  render() {
    const { dataList } = this.props
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <FormattedMessage id="homePage"/>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{dataList}</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
export default BannerPage