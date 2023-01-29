import React, { Components } from "react";
class Try extends Component {
  render() {
    return (
      <li>
        <b>{this.props.value}</b>
        {this.props.index}
      </li>
    );
  }
}
export default Try;
