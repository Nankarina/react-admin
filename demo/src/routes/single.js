import { PureComponent } from 'react'
// import { Spin } from 'antd'
class Single extends PureComponent {
  componentDidMount() {
    const arr = [1, 4, 6, 10]
    const arrSecond = ['lalla', 'test']
    const arrLast = [...arr, ...arrSecond]
    console.log(arrLast)

    const obj = {
      a: 30,
      b: 60,
    }
    const objSecond = {
      ...obj,
      b: 70,
    }
    console.log(objSecond)
  }
  render() {
    return (
      <div className="context">
        <h2>30 seconds of es6</h2>
        <p><strong style={{ color: 'red' }}>Adapter</strong> 适配器 <strong style={{ color: 'red' }}>ary</strong></p>
        <div>


        </div>
      </div>
    )
  }
}
export default Single