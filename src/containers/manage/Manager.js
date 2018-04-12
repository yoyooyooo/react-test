import { Button, Divider, Form, Input, Layout, Modal, Row, Table } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import * as Actions from "../.././actions/actionCreacter";
import "../../css/manage.scss";
const FormItem = Form.Item;

const Search = Input.Search;
const { Header, Footer, Sider, Content } = Layout;

class Manage extends Component {
  state = { data: [], isLoadData: false, visible: false };
  componentWillMount() {
    this._isMounted = true;
  }
  componentDidMount() {}
  componentWillUnmount() {
    this._isMounted = false;
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    let formData = this.props.form;
    console.log(formData.getFieldsValue());
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  handleSubmit() {}
  render() {
    // console.log(Object.keys(this.state.data[0]));
    const { loadAllSystem, querySyetem } = this.props;
    const { data, isLoadData } = this.props;
    const columns = [
      { title: "id", dataIndex: "ID", key: "id", sorter: (a, b) => a.age - b.age },
      {
        title: "name",
        dataIndex: "NAME",
        key: "name",
        render: text => <span>{text}</span>
      },
      {
        title: "innerpath",
        dataIndex: "INNERPATH",
        key: "innerpath",
        render: text => <a>{text}</a>
      },
      {
        title: "outerpath",
        dataIndex: "OUTERPATH",
        key: "outerpath",
        render: text => <a>{text}</a>
      },
      {
        title: "action",
        key: "action",
        render: (text, record) => (
          <span>
            <a>Add</a>
            <Divider type="vertical" />
            <a>Edit</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        )
      }
    ];
    return (
      <Layout style={{ height: "100%" }}>
        <Header />
        <Content>
          <Layout>
            <Row span={24}>
              <Search
                placeholder="input something"
                onSearch={value => querySyetem(value)}
                style={{ width: 200 }}
              />
              <Button type="primary" icon="search" onClick={loadAllSystem}>
                Search
              </Button>
              <Button type="primary" icon="search" onClick={this.showModal}>
                add System
              </Button>
            </Row>
            <Table
              rowKey={(r, i) => i}
              columns={columns}
              dataSource={data.length > 0 ? data : null}
            />
            <Modal
              title="添加系统"
              wrapClassName="vertical-center-modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              cancelText="关闭"
              okText="确认"
            >
              <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="系统名称">
                  <Input placeholder="请输入系统名称" />
                </FormItem>
                <FormItem label="内网地址">
                  <Input placeholder="请输入内网地址" />
                </FormItem>
                <FormItem label="外网地址">
                  <Input placeholder="请输入外网地址" />
                </FormItem>
              </Form>
            </Modal>
          </Layout>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.manage.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadAllSystem: () => {
      dispatch(Actions.loadData());
    },
    querySyetem: value => {
      dispatch(Actions.filterSystem(value));
    }
  };
};
const wrapManage = Form.create({})(Manage);
const App = connect(mapStateToProps, mapDispatchToProps)(wrapManage);
export default App;
