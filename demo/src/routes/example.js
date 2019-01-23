import  { PureComponent } from 'react'
import TableExample from '../../src/components/table'
import { connect } from 'dva'
import uuid from 'uuid'
class Example extends PureComponent {
  componentDidMount() {
    // const { dispatch } = this.props
    // dispatch({
    //   type: 'example/getDataList'
    // })
  }
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      align: 'center',
    }]
    const dataSource = [{
      index: '1',
      name: '张三',
      age: 20
    }, {
      index: '2',
      name: '王五',
      age: 22
    }, {
      index: '3',
      name: '李四',
      age: 28
    }]
    return (
      <div className="context">
        <TableExample
          dataSource={dataSource}
          columns={columns}
          rowKey={uuid.v4()}
        />
      </div>
    )
  }
}
export default connect()(Example)