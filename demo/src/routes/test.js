import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
// 纯函数：不改变自身的输入值
function sum(a, b) {
  return a + b
}

function changeOri(a, b) {
  a = b + a
  return a
}

function ChildrenElement(props) {
  return <h1>我是{props.name}</h1>
}

function ManyElement(props) {
  return <div>
    <div>姓名：<span>{props.userName}</span></div>
    <div>年龄：<span>{props.age}</span></div>
    <div>性别：<span>{props.sex}</span></div>
  </div>
}

const NewElement = (props) => {
  return (
    <div>这是{props.context}</div>
  )
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function RenderLi(props){
  const li = props.li
  return(
    <li>{li}</li>
  )
}

// 封装的渲染组件
function RenderUl(props) {
  // 在map()方法的内部调用元素时，你最好随时记得为每一个元素加上一个独一无二的key
  const list = props.list
  const listItems = list.map((item) =>
    <li key={item}>{item}</li>
    // 若li也是一个组件，那么key值应该在组件中保存 
    // <RnderLi key={item} li={item} />
  )
  return (
    <ul>{listItems}</ul>
  )
}

// 不绑定this的事件函数声明方法
// function handleClick(e){
//   console.log(e)
//   console.log('lalalalla')
// }

class Single extends PureComponent {
  // 构造器 创建实例对象，定义this指向，继承父类的props 唯一能初始化state的地方
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      age: props.age,
      sex: props.sex,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    userName: ''
  }
  // 生命周期函数

  UNSAFE_componentWillMount() {
  }

  // 仅在React.PureComponent中可以使用该方法
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  // }

  UNSAFE_componentWillReceiveProps() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }
  // 当你使用 ES6 class 语法来定义一个组件的时候，事件处理器会成为类的一个方法
  handleClick() {}

  change = () => {}

  third(){}

  handleRow = (id, e) => {}

  handleRowSecond = (id, e) => {}

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      userName: e.target.value,
    })
  }
  handleSubmit = () => {}

  render() {
    const arrData = [1, 2, 3]
    const doubled = arrData.map((item) => item*2)
    console.log(doubled)
    // 列表渲染，需要指定key
    const liList = doubled.map((item) => 
      <li key={item}>{item}</li>
    )
    const { userName } = this.state
    return (
      // 多个组件存在必须要一个根元素包裹
      <div className="context">
        <ChildrenElement name="孩子1" />
        <ChildrenElement name="孩子2" />
        <ChildrenElement name="孩子3" />
        <ManyElement userName="test" age="18" sex="boy" />
        <div>render function value: {sum(5, 10)}</div>
        <div>not render function value: {changeOri(10, 20)}</div>
        <NewElement context='测试' />
        <button onClick={this.handleClick}>点击</button>
        {/* 1、若this.handleClick后没有(),此时需要在初始化构造函数中绑定this，不然在函数中打印this，为undefined 
          this.handleClick = this.handleClick.bind(this)
        */}
        <button onClick={this.change}>点击 second</button>
        {/* 2、使用属性初始化器来正确的绑定回调函数 change = () => {}*/}
        <button onClick={() => this.third()}>点击 third</button>
        {/* 3、没有使用属性初始化器语法，你可以在回调函数中使用 箭头函数 */}
        {/* 性能问题：使用这个语法有个问题就是每次 LoggingButton 渲染的时候都会创建一个不同的回调函数。
        在大多数情况下，这没有问题。然而如果这个回调函数作为一个属性值传入低阶组件，
        这些组件可能会进行额外的重新渲染。
        我们通常建议在构造函数中绑定或使用属性初始化器语法来避免这类性能问题。 */}


        <div>-------------------------------向事件处理程序传递参数-----------------------------------------</div>
        {/* 参数 e 作为 React 事件对象将会被作为第二个参数进行传递。通过箭头函数的方式，事件对象必须显式的进行传递，
        但是通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。 */}
        <button onClick={(e) => this.handleRow(3, e)}>Delete Row</button>
        <button onClick={this.handleRowSecond.bind(this, 6)}>Delete Row Second</button>
        {/* 通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面 */}

        <div>--------------------------------条件渲染--------------------------------------------------</div>
        <Greeting  isLoggedIn={false}/>
        <Greeting  isLoggedIn={true}/>
        {
          arrData.length > 0 && <h2>与运算条件渲染</h2>
        }
        {
          arrData.length > 0 ? <h2>三目运算条件渲染</h2> : <h2>这是测算</h2>
        }

        <div>---------------------------列表 & keys-------------------------------------------</div>
        <ul>{liList}</ul>
        <RenderUl  list={[2,8,10,30]}/>
        <div>-------------------------------表单--------------------------------------------------</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            name:
            {/* input如果存在onChange事件，要设置一个初始值 */}
            <input type="text" value={userName || ''} onChange={(e) => this.handleChange(e)}/>
          </label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
// 组件默认状态 里面可以定义属性和函数
Single.defaultProps = {
  name: 'test',
  age: 18,
  sex: 'boy',
}

// 类型检测  先引入import PropTypes from "prop-types"
Single.propTypes = {
  name: PropTypes.string,
}
export default Single