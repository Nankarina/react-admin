import { PureComponent } from 'react'
// import TablePage from '../components/table/index'
import { Table } from 'antd'
import { connect } from 'dva'
// @connect(({ loading, example }) => ({
//   loading: loading.effects['example/getCompanyList'],
// }))

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        lallalalala:
        {props.left}
      </div>
      <div className="SplitPane-right">
        lueluelue
        :{props.right}
      </div>
    </div>
  );
}
function Contacts() {
  return (
    <div>contacts</div>
  )
}

function Chat() {
  return (
    <div>Chat</div>
  )
}
function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

class Option extends PureComponent {
  componentDidMount() { }

  render() {
    const arr = [1, 5, 8]
    console.log(...arr)
    const columns = [
      {title: '', dataIndex: 'index', key: 'index', width: '50px', background: '#cccccc'},
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'Address', dataIndex: 'address', key: 'address' },
      {
        title: 'Action', dataIndex: '', key: 'x', render: () => <a href="javascript:;">Delete</a>,
      },
    ];
    
    const data = [
      {
        index: 0, key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      },
      {
        index: 1, key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
      },
      {
        index: 2,  key: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
      },
    ];
    return (
      <div className="context">
        <Table
          columns={columns}
          // expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
          dataSource={data}
        />
        <div>--------------------------组合 继承---------------------------------------------</div>
        <WelcomeDialog />
        <App />
        <div>---------------------------------flux-----------------------------------------------</div>
      </div>
    )
  }
}
export default Option


