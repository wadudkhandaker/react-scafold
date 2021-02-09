import React from "react";
import { Layout, Icon } from "antd";
const { Header } = Layout;

interface IPros {
  toggle: any;
  collapsed: boolean;
}

class AppHeader extends React.Component<IPros> {
  render() {
    return (
      <React.Fragment>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Icon
            className="trigger"
            type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.props.toggle}
          />
        </Header>
      </React.Fragment>
    );
  }
}

export default AppHeader;
