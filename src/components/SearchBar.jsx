import React from "react";

class SearchBar extends React.Component {
  state = { inputVideo: "" };

  onInputChange = (event) => {
    const { value } = event.target;

    this.setState({ inputVideo: value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.inputVideo);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{padding: '2%'}}>
        <form action="" onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
              <label>Video search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.inputVideo}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
