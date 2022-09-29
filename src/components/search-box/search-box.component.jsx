import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onSearchChange } = this.props;

    return (
      <div>
        <input
          type="search"
          className="search-box"
          placeholder="search monstrers"
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
