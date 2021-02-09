import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "./app-sidebar.scss";
import { IRouter } from "../model/router-model";
const { Sider } = Layout;
interface IProps {
  collapsed: boolean;
  navigation: IRouter[];
}

class AppSidebar extends React.Component<IProps> {
  render() {
    return (
      <React.Fragment>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
          width="15%"
          className="sidebar"
        >
          <div className="sidebar-top" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {this.props.navigation.map((r, i) => (
              <Menu.Item key={i + 1}>
                <Link to={r.path}>
                  <Icon type={r.icon} className="navbar-icon" />
                  <span className="navbar-name">{r.name}</span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
      </React.Fragment>
    );
  }
}

export default AppSidebar;
