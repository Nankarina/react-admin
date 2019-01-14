import React, { PureComponent } from 'react'
import { Form, Icon, Input, Button, Spin } from 'antd'
import styles from './login.less'
import { connect } from "dva"
const FormItem = Form.Item
@Form.create()

class Login extends PureComponent {
  state = {
    loading: false,
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('userInfo', 'adime')
        dispatch({
          type: 'example/login'
        })
        this.setState({
          loading: true
        })
      }
    });
  }
  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    const { loading } = this.state
    const antIcon = <Icon type="loading" style={{ fontSize: 18 }} spin />
    return (
      <div className={styles.login_style}>
        <div className={styles.login_main}>
          <div className={styles.login_name}>
            AC·管理中心
					</div>
          <div className={styles.login_form}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '用户名不能为空!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem style={{ marginTop: '-10px' }}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '密码不能为空!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem style={{ marginTop: '-10px' }}>
                <Spin indicator={antIcon} spinning={loading}>
                  <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '240px' }}>
                    登录
								</Button>
                </Spin>
              </FormItem>
            </Form>
          </div>
          <div className={styles.login_version}>
            Copyright <Icon type="copyright" />2014-2018 沃朴物联 版权所有 / 浙公网备案 33011022012770 号
					</div>
        </div>
      </div>
    )
  }
}
export default connect()(Login)
