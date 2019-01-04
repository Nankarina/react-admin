import React, { PureComponent } from 'react'
import { Table } from 'antd'
class TablePage extends PureComponent {
  render() {
    const { dataSource, columns } = this.props
    return (
      <Table
          columns={columns}
          dataSource={dataSource}
      />
    )
  }
}
export default TablePage