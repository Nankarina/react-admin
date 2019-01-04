import React, { PureComponent } from 'react'
import TablePage from '../components/table/index'
import { connect } from 'dva'
@connect(({ loading, example }) => ({
  loading: loading.effects['example/getCompanyList'],
}))
class Option extends PureComponent {
  componentDidMount() {
    const { dispatch, loading } = this.props
    console.log(loading)
    dispatch({
      type: 'example/getCompanyList'
    })
  }
  render() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }];
    return (
      <div className="context">
        <TablePage
            columns={columns}
            // companyList={companyList}
            dataSource={dataSource}
        />
      </div>
    )
  }
}
export default Option


