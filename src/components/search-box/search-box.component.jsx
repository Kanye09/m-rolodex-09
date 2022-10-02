import React, { Component } from "react";
import "./search-box.style.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    const { placeholder } = this.props;
    const { className } = this.props;

    return (
      <div>
        <input
          type="search"
          className={className}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
