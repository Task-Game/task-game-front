import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "../css/loginPage/menu.css";

export default class MenuExampleBasic extends Component {
  state = {};
  render() {
    return (
      <Menu inverted>
        <div id="menu-items">
          <Menu.Item>
            <p id="copyright">TaskGame Etecia© 2019 - 2020</p>
          </Menu.Item>
        </div>
      </Menu>
    );
  }
}
