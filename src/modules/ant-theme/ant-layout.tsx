import React from "react";
import "antd/dist/antd.css";
import "./applayout.scss";
import { Layout } from "antd";
import AppHeader from "../app-header/app-header";
import AppSidebar from "../app-sidebar/app-sidebar";
import { IProps, IState } from "./model";

const { Content } = Layout;

class AntLayout extends React.Component<IProps, IState> {
  state: any = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <React.Fragment>
        <Layout>
          <AppSidebar
            collapsed={this.state.collapsed}
            navigation={this.props.navigation}
          />
          <Layout>
            <AppHeader toggle={this.toggle} collapsed={this.state.collapsed} />
            <Content className="contain-wrapper">{this.props.children}</Content>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

export default AntLayout;
