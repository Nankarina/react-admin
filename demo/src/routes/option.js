import React, { PureComponent } from 'react'
import TablePage from '../components/table/index'
import { connect } from 'dva'
class Option extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'example/getCompanyList'
    })
  }
  render() {
    return (
      <div className="context">
        <TablePage />
      </div>
    )
  }
}
export default connect()(Option)